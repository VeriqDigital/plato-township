import type { Metadata } from "next";
import Link from "next/link";
import {
  assessorDepartment,
  propertySearchDisclaimer,
} from "@/data/departments";

export const metadata: Metadata = {
  title: "Online Property Search",
  description:
    "Review the Plato Township Assessor's information disclaimer before continuing to the external property database.",
  openGraph: {
    title: "Online Property Search",
    description:
      "Review the Plato Township Assessor's information disclaimer before continuing to the external property database.",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Online Property Search",
    description:
      "Review the Plato Township Assessor's information disclaimer before continuing to the external property database.",
    images: [],
  },
};

export default function PropertySearchDisclaimerPage() {
  return (
    <main>
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <Link
            href="/departments/assessor"
            className="mb-6 inline-flex min-h-11 items-center text-sm font-semibold text-white/68 transition hover:text-white"
          >
            <span aria-hidden="true" className="mr-2">
              &larr;
            </span>
            Assessor
          </Link>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--red-light)">
            Assessor resource
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
            Online Property Search
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            Read and acknowledge the Assessor&apos;s information disclaimer
            before leaving the township website.
          </p>
        </div>
      </header>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="border-t-4 border-(--red) bg-(--mist) p-6 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-(--red-dark)">
              Please review before continuing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl">
              Plato Township Assessor&apos;s Information Disclaimer
            </h2>

            <div className="mt-7 space-y-5 border-t border-(--line) pt-7 text-base leading-8 text-(--ink-muted)">
              {propertySearchDisclaimer.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === propertySearchDisclaimer.length - 1 ? "font-semibold text-(--navy)" : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 border-t border-(--line) pt-7">
              <p className="max-w-3xl text-sm leading-7 text-(--ink-muted)">
                By selecting &ldquo;Yes, Continue to Property Search,&rdquo; you
                acknowledge and consent to the terms above. You will be taken
                to an external property database in a new tab.
              </p>
              <a
                href={assessorDepartment.externalPropertySearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-12 items-center justify-center bg-(--red) px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-(--red-dark)"
              >
                Yes, Continue to Property Search
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <p className="mt-3 text-xs leading-5 text-(--ink-muted)">
                External destination: platotownshipassessor.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
