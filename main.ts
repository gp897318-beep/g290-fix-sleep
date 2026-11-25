// g290-fix-sleep: writes one funny patch note announcing human sleep is
// fixed to /output/entry.txt.
// Chosen line (122 chars) from 10 distinct candidates (see
// ~/workspace/makefun/work/fix-sleep-variants.md): the brain's 3 a.m. replay
// of every embarrassing thing you did in 2019 now plays lo-fi beats instead.
// Specific fix, surprise punchline at the end, canonical "Fixed a bug
// where..." changelog voice, trusts the reader.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Fixed a bug where the brain replayed every embarrassing thing you did in 2019 at 3 a.m.; it now plays lo-fi beats instead.";

// The gate needs exactly one line of UTF-8 text, 1 to 160 characters, not
// only white space — no trailing newline, so the file is the line alone.
function validateLine(line: string): void {
  if (line.length < 1 || line.length > 160) {
    throw new Error("entry must be one line of 1-160 characters");
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
}

// Entry point: validate, then write the line with no trailing newline.
validateLine(LINE);

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length}-char entry to /output/entry.txt`);
