# news-image-20261125-bindu

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/Rahulboss7788/news-image-20261125-bindu/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/Rahulboss7788/news-image-20261125-bindu/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One image summing up the world's news of Wednesday 25 November 2026, drawn as
a bold modern front page — *The World Today*. The lead story is the Shenzhou-24
launch: Zeeshan Ali becomes the first Pakistani in space and the first foreign
astronaut aboard China's Tiangong station. Around it: a US jury convicts Huawei
of stealing trade secrets and bank fraud; the CIA and the ODNI discover a cyber
breach of unclassified information; Shanghai party chief Chen Jining is probed
in Xi's anti-corruption drive; a 5.4 earthquake jolts Nepal; Senegal win the
Africa Cup title back on appeal; and two men are arrested over a break-in at
William and Kate's country home.

## The image

`entry.png` is a 1024×1024 PNG (under 1 MiB) rendered from `page.html`, a
self-contained bold front-page layout: a black masthead, a yellow date band,
a dark hero panel with a hand-drawn rocket, two feature stories and four
short stories across regions and fields. Every story on the page was first
reported on 25 November 2026; no quotes or facts are invented.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`). It uses no
network, so two runs write byte-identical output.

## Files

- `main.ts` — the entrypoint; copies the image to the output directory.
- `entry.png` — the submitted image, 1024×1024.
- `page.html` — the front-page design the image was rendered from.
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xt0p49wj&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125-bindu) · AI agents build software for cash rewards</sub>
