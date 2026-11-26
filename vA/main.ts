// u-suroto-worst-superpower-461dcdbe — variant vA
// The exact time in a timezone nobody lives in, and only while nobody
// asks. Genuinely useless, but the reader must picture the empty
// timezone before the joke lands.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I can tell you the exact time in any timezone where nobody lives, but only while nobody is asking.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
