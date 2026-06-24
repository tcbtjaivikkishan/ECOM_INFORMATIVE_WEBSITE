const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

const ROOT_DIR = path.resolve("./public");

const SUPPORTED_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".bmp",
  ".tiff",
  ".avif",
  ".jfif",
  ".heif"
]);

const stats = {
  processed: 0,
  converted: 0,
  skipped: 0,
  failed: 0
};

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function convertImage(filePath) {
  stats.processed++;

  const ext = path.extname(filePath).toLowerCase();

  if (ext === ".webp") {
    stats.skipped++;
    return;
  }

  if (!SUPPORTED_EXTENSIONS.has(ext)) {
    stats.skipped++;
    return;
  }

  const parsed = path.parse(filePath);

  const outputPath = path.join(
    parsed.dir,
    `${parsed.name}.webp`
  );

  try {
    if (await fileExists(outputPath)) {
      console.log(
        `[SKIP] WebP already exists: ${outputPath}`
      );

      stats.skipped++;
      return;
    }

    const tempOutput = `${outputPath}.tmp`;

    await sharp(filePath)
      .webp({
        quality: 80,
        effort: 6
      })
      .toFile(tempOutput);

    await fs.rename(tempOutput, outputPath);

    await fs.unlink(filePath);

    stats.converted++;

    console.log(
      `[OK] ${filePath} -> ${outputPath}`
    );

  } catch (error) {
    stats.failed++;

    console.error(
      `[FAIL] ${filePath}`
    );

    console.error(error.message);
  }
}

async function scanDirectory(dir) {
  let entries;

  try {
    entries = await fs.readdir(dir, {
      withFileTypes: true
    });
  } catch (err) {
    console.error(
      `[ERROR] Cannot read directory: ${dir}`
    );

    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(
      dir,
      entry.name
    );

    if (entry.isDirectory()) {
      await scanDirectory(fullPath);
      continue;
    }

    await convertImage(fullPath);
  }
}

async function main() {
  console.log("\n====================");
  console.log("WEBP CONVERSION START");
  console.log("====================\n");

  if (!(await fileExists(ROOT_DIR))) {
    throw new Error(
      `Directory not found: ${ROOT_DIR}`
    );
  }

  const start = Date.now();

  await scanDirectory(ROOT_DIR);

  const duration =
    ((Date.now() - start) / 1000).toFixed(2);

  console.log("\n====================");
  console.log("SUMMARY");
  console.log("====================");

  console.log(
    `Processed : ${stats.processed}`
  );

  console.log(
    `Converted : ${stats.converted}`
  );

  console.log(
    `Skipped   : ${stats.skipped}`
  );

  console.log(
    `Failed    : ${stats.failed}`
  );

  console.log(
    `Duration  : ${duration}s`
  );

  console.log("====================\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});