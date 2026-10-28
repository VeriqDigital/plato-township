export const documentCategories = [
  {
    id: "budgets-financial-reports",
    title: "Budgets & Financial Reports",
    description: "Township budgets, appropriation ordinances, and financial reports.",
    emptyMessage: "No budgets or financial reports are currently listed here.",
  },
  {
    id: "ordinances",
    title: "Ordinances",
    description: "Published township ordinances, including budget appropriations.",
    emptyMessage: "No ordinances are currently listed here.",
  },
  {
    id: "resolutions",
    title: "Resolutions",
    description: "Published resolutions of the Township Board.",
    emptyMessage: "No resolutions are currently listed here.",
  },
] as const;

export type DocumentCategory = (typeof documentCategories)[number]["id"];

export type TownshipDocument = {
  id: string;
  /** Official title transcribed from the PDF, preserving wording and punctuation. */
  title: string;
  number?: string;
  /** The year in which the fiscal year ends; omit for records unrelated to a fiscal year. */
  fiscalYear?: number;
  categories: readonly DocumentCategory[];
  /** Unencoded path relative to public/. Encode when rendering a link. */
  filePath: `/documents/${string}.pdf`;
  /** Confirmed publication date in YYYY-MM-DD format; not the adoption date. */
  publishedAt?: string;
};

// Keep one record and one PDF per document. Multiple categories reuse the same file.
// Publication dates are omitted until confirmed by the township.
export const documents: readonly TownshipDocument[] = [
  {
    id: "fy2027-township-budget",
    title:
      "BUDGET AND APPROPRIATION ORDINANCE FOR PLATO TOWNSHIP, KANE COUNTY, ILLINOIS FOR THE FISCAL YEAR BEGINNING APRIL 1, 2026 AND ENDING MARCH 31, 2027",
    number: "26-001",
    fiscalYear: 2027,
    categories: ["budgets-financial-reports", "ordinances"],
    filePath: "/documents/ordinances/Ordinance 26-001 - FY 27 B&A TOWN.pdf",
  },
  {
    id: "fy2027-road-district-budget",
    title:
      "BUDGET AND APPROPRIATION ORDINANCE FOR PLATO TOWNSHIP ROAD DISTRICT, KANE COUNTY, ILLINOIS FOR THE FISCAL YEAR BEGINNING: APRIL 1, 2026 AND ENDING MARCH 31, 2027.",
    // The official heading says 2026-002; the supplied filename says 26-002.
    number: "2026-002",
    fiscalYear: 2027,
    categories: ["budgets-financial-reports", "ordinances"],
    filePath: "/documents/ordinances/Ordinance 26-002 - FY 27 B&A ROAD.pdf",
  },
  {
    id: "fy2027-cemetery-district-budget",
    title:
      "BUDGET AND APPROPRIATION ORDINANCE FOR PLATO TOWNSHIP CEMETERY DISTRICT, KANE COUNTY, ILLINOIS FOR THE FISCAL YEAR BEGINNING APRIL 1, 2026 AND ENDING MARCH 31, 2027.",
    number: "26-003",
    fiscalYear: 2027,
    categories: ["budgets-financial-reports", "ordinances"],
    filePath: "/documents/ordinances/Ordinance 26-003 - FY 27 B&A CEMETERY.pdf",
  },
];
