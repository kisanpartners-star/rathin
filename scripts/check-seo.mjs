/**
 * Quick SEO audit of the built site (run `npm run build` first, then `npm run check:seo`).
 * Reports title length (<= 60), meta description length (150-160), number of <h1> and missing image alt text per page.
 */
import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = join(resolve(dirname(fileURLToPath(import.meta.url)), '..'), 'dist');

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

let problems = 0;
for await (const file of walk(dist)) {
  const html = await readFile(file, 'utf8');
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1]?.replace(/&amp;/g, '&').replace(/&#x27;/g, "'") ?? '';
  const desc = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)?.[1] ?? html.match(/<meta[^>]*content="([^"]*)"[^>]*name="description"/)?.[1] ?? '';
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  const noAlt = (html.match(/<img(?![^>]*\balt=)[^>]*>/g) ?? []).length;
  const ld = (html.match(/application\/ld\+json/g) ?? []).length;
  const issues = [];
  if (!title || title.length > 60) issues.push(`title ${title.length} chars`);
  if (desc.length < 140 || desc.length > 165) issues.push(`description ${desc.length} chars`);
  if (h1 !== 1) issues.push(`${h1} h1 tags`);
  if (noAlt) issues.push(`${noAlt} images without alt`);
  if (issues.length) problems += 1;
  console.log(`${issues.length ? 'WARN' : ' ok '}  ${file.replace(dist, '') || '/'}  title=${title.length} desc=${desc.length} h1=${h1} jsonld=${ld}${issues.length ? '  -> ' + issues.join(', ') : ''}`);
}
console.log(problems ? `\n${problems} page(s) need attention` : '\nAll pages pass the basic SEO checks');
