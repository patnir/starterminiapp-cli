# Contributing to starterminiapp-cli

This guide is for maintainers and contributors who want to develop, test, and publish the CLI itself.

---

## 🛠️ Local Development

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

Make sure you're logged in:

```bash
npm whoami
```

Then publish the latest version:

```bash
npm publish --access public
```

That automatically updates what users get when they run:

```bash
npx starterminiapp my-mini-app
```

---

### 5. Testing after publishing

After publishing a new version, test with:

```bash
npx starterminiapp@latest test-app
```

You can also install a specific version explicitly:

```bash
npx starterminiapp@1.1.0 my-mini-app
```

---

## 📝 Command Summary

| Action         | Command                              |
| -------------- | ------------------------------------ |
| Create new app | `npx starterminiapp my-mini-app`          |
| Version bump   | `npm version patch`                  |
| Publish update | `npm publish --access public`        |
| Test latest    | `npx starterminiapp@latest test-app` |

---

## 🔍 Quick Notes

- Every publish replaces the version users get when they run `npx starterminiapp`.  
- You **must** bump the version (e.g. `npm version patch`) before every new `npm publish` — npm doesn't allow re-publishing the same version number.
- The README doubles as your GitHub front page *and* what appears on [npmjs.com/package/starterminiapp](https://www.npmjs.com/package/starterminiapp).

