import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { boardMinutesByYear } from "../data/board-minutes.ts";

test("minutes reference unique, existing PDFs and stay chronological within each year", () => {
  const filenames = new Set();
  const publicRoot = new URL("../public/board-meeting-minutes/", import.meta.url);
  for (const group of boardMinutesByYear) {
    let previousDate = -Infinity;
    for (const document of group.documents) {
      assert(!filenames.has(document.filename), `duplicate minutes: ${document.filename}`);
      filenames.add(document.filename);
      const date = Date.parse(document.date);
      assert(Number.isFinite(date), `invalid meeting date: ${document.date}`);
      assert.equal(String(new Date(date).getFullYear()), group.year);
      assert(date >= previousDate, `${group.year} minutes must be chronological`);
      previousDate = date;
      const file = new URL(encodeURIComponent(document.filename), publicRoot);
      assert(file.href.startsWith(publicRoot.href));
      assert.equal(readFileSync(file).subarray(0, 5).toString(), "%PDF-");
    }
  }
});

test("September 2026 minutes use the supplied PDF and verified meeting date once", () => {
  const minutes = boardMinutesByYear.find(({ year }) => year === "2026").documents;
  const september = minutes.filter(({ date }) => date === "September 22, 2026");
  assert.deepEqual(september, [{
    date: "September 22, 2026",
    filename: "09. September 2026 Minutes - a.pdf",
  }]);
});
