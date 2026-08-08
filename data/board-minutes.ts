export type BoardMinuteDocument = {
  date: string;
  filename: string;
  description?: string;
};

export type BoardMinuteYear = {
  year: string;
  documents: BoardMinuteDocument[];
};

export const boardMinutesByYear: BoardMinuteYear[] = [
  {
    year: "2026",
    documents: [
      { date: "January 27, 2026", filename: "01. Plato Township Minutes 1-27-2026.pdf" },
      { date: "February 24, 2026", filename: "02. Feb 24th 2026 Minutes.pdf" },
      { date: "March 24, 2026", filename: "03. March 24th 2026 Minutes.pdf" },
      { date: "April 28, 2026", filename: "04. April signed Minutes 2026.pdf" },
      { date: "May 26, 2026", filename: "05. May 2026 Minutes.pdf" },
      { date: "June 23, 2026", filename: "06. June Minutes 2026.pdf" },
    ],
  },
  {
    year: "2025",
    documents: [
      { date: "January 28, 2025", filename: "Plato Township Minutes 1-28-2025.pdf" },
      { date: "February 25, 2025", filename: "Plato Township Minutes 2-25-2025.pdf" },
      { date: "March 25, 2025", filename: "Plato Township Minutes 3-25-2025.pdf" },
      { date: "April 8, 2025", filename: "Annual Meeting April 8th 2025 1900 hrs^.pdf", description: "Annual Town Meeting" },
      { date: "April 22, 2025", filename: "Plato Township Minutes 4-22-2025.pdf" },
      { date: "May 27, 2025", filename: "Plato Township Minutes 5-27-2025.pdf" },
      { date: "June 24, 2025", filename: "06. June 24, 2025 Munites.pdf" },
      { date: "July 22, 2025", filename: "07. Minutes (Signed) July 22 2025.pdf" },
      { date: "August 26, 2025", filename: "08. Aug 26, 2025 Minutes.pdf" },
      { date: "September 23, 2025", filename: "09. Sept 23, 2025 Minutes (Signed).pdf" },
      { date: "October 28, 2025", filename: "10. Oct 28, 2025 Minutes.pdf" },
      { date: "November 25, 2025", filename: "11. Nov 25, 2025 Minutes.pdf" },
      { date: "December 23, 2025", filename: "12. Dec 23, 2025 Minutes.pdf" },
    ],
  },
  {
    year: "2024",
    documents: [
      { date: "January 23, 2024", filename: "1. Plato Township Minutes Jan-23-2024.pdf" },
      { date: "February 27, 2024", filename: "2. Plato Township Minutess Feb 27th 2024.pdf" },
      { date: "March 26, 2024", filename: "3.Plato Township Minutess March 2024.pdf" },
      { date: "April 9, 2024", filename: "PLATO ANNUAL TOWN MEETING April 2024.pdf", description: "Annual Town Meeting" },
      { date: "April 23, 2024", filename: "4. Plato Township Minutess April-23-2024 (1).pdf" },
      { date: "May 28, 2024", filename: "5. Plato Township Minutes May-28-2024 (1).pdf" },
      { date: "May 28, 2024", filename: "5. PUBLIC HEARING FOR BUDGET AND APPROPRIATION ORDINANCES Plato Township B&A Minutes 5-28, 2024 (1).pdf", description: "Budget and Appropriation Ordinances Public Hearing" },
      { date: "June 25, 2024", filename: "6. Plato Township Minute June-25-2024 (1).pdf" },
      { date: "July 23, 2024", filename: "7. Plato Township Minutes July -23-2024 (1).pdf" },
      { date: "August 27, 2024", filename: "8. Plato Township Minutes Aug-27-2024.pdf" },
      { date: "September 24, 2024", filename: "9. Plato Township Minutes Sept-24-2024.pdf" },
      { date: "November 26, 2024", filename: "11. Plato Township Minutes 11-26-2024.pdf" },
    ],
  },
];

export const supplementaryMinuteDocuments: BoardMinuteDocument[] = [
  {
    date: "Date not stated in filename",
    filename: "11. Plato Dicennial Committee Minutes 3 (1).pdf",
    description: "Decennial Committee Minutes",
  },
];
