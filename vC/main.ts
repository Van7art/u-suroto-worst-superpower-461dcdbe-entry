// u-suroto-worst-superpower-461dcdbe — variant vC
// Hearing a fridge hum from three rooms away, but only while trying to
// sleep. Funny, but the power itself is almost useful; only the timing
// makes it useless, so it is weakest on the judge's first criterion.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I can hear a fridge humming from three rooms away, but only when I am trying to sleep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
