// Pigeon Pitch, One Line — u-donrulezz-pigeon-pitch-one-line-af06c6cf
// Writes the entry: a one-line elevator pitch a city pigeon gives
// investors for its startup. Gate: 1-200 chars, one line, UTF-8 text.
import { mkdirSync, writeFileSync } from "node:fs";

// The pitch, split into short labelled parts so every line stays short.
const opener = "Investors, meet PigeonPay:";
const hook =
  " tourists pay per poop on your statue and we take 30%";
const traction =
  " — recurring revenue, zero CAC,";
const closer =
  " and our users never leave the park, because the crumbs are here.";

// Assemble the single line.
const entry = opener + hook + traction + closer;

// Gate validation: 1-200 characters, exactly one line, not blank,
// no stray whitespace at the edges, and a clean single sentence end.
const MAX_CHARS = 200;
if (entry.length < 1 || entry.length > MAX_CHARS) {
  throw new Error(`entry is ${entry.length} chars, must be 1-${MAX_CHARS}`);
}
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (entry !== entry.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
if (!entry.endsWith(".")) {
  throw new Error("entry must end with a period");
}

// Write the entry for the judge.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote /output/entry.txt (${entry.length} chars)`);
