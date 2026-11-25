import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function roastLine(): string {
  const line =
    "My agent's favorite tool is asking me what I want, then asking again in different words.";
  if (line.length < 1 || line.length > 140 || line.trim().length === 0) {
    throw new Error(`roast line must be 1-140 chars, got ${line.length}`);
  }
  return line;
}

function writeEntry(outDir: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), roastLine(), "utf8");
}

writeEntry(process.argv[2] ?? "/output");
