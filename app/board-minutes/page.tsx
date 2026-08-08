import type { Metadata } from "next";
import { boardMinutesByYear } from "@/data/board-minutes";

export const metadata: Metadata = {
  title: "Board Minutes",
  description: "Browse Plato Township Board meeting minutes by year.",
};

const documentHref = (filename: string) =>
  `/board-meeting-minutes/${encodeURIComponent(filename)}`;

export default function BoardMinutesPage() {
  return (
    <main>
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <h1 className="font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
            Board Minutes
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
            Published minutes from Plato Township public meetings, organized by year.
          </p>
        </div>
      </header>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="max-w-3xl text-base leading-7 text-(--ink-muted)">
            Select a meeting date to open the original PDF in a new browser tab.
          </p>

          <div className="mt-10 space-y-12">
            {boardMinutesByYear.map((group) => (
              <section key={group.year} aria-labelledby={`minutes-${group.year}`}>
                <h2 id={`minutes-${group.year}`} className="border-b-2 border-(--navy) pb-3 text-3xl font-semibold text-(--navy)">
                  {group.year}
                </h2>
                <div>
                  {group.documents.map((document) => (
                    <article key={document.filename} className="grid gap-4 border-b border-(--line) py-5 sm:grid-cols-[1fr_auto] sm:items-center">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-(--navy)">{document.date}</h3>
                        {document.description && <p className="mt-1 text-sm font-semibold text-(--red-dark)">{document.description}</p>}
                      </div>
                      <a
                        href={documentHref(document.filename)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 w-fit items-center border border-(--navy) px-4 py-2.5 text-sm font-semibold text-(--navy) transition hover:bg-(--navy) hover:text-white"
                      >
                        Open PDF
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}
