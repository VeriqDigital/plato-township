import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Township Supervisor",
  description: "Contact information and responsibilities for the Plato Township Supervisor.",
};

const responsibilities = [
  {
    title: "Township administration",
    description:
      "Coordinates day-to-day township operations and helps residents reach the appropriate office or public resource.",
  },
  {
    title: "Financial oversight",
    description:
      "Serves as treasurer of township funds and works with the Township Board on budgets, accounts, and financial reporting.",
  },
  {
    title: "General assistance",
    description:
      "Administers the township's General Assistance program for eligible residents in accordance with township requirements.",
  },
  {
    title: "Board leadership",
    description:
      "Presides over Township Board meetings and works with trustees and other elected officials on township business.",
  },
];

export default function SupervisorPage() {
  return (
    <main>
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <Link
            href="/departments"
            className="mb-6 inline-flex text-sm font-semibold text-white/62 transition hover:text-white"
          >
            Back to Township Departments
          </Link>
          <h1 className="max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
            Township Supervisor
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
            Township administration, financial oversight, and resident assistance.
          </p>
        </div>
      </header>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-(--container-width) gap-10 px-6 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="h-fit border border-(--line) bg-(--mist) p-7 sm:p-8">
            <Image
              src="/Mike.png"
              alt="Mike McMahon, Plato Township Supervisor"
              width={132}
              height={129}
              className="size-36 rounded-full border-4 border-white object-cover shadow-[0_12px_30px_rgba(14,35,62,0.14)]"
            />
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-(--navy)">
              Mike McMahon
            </h2>
            <p className="mt-1 text-base font-semibold text-(--red-dark)">
              Plato Township Supervisor
            </p>

            <div className="mt-7 border-t border-(--line) pt-6">
              <h3 className="text-lg font-semibold text-(--navy)">Contact the Supervisor&apos;s Office</h3>
              <dl className="mt-4 space-y-4 text-base leading-7">
                <div>
                  <dt className="font-semibold text-(--navy)">Township office</dt>
                  <dd>
                    <a className="text-(--ink-muted) underline decoration-(--line) underline-offset-4 hover:text-(--red)" href={`tel:${siteConfig.contact.officePhone.replaceAll("-", "")}`}>
                      {siteConfig.contact.officePhone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-(--navy)">Additional phone</dt>
                  <dd>
                    <a className="text-(--ink-muted) underline decoration-(--line) underline-offset-4 hover:text-(--red)" href={`tel:${siteConfig.contact.supervisorAlternatePhone.replaceAll("-", "")}`}>
                      {siteConfig.contact.supervisorAlternatePhone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-(--navy)">Email</dt>
                  <dd>
                    <a className="break-all text-(--ink-muted) underline decoration-(--line) underline-offset-4 hover:text-(--red)" href={`mailto:${siteConfig.contact.supervisorEmail}`}>
                      {siteConfig.contact.supervisorEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-(--navy)">Office address</dt>
                  <dd>
                    <a className="text-(--ink-muted) underline decoration-(--line) underline-offset-4 hover:text-(--red)" href={siteConfig.contact.mapUrl} target="_blank" rel="noreferrer">
                      {siteConfig.contact.address}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>

          <div>
            <section aria-labelledby="about-supervisor">
              <h2 id="about-supervisor" className="text-3xl font-semibold tracking-tight text-(--navy)">
                About Mike McMahon
              </h2>
              <div className="mt-5 border-t border-(--line) pt-5">
                <p className="max-w-3xl text-base leading-8 text-(--ink-muted)">
                  Mike McMahon serves as Plato Township Supervisor. He became Supervisor in 2023 after serving on the Township Board of Trustees. In this role, he works with the Township Board, other elected officials, staff, and residents to support responsive local administration.
                </p>
              </div>
            </section>

            <section aria-labelledby="supervisor-responsibilities" className="mt-12">
              <h2 id="supervisor-responsibilities" className="text-3xl font-semibold tracking-tight text-(--navy)">
                Responsibilities of the Township Supervisor
              </h2>
              <div className="mt-5 grid border-t border-(--line) sm:grid-cols-2">
                {responsibilities.map((responsibility, index) => (
                  <article
                    key={responsibility.title}
                    className={`border-b border-(--line) py-6 sm:p-6 ${index % 2 === 0 ? "sm:border-r" : ""}`}
                  >
                    <h3 className="text-xl font-semibold text-(--navy)">
                      {responsibility.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-(--ink-muted)">
                      {responsibility.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
