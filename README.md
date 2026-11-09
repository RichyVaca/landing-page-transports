# Transportes MORVAC — Landing page

Sitio de una página para Transportes MORVAC, construido con React 18, Vite 8 y MDB React UI Kit 8.

## Desarrollo

```bash
npm install
npm run dev
```

La app se sirve en `http://localhost:5173/landing-page-transports/`.

## Scripts

- `npm run dev` / `npm start`: servidor de desarrollo.
- `npm run build`: build de producción en `dist/`.
- `npm run preview`: previsualiza el build.
- `npm test`: tests con Vitest.
- `npm run test:watch`: tests en modo watch.
- `npm run deploy`: publica `dist/` en GitHub Pages.

## Contacto

La sección de contacto muestra los medios de atención directamente (teléfono, correo, WhatsApp, ubicación y horario). No incluye formulario ni requiere backend.

## Imágenes

Las variantes AVIF/WebP/JPG se generan desde `src/assets` con:

```bash
node scripts/optimize-images.mjs
```

Los archivos resultantes viven en `src/assets/generated/` y se importan desde los componentes.

## Contenido pendiente

- Teléfono, correo, ubicación y horario en `src/data/contact.js`.
- Copy de nosotros y servicios en `src/data/about.js`, `src/data/hero.js` y `src/data/services.js`.
- Ciudades y cobertura en `src/data/routes.js`.
