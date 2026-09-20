# React

- **React 19** (JS, no TypeScript).
- Function components + hooks only, no class components.
- One component per file, `PascalCase.jsx`, exported default.
- Hooks (`useState`, `useEffect`, etc.) at the top of the component body.
- State stays local; lift it up only when shared.
- React lint rules live in `.oxlintrc.json` (`react/rules-of-hooks`, `react/only-export-components`).
