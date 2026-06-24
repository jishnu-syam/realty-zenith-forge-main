import fs from "fs";
import path from "path";

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach((element) => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

// 1. Copy the full tslib package into the built function output
const srcDir = path.join(process.cwd(), "node_modules", "tslib");
const destDir = path.join(
  process.cwd(),
  ".vercel",
  "output",
  "functions",
  "__server.func",
  "node_modules",
  "tslib"
);

if (fs.existsSync(srcDir)) {
  copyFolderSync(srcDir, destDir);
  console.log("[postbuild] Copied entire tslib module to built output node_modules.");
} else {
  console.warn("[postbuild] Source tslib module not found in node_modules.");
}

// 2. Clear the dependencies block in the built function's package.json
// This forces Vercel's deployment builder to trace and upload all files instead of skipping them.
const funcPackageJson = path.join(
  process.cwd(),
  ".vercel",
  "output",
  "functions",
  "__server.func",
  "package.json"
);

if (fs.existsSync(funcPackageJson)) {
  try {
    const pkg = JSON.parse(fs.readFileSync(funcPackageJson, "utf8"));
    if (pkg.dependencies) {
      console.log("[postbuild] Found dependencies in built package.json:", pkg.dependencies);
      delete pkg.dependencies;
      fs.writeFileSync(funcPackageJson, JSON.stringify(pkg, null, 2));
      console.log("[postbuild] Cleared dependencies block to force Vercel tracing.");
    }
  } catch (err) {
    console.error("[postbuild] Failed to process built package.json:", err);
  }
}
