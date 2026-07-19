// Generates the Journey section's dotted world map from the cities
// (city/lat/lng) in timeline.json. Runs automatically via the predev/prebuild
// hooks; the outputs (public/map-dots.svg and src/data/map-pins.json) are
// build artifacts and stay out of git.
import { readFileSync, writeFileSync } from "node:fs";
import DottedMapModule from "dotted-map";

const DottedMap = DottedMapModule.default ?? DottedMapModule;

const read = (p) => JSON.parse(readFileSync(new URL(p, import.meta.url), "utf8"));
const timeline = read("../src/data/timeline.json");

const map = new DottedMap({ height: 60, grid: "diagonal" });

// No backgroundColor: the SVG is used as a CSS mask (alpha channel).
const svg = map.getSVG({ shape: "circle", radius: 0.22, color: "#000" });
const viewBox = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
if (!viewBox) throw new Error("viewBox not found in the generated SVG");
const [width, height] = [Number(viewBox[1]), Number(viewBox[2])];

const seen = new Set();
const pins = [];
for (const item of timeline) {
  if (!item.city || seen.has(item.city)) continue;
  seen.add(item.city);
  if (typeof item.lat !== "number" || typeof item.lng !== "number") {
    throw new Error(`Timeline item missing lat/lng: "${item.city}"`);
  }
  const { x, y } = map.getPin({ lat: item.lat, lng: item.lng });
  pins.push({ city: item.city, x, y, education: item.education === true });
}

writeFileSync(new URL("../public/map-dots.svg", import.meta.url), svg);
writeFileSync(new URL("../src/data/map-pins.json", import.meta.url), JSON.stringify({ width, height, pins }, null, 2) + "\n");
console.log(`map-dots.svg (${(svg.length / 1024).toFixed(0)} KB, viewBox ${width}x${height}) + ${pins.length} pins generated`);
