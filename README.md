# Backend - Proxy server

## Quick Start

### 1. Install dependencies

```
yarn install
```

### 2. Run Applications

```
yarn start
```

If you run project and get error, make sure you've installed `Node.js >= 16` and `yarn`.

You can run `cat package.json` to see available commands.

## Environment

### `✅` VS Code editor highly recommended

### Recommended plugins

- `✅` [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- `✅` [Code Spell Checker Plugin](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- `✅` [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)
- `✅` [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- `✅` [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- `✅` [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
- `✅` [GitLens — Git supercharge](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

## General Structure

```

src
  |-- controller

  |-- middleware
      Express middleware
  |-- models
      Pages are components that connects to routes, and render final view
      that user interacts with. They're usually named the same as actual route (ie URL path).
  |-- schema
      Data validation
  |-- service

  |-- utils

```

## Code Style

We're following simple rules as defined in `.prettierrc`:

- `✅` DO: 2 spaces, no tabs
- `✅` DO: single quite for JS, double quite fro HTML/Element Props
- `✅` DO: semicolons
- `✅` DO: keep lines short
- `🔴` DON'T: leave unused variable (build will fail!)
- `🔴` DON'T: leave console.log or console.error in code
- `✅` DO: Use `yarn lint` command to reformat files.

We're using TypeScript:

- `✅` DO: define proper and up-to-date types (especially for API request/response)
- `✅` DO: generally: keep types in file with code; types can be stored in external file, named: `myFile.types.ts` (note the .d);
- `🔴` DON'T: use `any` notation (build will fail)
- `🔴` DON'T: create common repository of types (i.e. `src/types` directory)
