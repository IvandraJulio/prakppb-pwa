# PWA

Installable, offline-capable gunshop. Three parts:

## 1. Application shell

- `index.html` — minimal static shell, mounts `src/main.jsx`.
- `src/App.jsx` — the shell: header, nav, main content area. Routes render inside the shell, never a full-page reload.

## 2. Web app manifest

- `public/manifest.webmanifest` — name, short_name, start_url `/`, display `standalone`, theme/background colors, icons.
- Linked from `index.html` via `<link rel="manifest" href="/manifest.webmanifest" />`.
- Icons: `public/` png/svg (at least 192px and 512px for installability).

## 3. Service worker

- `public/sw.js` — cache the app shell on install, serve cached shell offline, runtime-cache data.
- Registered once in `src/main.jsx` (`navigator.serviceWorker.register('/sw.js')`).
- Served from `public/` so it's at the scope root `/`.
