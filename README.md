# Test Express App

Simple Node.js + Express example with Jest tests, ESLint, and semantic-release configuration for automated changelogs and GitHub Releases.

Quick start:

Install dependencies:

```bash
npm ci
```

Run tests:

```bash
npm test
```

Run lint:

```bash
npm run lint
```

Start server:

```bash
npm start
```

Release flow:

- Create a git tag like `v1.0.0` and push it to trigger the release workflow which runs `semantic-release`, generates `CHANGELOG.md`, and creates a GitHub Release.
# Test