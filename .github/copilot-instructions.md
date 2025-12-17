<!-- Copilot / AI agent instructions for Frontend_Developement_Training -->
# Copilot instructions — Frontend_Developement_Training

Purpose
- Short: help AI coding agents understand this training repo layout, workflows, and local patterns so suggestions and edits are safe and relevant.

Big picture
- This repository contains hands-on frontend training exercises organized per week. Top-level folders: `Basic.HTML`, `Week 1`, and `week 2` (note inconsistent capitalization).
- Most work is static HTML/CSS/JS intended to run directly in the browser. Example interactive code lives under [week 2/JavaScript Fundamentals I/Asynchronus/AsyncAwait.js](week%202/JavaScript%20Fundamentals%20I/Asynchronus/AsyncAwait.js).
- There is no bundler/build step for the exercises; treat files as standalone artifacts unless you see a `package.json` in a folder — e.g. [week 2/JavaScript Fundamentals I/package.json](week%202/JavaScript%20Fundamentals%20I/package.json).

Developer workflows (what works here)
- Run static HTML pages by opening them in a browser or using a simple static server. Do not introduce a build system unless asked.
- Node usage is limited to small scripts/exercises. Example: the repo-level `package.json` in week 2 contains only a dev dependency (`prompt-sync`) and no scripts — run Node directly: `node "week 2/JavaScript Fundamentals I/ProblemSolve.js"`.
- When editing examples, keep changes minimal and educational: prefer inline comments and short, self-contained fixes rather than large refactors.

Project-specific conventions & notable patterns
- Naming is inconsistent: folder `Asynchronus` is misspelled (use the existing name when referencing files), and JavaScript files have mixed-case extensions (e.g., `JavaScriptBasics.JS`). Do not rename files unless the user requests it explicitly.
- Files are often demonstration snippets (DOM + fetch + async/await). When changing code, preserve the pedagogical structure (clear variable names, short functions, visible DOM interactions).
- Examples often use `fetch` and `async/await` (see [Asynchronus/AsyncAwait.js](week%202/JavaScript%20Fundamentals%20I/Asynchronus/AsyncAwait.js)). Use `response.ok` checks and user-facing error messages where appropriate to match existing style.

Integration points & external dependencies
- External APIs: several examples use `https://jsonplaceholder.typicode.com` for demo fetch calls (see `AsyncAwait.js`). Avoid hardcoding other third-party services.
- Node dependency: `prompt-sync` is present under `week 2/JavaScript Fundamentals I/package.json` — used for CLI exercises. Do not add new global dependencies without confirming with the maintainer.

Editing & commit guidance for AI agents
- Keep edits scoped to the exercise the user asked about. Avoid bulk renames or moving files across weeks.
- Preserve file encodings and simple structure (no transpilation). If you add new files, place them in the same folder as related examples and name them clearly (e.g., `example-fix.js`).

Examples (how to make safe edits)
- Fix a failing fetch with minimal change: in [Asynchronus/AsyncAwait.js](week%202/JavaScript%20Fundamentals%20I/Asynchronus/AsyncAwait.js) add `if (!response.ok) throw new Error('User not found')` (this mirrors existing style shown in file).
- For Node exercises, run scripts directly: `node "week 2/JavaScript Fundamentals I/ProblemSolve.js"` rather than introducing npm scripts.

Where to look for more context
- Browse the week directories to find the exercise the user references. The most relevant folders: `week 2/JavaScript Fundamentals I/Asynchronus/` for async examples and `week 2/JavaScript Fundamentals I/Basic Array Methods/` for small utilities.

If unsure
- Ask a concise question before making large changes (e.g., "Should I rename the `Asynchronus` folder to `Asynchronous`?").
- When proposing refactors, provide a short before/after diff and explain the pedagogical benefit.

End
- After applying changes, run a quick smoke-check: open the edited HTML in the browser or run `node` for small JS scripts and report the result.
