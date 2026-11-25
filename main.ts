import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My agent's favorite tool is asking me what I want, then asking again in different words.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
