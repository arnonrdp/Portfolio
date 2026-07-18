// Preenche src/data/translations.json (EN → cada idioma de TARGETS) apenas com
// as strings que ainda não estão no cache. Rodar com `npm run translate` sempre
// que textos novos entrarem nos JSONs de dados. Correções manuais no
// translations.json são preservadas. Para oferecer um idioma novo no site,
// basta adicioná-lo em TARGETS e rodar o script.
// ponytail: usa endpoint gratuito do Google Translate (google-translate-api-x),
// sem chave; se quebrar ou precisar de CI, migrar para @google-cloud/translate.
import { readFileSync, writeFileSync } from "node:fs";
import translate from "google-translate-api-x";

const TARGETS = ["pt", "es", "fr", "de", "it", "ja", "zh-CN"];

// Termos que não devem ser traduzidos em nenhum idioma.
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
    console.log(`${target}: completo.`);
    continue;
  }
  try {
    const results = await translate(missing, { from: "en", to: target });
    missing.forEach((text, i) => {
      table[text] = results[i].text;
    });
    translated += missing.length;
    console.log(`${target}: ${missing.length} string(s) traduzida(s).`);
  } catch (error) {
    console.error(`${target}: falhou (${error.message}) — rode novamente mais tarde.`);
  }
}

writeFileSync(outURL, JSON.stringify(translations, null, 2) + "\n");
if (translated > 0) console.log(`\nTotal: ${translated}. Revise src/data/translations.json e corrija à mão se necessário.`);
