# Nuru – tienda de velas

## Archivos
- `index.html` tienda · `admin.html` panel · `nuru-core.js` núcleo compartido
- `datos.json` productos/ajustes (el panel lo genera)
- `imagenes productos/` fotos (nombre de archivo = nombre del producto, ej. `vela_soja.jpg`)
- Opcional: `logo.png` en la raíz reemplaza el logo dibujado.

## Probar en tu PC
Abrí `admin.html` (usuario `admin`, clave `123456`, editable dentro del archivo). Tus cambios se guardan en el navegador y `index.html` los muestra en esa misma PC.

## Cada actualización
1. Editá en el panel. 2. "Descargar paquete (zip)" (datos.json + fotos nuevas) o "Descargar datos.json".
3. Reemplazá `datos.json` en la carpeta y poné las fotos en `imagenes productos`.
4. Subí a GitHub (GitHub Desktop: Commit + Push). En 1–2 min se actualiza.

## Publicar gratis en GitHub Pages (sin avisos, siempre activo)
1. Creá cuenta en github.com → New repository (público), ej. `nuru`.
2. Subí todos los archivos (Add file → Upload files; arrastrá la carpeta `imagenes productos` también).
3. Settings → Pages → Branch: `main` / root → Save.
4. Tu tienda: `https://TU-USUARIO.github.io/nuru/`

Notas: GitHub distingue mayúsculas (si no ves una foto, revisá el nombre/extensión). `admin.html` publicado no permite modificar la tienda pública (solo `datos.json` subido lo hace), pero conviene no compartir su link.
