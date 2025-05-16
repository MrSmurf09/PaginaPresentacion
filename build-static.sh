#!/bin/bash

# Script para construir el sitio estático sin rutas API

# Eliminar cualquier carpeta app/api existente
rm -rf app/api

# Buscar y eliminar archivos route.js, route.ts, route.tsx
find . -name "route.js" -o -name "route.ts" -o -name "route.tsx" | xargs rm -f 2>/dev/null

# Crear carpeta de descargas si no existe
mkdir -p public/downloads

# Crear archivos de muestra si no existen
if [ ! -f public/downloads/controlbovino.apk ]; then
  echo "Sample APK file" > public/downloads/controlbovino.apk
fi

if [ ! -f public/downloads/controlbovino.exe ]; then
  echo "Sample EXE file" > public/downloads/controlbovino.exe
fi

# Construir el proyecto
npm run build

# Añadir archivo .nojekyll para GitHub Pages
touch out/.nojekyll

echo "Construcción completada. Los archivos estáticos están en la carpeta 'out'."
