# Agent workflow

Choose the applicable parts of this workflow for the requested task. It governs
this repo and can be copied into other repos with their checks and conventions.

- Read-only reviews, explanations, and investigations need no worktree, commit,
  PR, or Greptile run. If an investigation leads to edits, isolate those edits.
- Code changes use isolation, relevant architecture guidance, checks, and
  evidence of the behavior changed. Capture a failure before fixing it.
- Small documentation edits use an isolated branch and relevant content or link
  checks. Do not manufacture runtime evidence or require a bot review for them.
- Ship when the task calls for a PR or a completed repository change. A request
  for a plan, review, or local experiment does not imply publishing it.

## Workflow

1. **Isolate.** Use `/new-feature` before repository edits. Start from
   `origin/main`, or preserve a worktree already assigned to this task.
   Never build on `main`.
2. **Build.** Use `/code-structure` when extracting shared operations or
   choosing boundaries. Follow the project's existing architecture; the
   service layer pattern is a default for projects without a convention.
3. **Prove.** Run relevant checks. Use `/evidence-driven-testing` for changed
   runtime behavior: record the failure before fixing it and the success
   afterward. For documentation, inspect the changed instructions and verify
   runnable examples and links as applicable.
4. **Ship.** Open the PR with evidence appropriate to the change. Use
   `/before-and-after` when screenshots help; use output pairs for CLI changes.
   Run `/greploop` for code or executable workflow changes, or when requested.
   Aim for **5/5 with zero unresolved actionable Greptile findings** on the
   current commit. Stop at the configured iteration cap, a review timeout, or
   an unavailable integration and report the actual score and remaining work.
   Do not claim success or raise the cap automatically. Present the PR URL.

Ship-beat notes:

- `/before-and-after` drives the `@vercel/before-and-after` CLI. `--markdown`
  uploads the pair and prints a PR-ready table; it also accepts existing
  PNGs, so evidence gathered while developing can be reused as-is.
- In containers/VMs where Chrome fails with "No usable sandbox", set
  `AGENT_BROWSER_ARGS="--no-sandbox"` for the capture command.
- The default upload host (0x0.st) is public — fine for ordinary UI shots;
  pass `--upload-url` for anything sensitive.

## Writing for humans

Run `/unslop` over anything a person will read, before you commit, post, or
send it: commit messages, the PR title and body, README and doc edits, code
comments, and the closing reply. It strips AI tells (em dashes, filler,
hedging, chatbot phrases, puffery, bold-label lists) and replaces fancy
words with plain ones and passive voice with active. Apply it to text you
wrote or changed, not to prose you didn't touch.

## Multi-agent rules

- Never commit directly to `main`.
- One worktree and one branch per task and per agent — never reuse or modify
  another agent's worktree, branch, or uncommitted work.
- **Scope check** before starting: skim open PRs' changed files
  (`gh pr list`, `gh pr diff <n> --name-only`) and look for uncommitted work
  in shared checkouts. Inspect overlapping diffs: independent edits to the same
  file may proceed in your own worktree. Ask only when changes conflict in
  behavior, depend on unfinished work, or ownership is unclear. Do not modify
  another task's checkout.
- Never force-push to `main` — and never plain `--force` anywhere; only
  `--force-with-lease`, only on your own task branch.
- Resolve lockfile conflicts by regenerating, never by hand-merging.
- Worktrees don't isolate shared resources: confirm a dev-server port
  answers *your* process before trusting it, and don't run schema
  experiments against a shared database.
- If a conflict can't be resolved confidently, stop and report instead of
  guessing.

## Completing a task that ships

1. Keep changes limited to the assigned task.
2. Run the applicable checks listed below.
3. Assemble applicable evidence into before/after pairs or content-check results.
4. Commit with a clear message, rebase onto the latest `origin/main`, and
   rerun the checks.
5. Push (`git push -u origin <branch>`; after rebasing an already-pushed
   branch, `--force-with-lease`).
6. Open the PR. The body must explain what changed, how it was tested (every
   claim backed by evidence), before/after proof, and any risks or follow-up
   work. Run the title and body through `/unslop` before posting.
7. Run `/greploop` when applicable, with the success and stopping conditions
   above. `/greploop-apps` selects the alternate trigger in that same workflow.
8. End by presenting the PR URL.

Do not merge the PR unless explicitly instructed. Keep the worktree until
the PR is merged or closed.

## Checks in this repo

This is a Vue 3 + Vite site. Use the Node version in `.nvmrc` and run
`npm ci` first.

- `npm run build` builds the site into `dist/`. It must pass.
- `npx eslint <changed files> --ignore-path .gitignore` lints your change.
  `npm run lint` runs with `--fix` and rewrites files across the repo, so
  don't use it as a check.
- `npx prettier --check <changed files>` checks formatting. `npm run format`
  rewrites everything under `src/`.
- `git diff --check` checks whitespace in the change.
- For UI changes, run `npm run dev` and look at the affected pages.

The repo has no automated tests. Existing files already fail ESLint and
Prettier, so check only the files you changed and don't reformat others.
Keep generated evidence under `.artifacts/` and add it to `.gitignore`.
