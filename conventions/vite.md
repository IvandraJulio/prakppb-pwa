# Vite

- **Vite 8** — dev server (HMR) and production build.
- Config in `vite.config.js` with `@vitejs/plugin-react`.
- ES modules only (`"type": "module"`).

## Asset handling

- `src/assets/` — imported, bundled/hashed assets.
- `public/` — served as-is at `/`, no processing. Use for manifest, icons, service worker.

## Scripts

| Command            | Purpose                  |
| ------------------ | ------------------------ |
| `npm run dev`      | dev server with HMR      |
| `npm run build`    | production build to dist/ |
| `npm run preview`  | preview the production build |
