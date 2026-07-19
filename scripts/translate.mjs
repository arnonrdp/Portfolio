// Fills src/data/translations.json (EN → each language in TARGETS) with the
// strings that are not cached yet. Run `npm run translate` whenever new texts
// land in the data JSONs. Manual corrections in translations.json are never
// overwritten. To offer a new language on the site, add its code to TARGETS
// and run the script.
// Uses the free Google Translate endpoint (google-translate-api-x), no API
// key; if it breaks or CI needs it, switch to @google-cloud/translate.
import { readFileSync, writeFileSync } from "node:fs";
import translate from "google-translate-api-x";

const TARGETS = ["pt", "es", "fr", "de", "it", "ja", "zh-CN"];

// Terms that must stay untranslated in every language.
const KEEP = ["Stack"];

const read = (p) => JSON.parse(readFileSync(new URL(p, import.meta.url), "utf8"));
const dict = read("../src/data/dict.json");
const portfolios = read("../src/data/portfolios.json");
const timeline = read("../src/data/timeline.json");
const outURL = new URL("../src/data/translations.json", import.meta.url);
let translations = {};
try {
  translations = JSON.parse(readFileSync(outURL, "utf8"));
} catch {}

const strings = new Set();
for (const value of Object.values(dict)) {
  if (typeof value === "string") strings.add(value);
}
for (const section of dict.sections) strings.add(section.label);
for (const project of [...portfolios.featured, ...portfolios.more]) strings.add(project.desc);
for (const item of timeline) {
  strings.add(item.time);
  strings.add(item.title);
  strings.add(item.desc);
}

let translated = 0;
for (const target of TARGETS) {
  const table = (translations[target] ??= {});
  for (const term of KEEP) if (strings.has(term) && !table[term]) table[term] = term;
  const missing = [...strings].filter((s) => !table[s]);
  if (missing.length === 0) {
    console.log(`${target}: up to date.`);
    continue;
  }
  try {
    const results = await translate(missing, { from: "en", to: target });
    missing.forEach((text, i) => {
      table[text] = results[i].text;
    });
    translated += missing.length;
    console.log(`${target}: ${missing.length} string(s) translated.`);
  } catch (error) {
    console.error(`${target}: failed (${error.message}) — try again later.`);
  }
}

writeFileSync(outURL, JSON.stringify(translations, null, 2) + "\n");
if (translated > 0) console.log(`\nTotal: ${translated}. Review src/data/translations.json and fix by hand if needed.`);
