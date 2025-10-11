# starterminiapp

A zero-config CLI to bootstrap a **Base + Farcaster Mini App** in seconds.

Built for developers who want to get started fast using the [`starterminiapp`](https://github.com/patnir/starterminiapp) template.

---

## 🚀 Quick Start

```bash
npx starterminiapp my-app
````

That command will:

1. Clone the official [starterminiapp](https://github.com/patnir/starterminiapp) repo
2. Remove its git history
3. Rename the package to your folder name
4. Initialize a fresh git repo
5. Install dependencies automatically
6. Print your next steps

Then, simply:

```bash
cd my-app
npm run dev
```

---

## 🧩 What It Does

Under the hood, this CLI:

* Runs `git clone --depth=1 https://github.com/patnir/starterminiapp.git`
* Deletes `.git/`
* Updates the `package.json` name and version
* Re-initializes git (`git init`, `git commit`)
* Installs dependencies via your preferred package manager (`npm`, `yarn`, or `pnpm`)
* Prints friendly “next steps” instructions

You can open [bin/index.mjs](bin/index.mjs) to see the full logic — it’s less than 100 lines and dependency-free.

---

## 🧠 When to Use

Use `starterminiapp` if you want a **ready-to-ship Base + Farcaster Mini App starter**, pre-configured with:

* Next.js
* Base / Farcaster integration setup
* Clean developer experience and project structure

---

## 🛠️ Local Development (for maintainers)

This section is for maintaining and publishing the CLI itself.

### 1. Clone and test locally

```bash
git clone https://github.com/patnir/starterminiapp-cli.git
cd starterminiapp-cli
npm install
```

Run locally (without publishing):

```bash
node bin/index.mjs test-app
```

or test it as if it were installed:

```bash
npx ./bin/index.mjs test-app
```

---

### 2. Update the CLI code

Edit [`bin/index.mjs`](bin/index.mjs) as needed:

* To point to a new starter repo
* To change installation steps
* To add flags or behaviors (e.g. `--no-install`, `--branch main`)

---

### 3. Version bump

Each time you publish a new release, bump the version number in `package.json`:

```bash
# Patch: small fixes
npm version patch

# Minor: new features, backward compatible
npm version minor

# Major: breaking changes
npm version major
```

This will:

* Update the version number
* Create a new git tag
* Commit the change automatically

Then push the tag:

```bash
git push && git push --tags
```

---

### 4. Publish to npm

Make sure you’re logged in:

```bash
npm whoami
```

Then publish the latest version:

```bash
npm publish --access public
```

That automatically updates what users get when they run:

```bash
npx starterminiapp my-app
```

---

### 5. Testing after publishing

After publishing a new version, test with:

```bash
npx starterminiapp@latest test-app
```

You can also install a specific version explicitly:

```bash
npx starterminiapp@1.1.0 my-app
```

---

## 🧾 License

MIT © [Rahul Patni](https://starterminiapp.com)

---

## ⭐ Support

If this CLI helped you, consider starring the repos:

* [starterminiapp (template)](https://github.com/patnir/starterminiapp)
* [starterminiapp-cli (this tool)](https://github.com/patnir/starterminiapp-cli)

---

**Command summary**

| Action         | Command                              |
| -------------- | ------------------------------------ |
| Create new app | `npx starterminiapp my-app`          |
| Version bump   | `npm version patch`                  |
| Publish update | `npm publish --access public`        |
| Test latest    | `npx starterminiapp@latest test-app` |

```

---

### 🔍 Quick notes

- Every publish replaces the version users get when they run `npx starterminiapp`.  
- You **must** bump the version (e.g. `npm version patch`) before every new `npm publish` — npm doesn’t allow re-publishing the same version number.
- The README doubles as your GitHub front page *and* what appears on [npmjs.com/package/starterminiapp](https://www.npmjs.com/package/starterminiapp).
