#!/usr/bin/env node
// CLI de la base de datos del Estudio Web.
// Requiere Node 22.13+ (usa el módulo integrado node:sqlite; no hay que instalar nada).
// Uso: node --no-warnings herramientas/db.mjs <comando> [args]   (o el atajo:  db <comando>)

import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DB_PATH = path.join(RAIZ, 'datos', 'estudio.db');
const JSON_PATH = path.join(RAIZ, 'datos', 'estudio.json');
const ESQUEMA = path.join(RAIZ, 'datos', 'esquema.sql');

const FASES = ['analisis', 'assets', 'contenido', 'diseno', 'desarrollo', 'revision', 'publicado', 'pausado'];
const CAMPOS_EDITABLES = ['numero', 'carpeta', 'nombre', 'cliente', 'url_origen', 'rubro', 'stack', 'url_preview', 'url_produccion', 'hosting', 'repo', 'notas'];

fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
const db = new DatabaseSync(DB_PATH);
db.exec('PRAGMA foreign_keys = ON;');
db.exec(fs.readFileSync(ESQUEMA, 'utf8'));
// Migraciones suaves (bases creadas antes de estas columnas/tablas)
const cols = db.prepare('PRAGMA table_info(proyectos)').all().map((c) => c.name);
if (!cols.includes('numero')) db.exec('ALTER TABLE proyectos ADD COLUMN numero INTEGER');
if (!cols.includes('carpeta')) db.exec('ALTER TABLE proyectos ADD COLUMN carpeta TEXT');
db.exec("UPDATE proyectos SET carpeta = slug WHERE carpeta IS NULL");

const [cmd, ...args] = process.argv.slice(2);
let autor = 'claude';
const i = args.indexOf('--autor');
if (i >= 0) { autor = args[i + 1] || autor; args.splice(i, 2); }

function fallar(msg) { console.error('Error: ' + msg); process.exit(1); }
function proyecto(slug) {
  if (!slug) fallar('falta el slug del proyecto');
  const p = db.prepare('SELECT * FROM proyectos WHERE slug = ? OR carpeta = ?').get(slug, slug);
  if (!p) fallar(`no existe el proyecto "${slug}". Usa: db proyectos`);
  return p;
}
function tocar(id) { db.prepare("UPDATE proyectos SET actualizado = datetime('now','localtime') WHERE id = ?").run(id); }
function log(pid, accion, detalle = null) {
  db.prepare('INSERT INTO bitacora (proyecto_id, autor, accion, detalle) VALUES (?,?,?,?)').run(pid, autor, accion, detalle);
}
function tabla(filas) { if (!filas.length) console.log('(sin resultados)'); else console.table(filas); }

function exportar() {
  const t = (q) => db.prepare(q).all();
  const data = {
    generado: new Date().toISOString(),
    nota: 'Exportación automática de datos/estudio.db. No editar a mano.',
    proyectos: t('SELECT * FROM proyectos ORDER BY COALESCE(numero, 999), id'),
    fases: t('SELECT f.*, p.carpeta FROM fases f JOIN proyectos p ON p.id = f.proyecto_id ORDER BY p.numero, f.numero'),
    versiones: t('SELECT v.*, p.carpeta FROM versiones v JOIN proyectos p ON p.id = v.proyecto_id ORDER BY v.id'),
    tareas: t("SELECT t.*, p.slug FROM tareas t JOIN proyectos p ON p.id = t.proyecto_id ORDER BY t.estado <> 'pendiente', t.id"),
    bitacora: t('SELECT b.*, p.slug FROM bitacora b LEFT JOIN proyectos p ON p.id = b.proyecto_id ORDER BY b.id DESC LIMIT 300'),
    accesos: t('SELECT a.*, p.slug FROM accesos a LEFT JOIN proyectos p ON p.id = a.proyecto_id'),
    assets_resumen: t('SELECT p.slug, COUNT(a.id) total, SUM(a.descargado) descargados FROM proyectos p LEFT JOIN assets a ON a.proyecto_id = p.id GROUP BY p.id'),
  };
  fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));
}

const ESCRIBE = new Set(['fase', 'version', 'nuevo', 'estado', 'set', 'tarea', 'hecha', 'log', 'acceso', 'sync-assets', 'init', 'exportar']);

