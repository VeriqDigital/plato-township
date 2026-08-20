import type { Metadata } from "next";
import Link from "next/link";
import type { ElectionResource } from "@/data/elections";
import {
  illinoisElectionResources,
  kaneCountyElectionResources,
  votingResources,
} from "@/data/elections";

const description =
  "Official voting and election resources for Plato Township residents in Kane County, Illinois.";

export const metadata: Metadata = {
  title: "Elections",
  description,
  openGraph: {
    title: "Elections",
    description,
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Elections",
    description,
    images: [],
  },
};

function ElectionResourceList({
  resources,
}: {
  resources: readonly ElectionResource[];
}) {
  return (
    <ol className="border-t border-(--line)">
      {resources.map((resource) => (
        <li key={resource.id} className="border-b border-(--line)">
          <article className="grid min-w-0 gap-5 py-6 sm:px-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-(--red-dark)">
                {resource.source}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-snug text-(--navy) sm:text-2xl">
                {resource.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-(--ink-muted) sm:text-base">
                {resource.description}
              </p>
            </div>
            <a
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full min-w-0 max-w-full items-center justify-between gap-4 border border-(--line) px-4 py-3 text-sm font-semibold text-(--navy) transition hover:border-(--red) hover:text-(--red) sm:w-fit sm:min-w-56"
            >
              <span className="min-w-0 break-words">{resource.ctaLabel}</span>
              <span aria-hidden="true" className="shrink-0 text-(--red)">
                ↗
              </span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </article>
        </li>
      ))}
    </ol>
  );
}

export default function ElectionsPage() {
  return (
    <main>
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--red-light)">
            Official voter resources
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
            Elections
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            Access official voter registration, polling-place, ballot, early
            voting, vote-by-mail, and election-result information for Kane
            County residents.
          </p>
        </div>
      </header>

      <section className="bg-white py-14 sm:py-16" aria-labelledby="voting-resources">
        <div className="mx-auto grid max-w-(--container-width) gap-8 px-6 lg:grid-cols-[0.38fr_1fr] lg:gap-14">
          <div>
            <h2
              id="voting-resources"
              className="text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl"
            >
              Voting Resources
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-(--ink-muted)">
              Start with Kane County&apos;s official election services for local
              registration and voting information.
            </p>
            <p className="mt-6 border-l-4 border-(--red) bg-(--warm-white) p-4 text-sm font-semibold leading-6 text-(--navy)">
              Election dates, polling locations, and procedures may change.
              Confirm current details with the official election authority
              before acting.
            </p>
          </div>
          <ElectionResourceList resources={votingResources} />
        </div>
      </section>

      <section className="bg-(--mist) py-14 sm:py-16" aria-labelledby="kane-county-elections">
        <div className="mx-auto grid max-w-(--container-width) gap-8 px-6 lg:grid-cols-[0.38fr_1fr] lg:gap-14">
          <div>
            <h2
              id="kane-county-elections"
              className="text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl"
            >
              Kane County Elections
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-(--ink-muted)">
              For Plato Township residents, use the Kane County Clerk&apos;s
              official resources for local voter services and election
              administration information.
            </p>
          </div>
          <ElectionResourceList resources={kaneCountyElectionResources} />
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" aria-labelledby="illinois-election-resources">
        <div className="mx-auto grid max-w-(--container-width) gap-8 px-6 lg:grid-cols-[0.38fr_1fr] lg:gap-14">
          <div>
            <h2
              id="illinois-election-resources"
              className="text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl"
            >
              Illinois Election Resources
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-(--ink-muted)">
              Use the Illinois State Board of Elections for statewide voter,
              candidate, filing, and election information.
            </p>
          </div>
          <ElectionResourceList resources={illinoisElectionResources} />
        </div>
      </section>

      <section className="bg-(--warm-white) py-14 sm:py-16" aria-labelledby="township-clerk">
        <div className="mx-auto max-w-(--container-width) px-6">
          <div className="grid gap-6 border-y border-(--line) py-8 lg:grid-cols-[0.38fr_1fr] lg:gap-14">
            <h2
              id="township-clerk"
              className="text-3xl font-semibold tracking-tight text-(--navy)"
            >
              Township Clerk
            </h2>
            <div className="max-w-3xl">
              <p className="text-base leading-7 text-(--ink-muted)">
                The Township Clerk maintains Township records and has limited
                election-related responsibilities. Use Kane County and Illinois
                resources above for voter registration, ballots, polling places,
                dates, and filing instructions.
              </p>
              <Link
                href="/departments/clerk"
                className="mt-4 inline-flex min-h-11 items-center font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
              >
                View Township Clerk information
                <span aria-hidden="true" className="ml-2 text-(--red)">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
