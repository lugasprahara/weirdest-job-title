// Weirdest Job Title: Blind Judge Showdown
// One job title, the weirdest believable one: a real corporate role
// whose entire duty is taking the blame for the forecast. The title is
// assembled from its two halves — the role, then the employer whose
// mistakes the role exists to absorb.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The role: a salaried human whose whole job is being blamed.
const ROLE = "Official Scapegoat";
// The employer: wrong about the weather often enough to need one.
const EMPLOYER = "a Weather Forecasting App";

function renderEntry(): string {
  const text = `${ROLE} for ${EMPLOYER}`;
  // The gate: UTF-8 text of 1 to 60 characters, not only white space,
  // and nothing but the title itself.
  if (text.length < 1 || text.length > 60 || text.trim() !== text) {
    throw new Error(`entry is not a bare job title: ${JSON.stringify(text)}`);
  }
  return text;
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), renderEntry(), "utf8");
}

main();
