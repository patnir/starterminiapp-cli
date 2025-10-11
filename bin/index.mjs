#!/usr/bin/env node
import { execSync } from "node:child_process";
import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { basename, resolve } from "node:path";

const REPO = "https://github.com/patnir/starterminiapp.git";

function run(cmd, opts = {}) {
  execSync(cmd, { stdio: "inherit", ...opts });
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

function main() {
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

  console.log(`\n✅ Done! Next steps:\n`);
  console.log(`  cd ${target}`);
  console.log(`  ${pm} run dev\n`);
  console.log("Happy hacking 👾");
}

main();
