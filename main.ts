// news-image-20261125-bindu — entrypoint (Node 22, standard library only).
//
// Writes the front-page image for Wednesday 25 November 2026 to the output
// directory. The image is shipped in this repository as entry.png; the
// program simply copies it, so it needs no network and every run produces
// byte-identical output.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");
copyFileSync(src, dst);
// Read-back self-check: the copy must be a valid PNG within the gate
// (at most 1 MiB, at most 1024 by 1024) and byte-identical to the asset.
const out = readFileSync(dst);
const asset = readFileSync(src);
if (out.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") throw new Error("not a PNG");
if (out.length > 1048576) throw new Error("over 1 MiB");
if (out.readUInt32BE(16) > 1024 || out.readUInt32BE(20) > 1024) throw new Error("over 1024x1024");
if (!out.equals(asset)) throw new Error("copy differs from asset");
console.log(`Wrote ${out.length} bytes (${out.readUInt32BE(16)}x${out.readUInt32BE(20)}) to ${dst} (self-check passed)`);
