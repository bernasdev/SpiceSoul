import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const PER_DIR = {
  feedbacks:      { maxWidth: 500,  jpegQuality: 80, genWebp: true },
  especiarias:    { maxWidth: 800,  pngLevel: 9,     genWebp: true },
  imagensProjeto: { maxWidth: 1920, jpegQuality: 80, pngLevel: 9, genWebp: true },
  pratos:         { maxWidth: 800,  pngLevel: 9,     genWebp: true },
};

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (e.isFile()) yield full;
  }
}

async function optimize() {
  const results = [];

  for await (const filePath of walk(publicDir)) {
    const ext = path.extname(filePath).toLowerCase();
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') continue;

    const rel = path.relative(publicDir, filePath);
    const category = rel.split(path.sep)[0];
    const cfg = PER_DIR[category] || PER_DIR.imagensProjeto;

    const inputBuffer = await fs.readFile(filePath);
    const meta = await sharp(inputBuffer).metadata();
    const isJpeg = ext === '.jpg' || ext === '.jpeg';
    const origSize = inputBuffer.length;

    let pipeline = sharp(inputBuffer);

    if (cfg.maxWidth && meta.width > cfg.maxWidth) {
      pipeline = pipeline.resize({ width: cfg.maxWidth, withoutEnlargement: true });
    }

    let newSize;
    if (isJpeg) {
      const buf = await pipeline.clone().jpeg({ quality: cfg.jpegQuality, mozjpeg: true }).toBuffer();
      newSize = buf.length;
      if (newSize < origSize) {
        await fs.writeFile(filePath, buf);
      } else {
        newSize = origSize;
      }
    } else {
      const buf = await pipeline.clone().png({ compressionLevel: cfg.pngLevel || 9 }).toBuffer();
      newSize = buf.length;
      if (newSize < origSize) {
        await fs.writeFile(filePath, buf);
      } else {
        newSize = origSize;
      }
    }

    let webpSize = 0;
    if (cfg.genWebp) {
      const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      let wp = sharp(inputBuffer);
      if (cfg.maxWidth && meta.width > cfg.maxWidth) {
        wp = wp.resize({ width: cfg.maxWidth, withoutEnlargement: true });
      }
      const wbuf = await wp.webp({ quality: 80, effort: 4 }).toBuffer();
      await fs.writeFile(webpPath, wbuf);
      webpSize = wbuf.length;
    }

    const savedPct = origSize > 0 ? ((1 - newSize / origSize) * 100).toFixed(1) : 0;
    results.push({
      file: rel,
      origKB: (origSize / 1024).toFixed(1),
      newKB: (newSize / 1024).toFixed(1),
      savedPct,
      webpKB: (webpSize / 1024).toFixed(1),
    });
  }

  return results;
}

const all = await optimize();

const totalOrig = all.reduce((s, r) => s + parseFloat(r.origKB), 0);
const totalNew = all.reduce((s, r) => s + parseFloat(r.newKB), 0);
const totalWebp = all.reduce((s, r) => s + parseFloat(r.webpKB), 0);
const totalSaved = totalOrig - totalNew;

console.log('\n=== OTIMIZAÇÃO DE IMAGENS ===\n');

const improved = all.filter((r) => parseFloat(r.savedPct) > 0);
const sorted = improved.sort((a, b) => parseFloat(b.savedPct) - parseFloat(a.savedPct));

for (const r of sorted) {
  console.log(
    `  ${r.file.padEnd(55)} ${r.origKB.padStart(8)} KB \u2192 ${r.newKB.padStart(8)} KB  (${r.savedPct}%)` +
      (r.webpKB > 0 ? `  webp: ${r.webpKB} KB` : ''),
  );
}

const unchanged = all.filter((r) => parseFloat(r.savedPct) <= 0);
if (unchanged.length > 0) {
  console.log(`\n--- ${unchanged.length} imagens j\u00e1 estavam otimizadas ou n\u00e3o tiveram redu\u00e7\u00e3o ---`);
}

console.log(`\n--- RESUMO ---`);
console.log(`  Total de arquivos:        ${all.length}`);
console.log(`  Tamanho original:         ${totalOrig.toFixed(1)} KB (${(totalOrig / 1024).toFixed(1)} MB)`);
console.log(`  Ap\u00f3s otimiza\u00e7\u00e3o:          ${totalNew.toFixed(1)} KB (${(totalNew / 1024).toFixed(1)} MB)`);
console.log(`  Economia:                 ${totalSaved.toFixed(1)} KB (${(totalSaved / totalOrig * 100).toFixed(1)}%)`);
if (totalWebp > 0) {
  console.log(`  WebP gerados:             ${totalWebp.toFixed(1)} KB (${(totalWebp / 1024).toFixed(1)} MB)`);
}
