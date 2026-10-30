import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { documentCategories, documents } from "../data/documents.ts";

test("registry entries reference unique, existing PDF files inside public/documents", () => {
  assert(documents.length > 0);
  assert.equal(new Set(documents.map(({ id }) => id)).size, documents.length);
  assert.equal(new Set(documents.map(({ filePath }) => filePath)).size, documents.length);

  const publicRoot = new URL("../public/documents/", import.meta.url);
  for (const document of documents) {
    assert(document.title.trim(), `${document.id} needs an official title`);
    assert.match(document.filePath, /^\/documents\/.+\.pdf$/);
    assert(!document.filePath.includes("\\"));
    const file = new URL(
      document.filePath.slice("/documents/".length).split("/").map(encodeURIComponent).join("/"),
      publicRoot,
    );
    assert(file.href.startsWith(publicRoot.href), `${document.id} must stay inside public/documents`);
    assert.equal(readFileSync(file).subarray(0, 5).toString(), "%PDF-", `${document.id} must reference a PDF`);
  }
});

test("category listings share the FY2027 budget ordinances without duplicate registry entries", () => {
  const categoryIds = new Set(documentCategories.map(({ id }) => id));
  for (const document of documents) {
    assert(document.categories.length > 0);
    assert.equal(new Set(document.categories).size, document.categories.length);
    assert(document.categories.every((category) => categoryIds.has(category)));
  }

  const budgets = documents.filter((document) =>
    document.fiscalYear === 2027 && document.categories.includes("budgets-financial-reports"),
  );
  assert.equal(budgets.length, 3, "all three supplied FY2027 ordinances must be listed");
  assert(budgets.every((document) => document.number && document.categories.includes("ordinances")));
});

test("optional publication dates are valid calendar dates and fiscal years are integers", () => {
  for (const document of documents) {
    if (document.fiscalYear !== undefined) {
      assert(Number.isInteger(document.fiscalYear));
    }
    if (document.publishedAt !== undefined) {
      assert.match(document.publishedAt, /^\d{4}-\d{2}-\d{2}$/);
      assert.equal(new Date(`${document.publishedAt}T00:00:00Z`).toISOString().slice(0, 10), document.publishedAt);
    }
  }
});