switch (cmd) {
  case 'init':
    console.log('Base de datos lista en ' + DB_PATH);
    break;

  case 'proyectos':
    tabla(db.prepare('SELECT numero, carpeta, nombre, estado, url_preview, actualizado FROM proyectos ORDER BY COALESCE(numero, 999), id').all());
    break;

  case 'proyecto': {
    const p = proyecto(args[0]);
    console.log(p);
    const t = db.prepare("SELECT COUNT(*) n FROM tareas WHERE proyecto_id = ? AND estado <> 'hecha'").get(p.id);
    const a = db.prepare('SELECT COUNT(*) total, SUM(descargado) ok FROM assets WHERE proyecto_id = ?').get(p.id);
    console.log(`Tareas abiertas: ${t.n} | Assets: ${a.ok ?? 0}/${a.total}`);
    break;
  }

  case 'nuevo': {
    const [slug, nombre, url] = args;
    if (!slug || !nombre) fallar('uso: db nuevo <slug> "<nombre>" [url]');
    if (!/^[a-z0-9-]+$/.test(slug)) fallar('el slug solo puede tener minúsculas, números y guiones');
    if (db.prepare('SELECT 1 FROM proyectos WHERE slug = ?').get(slug)) { console.log(`El proyecto "${slug}" ya existe.`); break; }
    const r = db.prepare('INSERT INTO proyectos (slug, nombre, url_origen) VALUES (?,?,?)').run(slug, nombre, url ?? null);
    log(r.lastInsertRowid, 'Proyecto creado', url ?? null);
    console.log(`Proyecto "${slug}" creado.`);
    break;
  }

  case 'estado': {
    const p = proyecto(args[0]);
    const fase = args[1];
    if (!FASES.includes(fase)) fallar('fase inválida. Opciones: ' + FASES.join(', '));
    db.prepare('UPDATE proyectos SET estado = ? WHERE id = ?').run(fase, p.id);
    tocar(p.id); log(p.id, `Fase: ${p.estado} -> ${fase}`);
    console.log(`${p.slug}: ${p.estado} -> ${fase}`);
    break;
  }

  case 'set': {
    const p = proyecto(args[0]);
    const [, campo, ...resto] = args;
    if (!CAMPOS_EDITABLES.includes(campo)) fallar('campo no editable. Opciones: ' + CAMPOS_EDITABLES.join(', '));
    const valor = resto.join(' ');
    db.prepare(`UPDATE proyectos SET ${campo} = ? WHERE id = ?`).run(valor, p.id);
    tocar(p.id); log(p.id, `Campo ${campo} actualizado`, valor);
    console.log(`${p.slug}.${campo} = ${valor}`);
    break;
  }

  case 'tarea': {
    const p = proyecto(args[0]);
    const titulo = args[1];
    const resp = args[2] ?? 'claude';
    if (!titulo) fallar('uso: db tarea <slug> "<titulo>" [claude|persona]');
    if (!['claude', 'persona'].includes(resp)) fallar('responsable: claude o persona');
    const r = db.prepare('INSERT INTO tareas (proyecto_id, titulo, responsable) VALUES (?,?,?)').run(p.id, titulo, resp);
    tocar(p.id);
    console.log(`Tarea #${r.lastInsertRowid} creada (${resp}).`);
    break;
  }

  case 'tareas': {
    const q = args[0]
      ? db.prepare("SELECT t.id, t.titulo, t.responsable, t.estado, t.creado FROM tareas t JOIN proyectos p ON p.id = t.proyecto_id WHERE p.slug = ? ORDER BY t.estado = 'hecha', t.id").all(args[0])
      : db.prepare("SELECT t.id, p.slug, t.titulo, t.responsable, t.estado FROM tareas t JOIN proyectos p ON p.id = t.proyecto_id WHERE t.estado <> 'hecha' ORDER BY p.slug, t.id").all();
    tabla(q);
    break;
  }

  case 'hecha': {
    const id = Number(args[0]);
    const t = db.prepare('SELECT * FROM tareas WHERE id = ?').get(id);
    if (!t) fallar('no existe la tarea #' + args[0]);
    db.prepare("UPDATE tareas SET estado = 'hecha', cerrado = datetime('now','localtime') WHERE id = ?").run(id);
    tocar(t.proyecto_id); log(t.proyecto_id, `Tarea #${id} hecha`, t.titulo);
    console.log(`Tarea #${id} marcada como hecha.`);
    break;
  }

  case 'log': {
    const [slug, accion, detalle] = args;
    if (!accion) fallar('uso: db log <slug|-> "<accion>" ["detalle"] [--autor persona]');
    const pid = slug === '-' ? null : proyecto(slug).id;
    log(pid, accion, detalle ?? null);
    if (pid) tocar(pid);
    console.log('Anotado en la bitácora.');
    break;
  }

  case 'bitacora': {
    const n = Number(args[1] ?? 20);
    const filas = args[0] && args[0] !== '-'
      ? db.prepare('SELECT b.fecha, b.autor, b.accion, b.detalle FROM bitacora b JOIN proyectos p ON p.id = b.proyecto_id WHERE p.slug = ? ORDER BY b.id DESC LIMIT ?').all(args[0], n)
      : db.prepare('SELECT b.fecha, p.slug, b.autor, b.accion FROM bitacora b LEFT JOIN proyectos p ON p.id = b.proyecto_id ORDER BY b.id DESC LIMIT ?').all(n);
    tabla(filas);
    break;
  }

  case 'acceso': {
    const [slug, servicio, cuenta, ...ubic] = args;
    if (!servicio) fallar('uso: db acceso <slug|-> <servicio> <cuenta> "<dónde está la credencial>"  (NUNCA la contraseña)');
    const pid = slug === '-' ? null : proyecto(slug).id;
    db.prepare('INSERT INTO accesos (proyecto_id, servicio, cuenta, ubicacion) VALUES (?,?,?,?)').run(pid, servicio, cuenta ?? null, ubic.join(' ') || null);
    console.log(`Acceso a ${servicio} registrado (sin secretos).`);
    break;
  }

  case 'sync-assets': {
    const p = proyecto(args[0]);
    const dirProy = path.join(RAIZ, 'proyectos', p.carpeta || p.slug);
    const manifiesto = path.join(dirProy, 'assets.json');
    if (!fs.existsSync(manifiesto)) fallar('no existe ' + manifiesto);
    const m = JSON.parse(fs.readFileSync(manifiesto, 'utf8'));
    const destino = path.join(dirProy, m.destino ?? 'assets');
    const up = db.prepare(`INSERT INTO assets (proyecto_id, url, carpeta, archivo, descargado, bytes) VALUES (?,?,?,?,?,?)
      ON CONFLICT(proyecto_id, url) DO UPDATE SET carpeta=excluded.carpeta, archivo=excluded.archivo, descargado=excluded.descargado, bytes=excluded.bytes`);
    let ok = 0; const faltan = [];
    for (const a of m.assets) {
      const url = a.url ?? (m.base + a.ruta);
      const archivo = a.archivo ?? path.basename(new URL(url).pathname);
      const ruta = path.join(destino, a.carpeta ?? '', archivo);
      const existe = fs.existsSync(ruta);
      up.run(p.id, url, a.carpeta ?? '', archivo, existe ? 1 : 0, existe ? fs.statSync(ruta).size : null);
      if (existe) ok++; else faltan.push(url);
    }
    tocar(p.id); log(p.id, 'Assets sincronizados', `${ok}/${m.assets.length}`);
    console.log(`Assets de ${p.slug}: ${ok}/${m.assets.length} descargados.`);
    if (faltan.length) console.log('Faltan:\n  ' + faltan.join('\n  '));
    break;
  }

  case 'fase': {
    // db fase <slug|carpeta> <n> <estado>   (lo usa el panel; útil para corregir a mano)
    const p = proyecto(args[0]);
    const n = Number(args[1]); const est = args[2];
    const validos = ['pendiente', 'en_curso', 'esperando', 'hecha', 'error', 'proximamente'];
    if (Number.isNaN(n) || !validos.includes(est)) fallar('uso: db fase <slug> <n> <' + validos.join('|') + '>');
    db.prepare('INSERT OR IGNORE INTO fases (proyecto_id, numero, estado) VALUES (?,?,?)').run(p.id, n, est);
    db.prepare("UPDATE fases SET estado = ?, fin = datetime('now','localtime') WHERE proyecto_id = ? AND numero = ?").run(est, p.id, n);
    console.log(`${p.carpeta || p.slug}: fase ${n} = ${est}`);
    break;
  }

  case 'version': {
    // db version <slug|carpeta> <etiqueta> [commit]
    const p = proyecto(args[0]);
    if (!args[1]) fallar('uso: db version <slug> <etiqueta> [commit]');
    db.prepare('INSERT INTO versiones (proyecto_id, etiqueta, commit_hash) VALUES (?,?,?)').run(p.id, args[1], args[2] ?? null);
    log(p.id, 'Versión registrada', args[1]);
    console.log(`Versión ${args[1]} registrada.`);
    break;
  }

  case 'sql': {
    const q = (args[0] ?? '').trim();
    if (!/^(select|with|pragma table_info)/i.test(q) || /;\s*\S/.test(q)) fallar('solo se permiten consultas de lectura (SELECT), una a la vez');
    const ro = new DatabaseSync(DB_PATH, { readOnly: true });
    tabla(ro.prepare(q).all());
    ro.close();
    break;
  }

  case 'exportar':
    console.log('Exportado a ' + JSON_PATH);
    break;

  default:
    console.log(`Estudio Web · base de datos

  db proyectos                                 lista de proyectos
  db proyecto <slug>                           detalle de un proyecto
  db nuevo <slug> "<nombre>" [url]             registrar proyecto
  db estado <slug> <fase>                      ${FASES.join(' | ')}
  db set <slug> <campo> <valor>                ${CAMPOS_EDITABLES.join(', ')}
  db tarea <slug> "<titulo>" [claude|persona]  nueva tarea
  db tareas [slug]                             tareas abiertas
  db hecha <id>                                cerrar tarea
  db log <slug|-> "<accion>" ["detalle"]       anotar en bitácora  (--autor persona)
  db bitacora [slug] [n]                       últimas entradas
  db acceso <slug|-> <servicio> <cuenta> "<dónde>"   registrar DÓNDE está una credencial
  db sync-assets <slug>                        revisar qué imágenes ya se descargaron
  db fase <slug> <n> <estado>                  estado de una fase del panel
  db version <slug> <etiqueta> [commit]        registrar versión aprobada
  db sql "SELECT ..."                          consulta libre (solo lectura)
  db exportar                                  regenerar datos/estudio.json`);
}

if (ESCRIBE.has(cmd)) exportar();
