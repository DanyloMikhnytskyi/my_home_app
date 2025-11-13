Repository Copilot Instructions

These instructions are intended for GitHub Copilot / automated code contributors and are applied repository-wide.

- Rule 1: Never produce `export default`. Use named exports only:

  - Examples:
    - Good: `export const Foo = ...` or `export function Bar() {}`
    - Bad: `export default Foo`

- Exceptions: Default exports are allowed only in the following locations:

  - Any file under `src/components/ui/` (UI primitives and components)
  - `vite.config.ts`

- Enforcement: This repository enforces the rule via ESLint (`import/no-default-export`) and a Git pre-commit hook that blocks staged files containing `export default`.

- Developer / Agent responsibilities:
  - Run the project linter (`npm run lint`) before committing changes.
  - If ESLint reports a violation, convert default exports to named exports and update imports accordingly.
  - When in doubt, follow the named-export pattern.

These are specified in a `copilot-instructions.md` file in the `.github` directory of the repository. See Creating repository-wide custom instructions.

If you are a human maintainer and need an exception, open a short PR updating this file and the ESLint overrides.
