// u-suroto-worst-superpower-461dcdbe — variant vB (CHOSEN)
// The power to slow any queue joined, usable only on oneself. The
// power's only effect is harm and its only target is the user: airtight
// uselessness, and a picture everyone has lived.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I can make any queue I join move slower, and I can only ever use this power on myself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
