-- Base de datos del Estudio Web (SQLite)
-- No guardar contraseñas, tokens ni API keys aquí.

CREATE TABLE IF NOT EXISTS proyectos (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  slug            TEXT NOT NULL UNIQUE,          -- nombre corto: 10experiences
  numero          INTEGER,                       -- índice consecutivo: 1, 2, 3...
  carpeta         TEXT,                          -- carpeta en proyectos/: 01-10experiences
  nombre          TEXT NOT NULL,
  cliente         TEXT,
  url_origen      TEXT,                          -- sitio original que se rediseña
  rubro           TEXT,
  estado          TEXT NOT NULL DEFAULT 'analisis'
                  CHECK (estado IN ('analisis','assets','contenido','diseno','desarrollo','revision','publicado','pausado')),
  stack           TEXT DEFAULT 'vite-react-tailwind',
  url_preview     TEXT,                          -- ej. https://algo.vercel.app
  url_produccion  TEXT,
  hosting         TEXT,                          -- vercel / cloudflare / netlify
  repo            TEXT,                          -- URL de GitHub
  notas           TEXT,
  creado          TEXT NOT NULL DEFAULT (datetime('now','localtime')),
  actualizado     TEXT NOT NULL DEFAULT (datetime('now','localtime'))
);

CREATE TABLE IF NOT EXISTS assets (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  proyecto_id  INTEGER NOT NULL REFERENCES proyectos(id) ON DELETE CASCADE,
  url          TEXT NOT NULL,
  carpeta      TEXT,
  archivo      TEXT,
  descargado   INTEGER NOT NULL DEFAULT 0,       -- 0/1
  bytes        INTEGER,
  UNIQUE (proyecto_id, url)
);

CREATE TABLE IF NOT EXISTS tareas (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  proyecto_id  INTEGER NOT NULL REFERENCES proyectos(id) ON DELETE CASCADE,
  titulo       TEXT NOT NULL,
  responsable  TEXT NOT NULL DEFAULT 'claude' CHECK (responsable IN ('claude','persona')),
  estado       TEXT NOT NULL DEFAULT 'pendiente' CHECK (estado IN ('pendiente','en_curso','hecha','bloqueada')),
  notas        TEXT,
  creado       TEXT NOT NULL DEFAULT (datetime('now','localtime')),
  cerrado      TEXT
);

CREATE TABLE IF NOT EXISTS bitacora (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  proyecto_id  INTEGER REFERENCES proyectos(id) ON DELETE CASCADE,  -- NULL = evento global
  fecha        TEXT NOT NULL DEFAULT (datetime('now','localtime')),
  autor        TEXT NOT NULL DEFAULT 'claude',
  accion       TEXT NOT NULL,
  detalle      TEXT
);

-- Dónde vive cada credencial (NUNCA el valor)
CREATE TABLE IF NOT EXISTS accesos (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  proyecto_id  INTEGER REFERENCES proyectos(id) ON DELETE CASCADE,
  servicio     TEXT NOT NULL,                   -- github, vercel, builderbot, dominio/DNS
  cuenta       TEXT,                            -- usuario o correo de la cuenta
  ubicacion    TEXT,                            -- "gestor de contraseñas", "panel Vercel > Env"
  notas        TEXT
);

-- Estado de cada fase del proceso (lo usa el panel)
CREATE TABLE IF NOT EXISTS fases (
  proyecto_id  INTEGER NOT NULL REFERENCES proyectos(id) ON DELETE CASCADE,
  numero       INTEGER NOT NULL,
  estado       TEXT NOT NULL DEFAULT 'pendiente'
               CHECK (estado IN ('pendiente','en_curso','esperando','hecha','error','proximamente')),
  inicio       TEXT,
  fin          TEXT,
  costo_usd    REAL,
  resumen      TEXT,
  comentarios  TEXT,
  PRIMARY KEY (proyecto_id, numero)
);

-- Versiones aprobadas (commit + etiqueta de git)
CREATE TABLE IF NOT EXISTS versiones (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  proyecto_id  INTEGER NOT NULL REFERENCES proyectos(id) ON DELETE CASCADE,
  etiqueta     TEXT NOT NULL,
  commit_hash  TEXT,
  fecha        TEXT NOT NULL DEFAULT (datetime('now','localtime')),
  notas        TEXT
);
