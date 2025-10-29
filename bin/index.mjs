#!/usr/bin/env node
import { execSync } from "node:child_process";
import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { basename, resolve } from "node:path";
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

const REPO = "https://github.com/patnir/starterminiapp.git";

function run(cmd, opts = {}) {
  execSync(cmd, { stdio: "inherit", ...opts });
}

async function prompt(question) {
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question(question);
  rl.close();
  return answer.trim().toLowerCase();
}

function detectPM() {
  const ua = process.env.npm_config_user_agent || "";
  if (ua.includes("pnpm")) return "pnpm";
  if (ua.includes("yarn")) return "yarn";
  return "npm";
}

function updatePkgName(dir, name) {
  const pkgPath = resolve(dir, "package.json");
  if (!existsSync(pkgPath)) return;
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
  pkg.name = name.toLowerCase();
  pkg.version = "0.1.0";
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}

async function main() {
  const target = process.argv[2];
  if (!target) {
    console.log("Usage: npx starterminiapp <directory>");
    process.exit(1);
  }

  const dir = resolve(process.cwd(), target);
  if (existsSync(dir)) {
    console.error("❌ Directory already exists. Choose a new one.");
    process.exit(1);
  }

  console.log(`\n🚀 Cloning starterminiapp into ${target}...`);
  run(`git clone --depth=1 ${REPO} ${target}`);

  // remove .git
  rmSync(resolve(dir, ".git"), { recursive: true, force: true });
  updatePkgName(dir, basename(dir));

  console.log("> Initializing new git repo...");
  run(`git init`, { cwd: dir });
  run(`git add -A`, { cwd: dir });
  run(`git commit -m "chore: bootstrap from starterminiapp"`, { cwd: dir });

  const pm = detectPM();
  console.log(`> Installing dependencies with ${pm}...`);
  try { run(`${pm} install`, { cwd: dir }); } catch {}

  console.log(`\n✅ Setup complete!\n`);

  // Prompt for Vercel deployment
  const answer = await prompt("? Deploy to Vercel now? (y/n) ");
  
  if (answer === "y" || answer === "yes") {
    console.log("\n🚀 Deploying to Vercel...");
    console.log("   (You'll be prompted to authenticate if this is your first time)\n");
    try {
      run(`${pm} run deploy`, { cwd: dir });
      console.log("\n✨ Deployment complete!");
      console.log("\nℹ️  Note: If you're on a Vercel Pro/Team plan and your deployment URL requires login:");
      console.log("   • Add a custom domain (automatically public), or");
      console.log("   • Disable 'Standard Protection' in Project Settings");
      console.log("   Learn more: https://vercel.com/docs/deployment-protection");
    } catch (err) {
      console.log("\n⚠️  Deployment failed. You can try again by running:");
      console.log(`  cd ${target}`);
      console.log(`  ${pm} run deploy`);
      console.log("\n   Or deploy with the Vercel CLI directly:");
      console.log(`  npx vercel --yes --prod`);
    }
  } else {
    console.log("\n📦 To deploy to Vercel later, run:");
    console.log(`  cd ${target}`);
    console.log(`  ${pm} run deploy`);
    console.log("\n   (You'll be prompted to authenticate on your first deployment)");
    console.log("   Or use: npx vercel --yes --prod");
  }

  console.log(`\n✅ Next steps:\n`);
  console.log(`  cd ${target}`);
  console.log(`  ${pm} run dev\n`);
  console.log("Happy hacking 👾");
}

main();
