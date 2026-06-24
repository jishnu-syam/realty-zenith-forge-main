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
