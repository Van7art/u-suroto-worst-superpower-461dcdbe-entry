// Worst Superpower — the chosen entry (variant vB).
//
// Competition: u-suroto-worst-superpower-461dcdbe (make.fun, program/v1).
// The entry is a single line, at most 140 characters, inventing the most
// useless superpower imaginable and making plain, in the same breath, why
// it is useless. The judge (z-ai/glm-5.3-flash) compares two lines and
// picks the most useless and funniest to picture in use, weighing first
// that the power is genuinely useless and stated in one line, then that
// the uselessness lands as a joke the reader can picture, then that the
// idea is unexpected, then that it is tight.
//
// Why vB won over the other two variants (see vA/, vB/, vC/):
//   - vA (the exact time in a timezone nobody lives in) is genuinely
//     useless and funny, but the reader has to do the work of picturing
//     an empty timezone; vB hands the reader the picture at once: a
//     queue, slowing down, and the hero can only do it to himself.
//   - vC (hearing a fridge hum, only while trying to sleep) is funny,
//     but the power itself is almost useful — good hearing — and only
//     the timing makes it useless. The judge's first criterion asks
//     for a power that is useless in itself, and vC is the weakest
//     on that count.
//   - vB is airtight: the power's only effect is harm, and its only
//     target is the user. Slowing a queue is a picture everyone has
//     lived, and "only ever use this power on myself" closes every
//     escape route the reader might invent for it.
//
// The program writes exactly the line to /output/entry.txt (the grader's
// gate: UTF-8 text of 1 to 140 characters, not only white space) with no
// trailing newline, and prints exactly that line to stdout. It uses no
// network, no randomness, no clock and no environment input, so two runs
// produce byte-identical output. Run record: built in this session;
// the variant choice and counts are recorded in NOTES.md.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one line, and nothing else.
const LINE =
  "I can make any queue I join move slower, and I can only ever use this power on myself.";

// The gate: 1 to 140 characters, a single line, not only white space.
const LIMIT = 140;
if (
  LINE.length < 1 ||
  LINE.length > LIMIT ||
  LINE.includes("\n") ||
  LINE.trim() !== LINE
) {
  throw new Error(
    `invalid entry of ${LINE.length} characters: must be one line of 1 to ${LIMIT} characters`,
  );
}

// Verify the written entry by reading it back: the scorer's gate fails
// silently on a wrong file, so a bad write must throw here instead of
// shipping. Checks both the byte length and the exact line.
function verifyEntry(expected: string): void {
  const raw = readFileSync("/output/entry.txt");
  const text = raw.toString("utf8");
  if (text !== expected) {
    throw new Error(
      `entry mismatch: /output/entry.txt holds ${JSON.stringify(text)}, expected ${JSON.stringify(expected)}`,
    );
  }
}

// The grader's gate reads /output/entry.txt. Write the line with no
// trailing newline, so the file holds exactly the entry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read the file back and prove what was written is exactly the entry.
verifyEntry(LINE);

// Print the entry and nothing else: the line, no newline, so stdout
// carries exactly the entry too.
process.stdout.write(LINE);
