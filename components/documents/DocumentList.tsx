import type { TownshipDocument } from "@/data/documents";

export default function DocumentList({
  documents,
}: {
  documents: readonly TownshipDocument[];
}) {
  return (
    <ul>
      {documents.map((document) => {
        const href = document.filePath.split("/").map(encodeURIComponent).join("/");
        const linkContext = `${document.number ? `No. ${document.number}: ` : ""}${document.title}`;

        return (
          <li
            key={document.id}
            className="grid gap-5 border-b border-(--line) py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-(--red-dark)">
                {document.number && <span>No. {document.number} &middot; </span>}
                {document.fiscalYear && <span>FY{document.fiscalYear} &middot; </span>}
                PDF
              </p>
              <h3 className="mt-2 text-base font-semibold leading-7 text-(--navy) [overflow-wrap:anywhere]">
                {document.title}
              </h3>
              {document.publishedAt && (
                <p className="mt-2 text-sm text-(--ink-muted)">
                  Published{" "}
                  <time dateTime={document.publishedAt}>
                    {new Date(`${document.publishedAt}T00:00:00Z`).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      timeZone: "UTC",
                    })}
                  </time>
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-3 sm:flex-col">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center border border-(--navy) px-4 py-2.5 text-sm font-semibold text-(--navy) transition hover:bg-(--navy) hover:text-white"
              >
                View PDF
                <span className="sr-only">: {linkContext} (opens in a new tab)</span>
              </a>
              <a
                href={href}
                download
                className="inline-flex min-h-11 items-center justify-center px-4 py-2.5 text-sm font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
              >
                Download PDF
                <span className="sr-only">: {linkContext}</span>
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
