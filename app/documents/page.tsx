import type { Metadata } from "next";
import Link from "next/link";
import DocumentList from "@/components/documents/DocumentList";
import Container from "@/components/ui/Container";
import { documentCategories, documents } from "@/data/documents";

const title = "Documents & Records";
const description =
  "View and download Plato Township budgets, financial reports, ordinances, and resolutions, and find meeting minutes and meeting information.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/documents" },
  openGraph: {
    title,
    description,
    url: "/documents",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function DocumentsPage() {
  return (
    <main>
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--red-light)">
            Township postings
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
            Documents &amp; Records
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            Public access to township budgets, ordinances, resolutions, and
            meeting records. View the original documents or download a copy.
          </p>
        </Container>
      </header>

      <nav aria-label="Document categories" className="bg-(--warm-white)">
        <div className="mx-auto max-w-(--container-width) px-6 py-5">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              ...documentCategories,
              { id: "meeting-minutes-agendas", title: "Meeting Minutes & Agendas" },
            ].map((category) => (
              <li key={category.id}>
                <Link
                  href={`#${category.id}`}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="max-w-3xl text-base leading-7 text-(--ink-muted)">
            Select View PDF to open a document in a new tab, or Download PDF to
            save a copy.
          </p>

          <div className="mt-10 space-y-12">
            {documentCategories.map((category) => {
              const categoryDocuments = documents.filter((document) =>
                document.categories.includes(category.id),
              );

              return (
                <section
                  key={category.id}
                  id={category.id}
                  aria-labelledby={`${category.id}-heading`}
                  className="scroll-mt-28"
                >
                  <h2
                    id={`${category.id}-heading`}
                    className="border-b-2 border-(--navy) pb-3 text-3xl font-semibold text-(--navy)"
                  >
                    {category.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-(--ink-muted)">
                    {category.description}
                  </p>
                  {categoryDocuments.length ? (
                    <DocumentList documents={categoryDocuments} />
                  ) : (
                    <p className="mt-5 border border-(--line) bg-(--warm-white) p-5 text-base leading-7 text-(--ink-muted)">
                      {category.emptyMessage}
                    </p>
                  )}
                </section>
              );
            })}

            <section
              id="meeting-minutes-agendas"
              aria-labelledby="meeting-minutes-agendas-heading"
              className="scroll-mt-28"
            >
              <h2
                id="meeting-minutes-agendas-heading"
                className="border-b-2 border-(--navy) pb-3 text-3xl font-semibold text-(--navy)"
              >
                Meeting Minutes &amp; Agendas
              </h2>
              <p className="mt-4 text-base leading-7 text-(--ink-muted)">
                Browse published minutes and the township meeting schedule. For
                agendas or records not listed here, contact the Township Clerk.
              </p>
              <ul className="mt-5 divide-y divide-(--line)">
                {[
                  { href: "/board-minutes", label: "Board Minutes" },
                  { href: "/board-meetings", label: "Board Meetings & Schedule" },
                  { href: "/departments/clerk", label: "Contact the Township Clerk" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-14 items-center justify-between gap-5 py-4 font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
                    >
                      {link.label}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
