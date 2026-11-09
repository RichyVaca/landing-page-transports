import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assets = path.join(root, "src", "assets");
const output = path.join(assets, "generated");

await mkdir(output, { recursive: true });

const images = [
  { input: "hero-source.jpg", name: "hero", widths: [768, 1100, 1376] },
  { input: "imgCour2.jpg", name: "nosotros", widths: [640, 960] },
  { input: "imgCour3.jpg", name: "nosotros-alt", widths: [480, 720] },
];

for (const image of images) {
  const input = path.join(assets, image.input);
  const largestWidth = image.widths[image.widths.length - 1];

  for (const width of image.widths) {
    const pipeline = sharp(input).resize({ width, withoutEnlargement: true });
    const outputs = [
      pipeline
        .clone()
        .avif({ quality: 45, effort: 6 })
        .toFile(path.join(output, `${image.name}-${width}.avif`)),
      pipeline
        .clone()
        .webp({ quality: 68 })
        .toFile(path.join(output, `${image.name}-${width}.webp`)),
    ];

    if (width === largestWidth) {
      outputs.push(
        pipeline
          .clone()
          .jpeg({ quality: 78, mozjpeg: true })
          .toFile(path.join(output, `${image.name}-${width}.jpg`))
      );
    }

    await Promise.all(outputs);
  }
}

