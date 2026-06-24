import fs from "fs";
import path from "path";

// 1. Vendor tslib.es6.mjs into _libs/tslib.mjs
const srcTslibMjs = path.join(process.cwd(), "node_modules", "tslib", "tslib.es6.mjs");
const destTslibDir = path.join(
  process.cwd(),
  ".vercel",
  "output",
  "functions",
  "__server.func",
  "_libs"
);
const destTslibMjs = path.join(destTslibDir, "tslib.mjs");

if (fs.existsSync(srcTslibMjs)) {
  if (!fs.existsSync(destTslibDir)) {
    fs.mkdirSync(destTslibDir, { recursive: true });
  }
  fs.copyFileSync(srcTslibMjs, destTslibMjs);
  console.log("[postbuild] Vendored tslib.es6.mjs into _libs/tslib.mjs.");
} else {
  console.warn("[postbuild] Source tslib.es6.mjs not found in node_modules/tslib.");
}

// 2. Recursively find and rewrite tslib imports in all .mjs files inside the function folder
const funcDir = path.join(
  process.cwd(),
  ".vercel",
  "output",
  "functions",
  "__server.func"
);

function rewriteTslibImports(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach((element) => {
    const fullPath = path.join(dir, element);
    const stat = fs.lstatSync(fullPath);
    if (stat.isDirectory()) {
      rewriteTslibImports(fullPath);
    } else if (stat.isFile() && element.endsWith(".mjs")) {
      let content = fs.readFileSync(fullPath, "utf8");
      if (content.includes('from "tslib"') || content.includes("from 'tslib'")) {
        const relativePath = path.relative(path.dirname(fullPath), destTslibMjs).replace(/\\/g, '/');
        const importPath = relativePath.startsWith('.') ? relativePath : './' + relativePath;
        
        content = content.replace(/from\s+["']tslib["']/g, `from "${importPath}"`);
        fs.writeFileSync(fullPath, content, "utf8");
        console.log(`[postbuild] Rewrote tslib import in ${path.relative(process.cwd(), fullPath)} -> ${importPath}`);
      }
    }
  });
}

rewriteTslibImports(funcDir);

// 3. Clear the dependencies block in the built function's package.json
// This forces Vercel's deployment builder to trace and upload all files instead of skipping them.
const funcPackageJson = path.join(funcDir, "package.json");

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

