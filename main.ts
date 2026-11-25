// One Line, One Laugh: Roast Your Fridge
// Writes exactly one roast line to $OUTPUT_DIR/entry.txt.
// Deterministic: the line is hardcoded, no randomness, no dates, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My fridge beeps if I leave the door open three seconds, like a bouncer \u2014 buddy, I'm the one paying your electric bill.";

const ENTRY_FILE = "entry.txt";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// One trailing newline: the gate counts the line, not the newline.
writeFileSync(join(outDir, ENTRY_FILE), ROAST + "\n", "utf8");
