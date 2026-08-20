import type { Metadata } from "next";
import Link from "next/link";
import LocationSection from "@/components/sections/LocationSection";
import { siteConfig } from "@/config/site";
import { departmentProfiles } from "@/data/departments";

const description =
  "Contact Plato Township offices and departments, find direct phone and email information, and get directions to Township Hall.";

export const metadata: Metadata = {
  title: "Contact Plato Township",
  description,
  openGraph: {
    title: "Contact Plato Township",
    description,
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Contact Plato Township",
    description,
    images: [],
  },
};

const contactDirectory = [
  departmentProfiles.supervisor,
  departmentProfiles.highway,
  departmentProfiles.assessor,
  departmentProfiles.clerk,
  departmentProfiles.cemetery,
] as const;

export default function ContactPage() {
  return (
    <main className="bg-(--warm-white)">
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--red-light)">
            Township offices and departments
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
            Contact Plato Township
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            Find direct contact information for Township offices and
            departments, or get directions to Township Hall.
          </p>
          <p className="mt-6 border-l-2 border-(--red-light) pl-4 text-sm font-semibold leading-6 text-white/78">
            For emergencies, call 911.
          </p>
        </div>
      </header>

      <section className="bg-white py-14 sm:py-16" aria-labelledby="contact-directory">
        <div className="mx-auto max-w-(--container-width) px-6">
          <div className="grid gap-8 lg:grid-cols-[0.38fr_1fr] lg:gap-14">
            <div>
              <h2
                id="contact-directory"
                className="text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl"
              >
                Contact Directory
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-(--ink-muted)">
                Contact the office that best matches your question. Call the
                Township Office when you are unsure where to begin.
              </p>
            </div>

            <div className="min-w-0">
              <article className="border-y border-(--line) py-6 sm:px-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-(--red-dark)">
                  General assistance
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-(--navy)">
                  Township Office
                </h3>
                <div className="mt-4 flex flex-col gap-2 text-base leading-7 sm:flex-row sm:flex-wrap sm:gap-x-7">
                  <a
                    href={`tel:${siteConfig.contact.officePhone.replaceAll("-", "")}`}
                    aria-label={`Call the Township Office at ${siteConfig.contact.officePhone}`}
                    className="inline-flex min-h-11 w-fit items-center font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
                  >
                    {siteConfig.contact.officePhone}
                  </a>
                  <a
                    href={siteConfig.contact.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 min-w-0 items-center break-words text-(--ink-muted) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
                  >
                    {siteConfig.contact.address}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </article>

              <ol>
                {contactDirectory.map((department) => {
                  const emailContact = department.contacts.find((contact) =>
                    contact.href?.startsWith("mailto:"),
                  );

                  return (
                    <li key={department.slug} className="border-b border-(--line)">
                      <article className="grid min-w-0 gap-5 py-6 sm:px-5 lg:grid-cols-[minmax(0,1fr)_minmax(12rem,0.72fr)_auto] lg:items-center lg:gap-8">
                        <div className="min-w-0">
                          <h3 className="text-xl font-semibold text-(--navy) sm:text-2xl">
                            {department.title}
                          </h3>
                          <p className="mt-2 max-w-xl text-sm leading-6 text-(--ink-muted)">
                            {department.description}
                          </p>
                        </div>
                        <div className="grid min-w-0 gap-1 text-sm leading-6">
                          <span className="font-semibold text-(--ink-muted)">
                            {department.contactSummary.label}
                          </span>
                          <a
                            href={department.contactSummary.href}
                            aria-label={`Call ${department.title} at ${department.contactSummary.value}`}
                            className="w-fit font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
                          >
                            {department.contactSummary.value}
                          </a>
                          {emailContact?.href && (
                            <a
                              href={emailContact.href}
                              className="mt-1 min-w-0 break-all text-(--ink-muted) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
                            >
                              {emailContact.value}
                            </a>
                          )}
                        </div>
                        <Link
                          href={department.href}
                          className="inline-flex min-h-11 w-fit items-center font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
                        >
                          View department
                          <span aria-hidden="true" className="ml-2 text-(--red)">
                            →
                          </span>
                        </Link>
                      </article>
                    </li>
                  );
                })}
              </ol>

              <aside className="mt-8 border-l-4 border-(--red) bg-(--mist) p-6">
                <h3 className="text-xl font-semibold text-(--navy)">
                  Send a Message
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-(--ink-muted)">
                  This website does not currently deliver online messages. Use
                  the department email links above or call the Township Office
                  so your question reaches the appropriate office.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-(--mist) py-16 sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <LocationSection locationOnly />
        </div>
      </section>
    </main>
  );
}
