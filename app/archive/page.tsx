import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Access previously published Plato Township meeting records, schedules, and announcements.";

export const metadata: Metadata = {
  title: "Township Archive",
  description,
  openGraph: {
    title: "Township Archive",
    description,
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Township Archive",
    description,
    images: [],
  },
};

const archiveCategories = [
  {
    id: "board-minutes",
    title: "Board Minutes",
    description:
      "Browse published Plato Township meeting minutes organized by year and open the original PDF records.",
    href: "/board-minutes",
    ctaLabel: "Browse Board Minutes",
  },
  {
    id: "board-meetings",
    title: "Board Meetings",
    description:
      "Review the Township's published meeting schedule and available meeting details.",
    href: "/board-meetings",
    ctaLabel: "View Board Meetings",
  },
  {
    id: "announcements",
    title: "Announcement Archive",
    description:
      "Find expired Township notices that remain available for historical reference.",
    href: "/announcements#announcement-archive",
    ctaLabel: "Browse archived announcements",
  },
] as const;

export default function ArchivePage() {
  return (
    <main>
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--red-light)">
            Historical township resources
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
            Township Archive
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            Access previously published Township records, meeting information,
            and notices through the site&apos;s existing public collections.
          </p>
        </div>
      </header>

      <section className="bg-white py-14 sm:py-16" aria-labelledby="archive-categories">
        <div className="mx-auto grid max-w-(--container-width) gap-8 px-6 lg:grid-cols-[0.38fr_1fr] lg:gap-14">
          <div>
            <h2
              id="archive-categories"
              className="text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl"
            >
              Archive Categories
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-(--ink-muted)">
              Choose a collection to view the records and notices already
              published on this site.
            </p>
          </div>

          <ol className="border-t border-(--line)">
            {archiveCategories.map((category, index) => (
              <li key={category.id} className="border-b border-(--line)">
                <article className="grid gap-5 py-7 sm:px-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-8">
                  <span
                    aria-hidden="true"
                    className="font-heading text-3xl text-(--red-dark)"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-(--navy) sm:text-2xl">
                      {category.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-(--ink-muted) sm:text-base">
                      {category.description}
                    </p>
                  </div>
                  <Link
                    href={category.href}
                    className="inline-flex min-h-11 w-fit items-center font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
                  >
                    {category.ctaLabel}
                    <span aria-hidden="true" className="ml-2 text-(--red)">
                      →
                    </span>
                  </Link>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-(--mist) py-14 sm:py-16" aria-labelledby="future-records">
        <div className="mx-auto max-w-(--container-width) px-6">
          <div className="max-w-3xl border-l-4 border-(--red) bg-white p-6 sm:p-8">
            <h2 id="future-records" className="text-2xl font-semibold text-(--navy)">
              Future Records
            </h2>
            <p className="mt-3 text-base leading-7 text-(--ink-muted)">
              Additional historical Township records may be added as they
              become available.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
