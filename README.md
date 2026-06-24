# Dental Namay — Landing Page

Landing page de **Dental Namay**, clínica de odontología integral en Trujillo, La Libertad.
Construida con **Next.js 16** (App Router) y **Tailwind CSS 4**.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

La página principal está en `app/page.tsx` y los estilos en `app/globals.css`.

## Build de producción

```bash
npm run build
npm run start
```

## Imágenes

Todas las imágenes del sitio están optimizadas en formato **WebP** dentro de
`public/images/` (excepto el favicon `logo.png`). Si agregas nuevas imágenes,
conviértelas a WebP para mantener la carga rápida. Puedes usar `sharp`:

```bash
node -e "require('sharp')('public/images/mi-foto.jpg').resize({width:1200,withoutEnlargement:true}).webp({quality:80}).toFile('public/images/mi-foto.webp')"
```

## Desplegar en Vercel

> **Importante:** la app vive en la subcarpeta `landing/`. Tienes dos opciones:

### Opción A — Subir solo la carpeta `landing` (recomendado)

1. Crea un repositorio en GitHub y sube **el contenido de `landing/`** como raíz.
2. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio.
3. Vercel detecta Next.js automáticamente. Deja los valores por defecto:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output:** automático
4. Pulsa **Deploy**. ¡Listo!

### Opción B — Subir toda la carpeta `LANDINGPAGE`

1. Sube todo el proyecto a GitHub.
2. Al importar en Vercel, en **Root Directory** selecciona `landing`.
3. Pulsa **Deploy**.

No se requieren variables de entorno para que el sitio funcione.

### Despliegue por CLI (alternativa)

```bash
npm i -g vercel
cd landing
vercel
```
