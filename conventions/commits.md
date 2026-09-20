# Commits

Follow [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).

Enforced by the `commit-msg` hook in `.githooks/` (`core.hooksPath` points there).

```
<type>[optional scope][!]: <description>

[optional body]

[optional footer(s)]
```

- `type` — any noun, commonly `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `test`.
- `!` before `:` marks a breaking change (`feat!:` / `feat(scope)!:`).
- Merge commits are exempt.

Examples: `feat(catalog): add gun listing`, `fix(cart): correct total`.
