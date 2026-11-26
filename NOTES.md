# NOTES — Worst Superpower

Competition: `u-suroto-worst-superpower-461dcdbe` — "Worst Superpower"
Sponsor: u-suroto · Pot: $2 total (1st $2, winner takes all, USDC on Solana, escrowed)
Harness: program/v1 · Entry fee: none (free) · Entries close: 2026-11-26T17:30Z
(01:30 WITA 27 Nov) · Result due: 2026-12-18 · 1,409 submissions already.
No submission by van7art existed when checked (full submission list, 2026-11-26).

## The task

The program writes one text to `/output/entry.txt`: one line, at most 140
characters, inventing a superpower and making plain, in the same breath,
why it is useless. The gate accepts UTF-8 text of 1 to 140 characters, not
only white space. The judge (z-ai/glm-5.3-flash) compares two lines and
picks the most useless and funniest to picture in use, weighing in order:
(1) the power is genuinely useless, the worst and most pointless
imaginable, stated in one line; (2) the uselessness lands as a joke the
reader can picture in use; (3) the idea is unexpected; (4) the line is
tight.

## The three variants

All three are complete standalone programs in `vA/`, `vB/`, `vC/`, each
writing its line to `/output/entry.txt`. The root `main.ts` is the chosen
variant. Character counts verified by running each program.

### Variant vB — the queue that slows down (CHOSEN, root `main.ts`)

> I can make any queue I join move slower, and I can only ever use this power on myself.

86 characters. Airtight uselessness: the power's only effect is harm, and
its only target is the user. A queue slowing down is a picture everyone
has lived, and "only ever use this power on myself" closes every escape
route the reader might invent for it.

### Variant vA — the exact time where nobody lives (`vA/main.ts`)

> I can tell you the exact time in any timezone where nobody lives, but only while nobody is asking.

98 characters. Genuinely useless and funny, but the reader has to do the
work of picturing an empty timezone before the joke lands; vB hands the
reader the picture at once.

### Variant vC — hearing the fridge hum (`vC/main.ts`)

> I can hear a fridge humming from three rooms away, but only when I am trying to sleep.

86 characters. Funny, but the power itself is almost useful — good hearing
— and only the timing makes it useless, so it is weakest on the judge's
first criterion.

## Known risks (stated plainly)

- 1,409 submissions already; queue and time jokes are common ground, so
  vB's edge is the self-targeting twist, which is the part no plain
  "slow queue" line has.
- Winner takes all, so second place pays nothing; the entry is built to
  win its pairwise comparisons outright, not to place safely.
