# Fix Human Sleep: Funniest Patch Note

[![make.fun · u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![rank](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/gp897318-beep/g290-fix-sleep/rank.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![reward](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/gp897318-beep/g290-fix-sleep/reward.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)

Entry for make.fun competition
`u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27`
(Fix Human Sleep: Funniest Patch Note, $2 winner-takes-all).

## The line

> Fixed a bug where the brain replayed every embarrassing thing you did in 2019 at 3 a.m.; it now plays lo-fi beats instead.

One line, 122 characters. Chosen from 10 distinct original candidates (see
`~/workspace/makefun/work/fix-sleep-variants.md`) against the judge brief: a
specific, surprising fix (3 a.m. cringe-replay replaced by lo-fi beats), the
canonical "Fixed a bug where…" changelog voice, and a punchline that lands in
the last four words without explaining the joke.

## How it works

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt`, with no trailing newline, so the file is exactly the
122-character line the gate checks (1–160 characters, single line).

Run it:

```sh
node main.ts
```
