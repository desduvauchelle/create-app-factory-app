import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";

const { dependencies } = JSON.parse(readFileSync(new URL("../package.json", import.meta.url)));
const version = dependencies["@app-factory/sdk"].match(/-([\d.]+)\.tgz$/)[1];
mkdirSync("vendor", { recursive: true });
execFileSync("gh", ["release", "download", "v" + version, "--repo", "desduvauchelle/app-factory-sdk", "--pattern", "*.tgz", "--dir", "vendor", "--clobber"], { stdio: "inherit" });
