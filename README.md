# starterminiapp

[![npm version](https://badge.fury.io/js/starterminiapp.svg)](https://www.npmjs.com/package/starterminiapp)

A zero-config CLI to bootstrap a **Base + Farcaster Mini App** in seconds.

Built for developers who want to get started fast using the [`starterminiapp`](https://github.com/patnir/starterminiapp) template. Available on [npm](https://www.npmjs.com/package/starterminiapp).

---

## 🚀 Quick Start

```bash
npx starterminiapp my-mini-app
````

That command will:

1. Clone the official [starterminiapp](https://github.com/patnir/starterminiapp) repo
2. Remove its git history
3. Rename the package to your folder name
4. Initialize a fresh git repo
5. Install dependencies automatically
6. **Optionally deploy to Vercel** with one command
7. Print your next steps

After setup, you'll be prompted:

```
? Deploy to Vercel now? (y/n)
```

Say **yes** to deploy immediately, or **no** to deploy later.

Then, simply:

```bash
cd my-mini-app
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
* Prompts you to deploy to Vercel (optional, skip if you want)
* Prints friendly "next steps" instructions

You can open [bin/index.mjs](bin/index.mjs) to see the full logic — it's less than 100 lines and dependency-free.

---

## 🚀 Deploying

### During Setup
After running `npx starterminiapp my-app`, you'll be asked if you want to deploy immediately. This runs `npm run deploy` which deploys to Vercel with pre-configured settings from `vercel.json`.

### Deploy Later
If you skip deployment during setup, you can deploy anytime:

```bash
cd my-mini-app
npm run deploy
```

Or use the Vercel CLI directly:

```bash
npx vercel --yes --prod
```

**Note:** You'll be prompted to authenticate with Vercel on your first deployment.

---

## 🧠 When to Use

Use `starterminiapp` if you want a **ready-to-ship Base + Farcaster Mini App starter**, pre-configured with:

* Next.js
* Base / Farcaster integration setup
* Clean developer experience and project structure

---

## 🎨 Need Assets?

Once you've bootstrapped your app, use [**miniappassets.com**](https://miniappassets.com/) to generate your mini app assets:

* Icon, hero, and splash screen generation
* Manifest-compliant sizes (icon, hero, splash)
* Automatic `.well-known/farcaster.json` manifest generation
* Download ready-to-use assets for your `public/` folder

---

## 🧾 License

MIT © [Rahul Patni](https://starterminiapp.com)

---

## ⭐ Support

If this CLI helped you, consider starring the repos:

* [starterminiapp (template)](https://github.com/patnir/starterminiapp)
* [starterminiapp-cli (this tool)](https://github.com/patnir/starterminiapp-cli)

---

## 🤝 Contributing

Want to help maintain or improve this CLI? Check out [CONTRIBUTING.md](CONTRIBUTING.md) for development setup, publishing instructions, and more.
