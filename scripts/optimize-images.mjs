import sharp from 'sharp';
import { readdirSync, unlinkSync } from 'fs';
import { join, extname, basename } from 'path';

const publicDir = join(process.cwd(), 'public');
const files = readdirSync(publicDir).filter(
  (f) => extname(f).toLowerCase() === '.png' && f !== 'logo.png'
);

console.log(`🔧 Optimizing ${files.length} images...`);

for (const file of files) {
  const inputPath = join(publicDir, file);
  const outputName = basename(file, '.png') + '.webp';
  const outputPath = join(publicDir, outputName);

  try {
    await sharp(inputPath)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);

    const origStats = (await import('fs')).statSync(inputPath);
    const newStats = (await import('fs')).statSync(outputPath);
    const savings = ((1 - newStats.size / origStats.size) * 100).toFixed(1);

    console.log(
      `  ✅ ${file} (${(origStats.size / 1024).toFixed(0)}KB) → ${outputName} (${(newStats.size / 1024).toFixed(0)}KB) — ${savings}% smaller`
    );

    // Remove original PNG
    unlinkSync(inputPath);
  } catch (err) {
    console.error(`  ❌ Failed: ${file}`, err.message);
  }
}

console.log('🎉 Done! All service images optimized to WebP.');
