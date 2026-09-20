# AGENTS.md

## Project

Dummy gunshop PWA — an offline-first storefront built as a Progressive Web App with an application shell, a web app manifest, and a service worker.

## Structure

```
.
├── .githooks/          # git hooks (commit-msg enforces Conventional Commits)
├── .oxlintrc.json      # oxlint config
├── conventions/        # project conventions (linked below)
├── public/             # static assets served at / (manifest, icons, sw.js)
├── src/
│   ├── main.jsx        # entry, registers service worker, mounts <App/>
│   ├── App.jsx         # app shell: tab state, header/nav/content/footer
│   ├── App.css         # app shell styles
│   ├── index.css       # global styles
│   ├── components/
│   │   ├── Header.jsx  # brand + nav
│   │   ├── GunCard.jsx # single product card
│   │   └── Footer.jsx
│   ├── data/
│   │   └── guns.js     # dummy product data
│   └── pages/
│       ├── Catalog.jsx # product grid
│       ├── About.jsx
│       └── Contact.jsx
├── index.html          # HTML shell, manifest link
├── package.json
└── vite.config.js
```

## Conventions

- [React](./conventions/react.md) — components, hooks, file layout
- [Vite](./conventions/vite.md) — build tool, asset handling, scripts
- [oxlint](./conventions/oxlint.md) — lint config and rules
- [Commits](./conventions/commits.md) — Conventional Commits v1.0.0
- [PWA](./conventions/pwa.md) — app shell, manifest, service worker
