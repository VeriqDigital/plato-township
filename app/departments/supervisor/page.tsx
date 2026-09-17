import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { departmentMetadata } from "@/components/departments/departmentMetadata";
import { siteConfig } from "@/config/site";
import { departmentProfiles } from "@/data/departments";

export const metadata: Metadata = departmentMetadata(
  departmentProfiles.supervisor,
);

const responsibilities = [
  "Community communications and public Q&A",
  "Managing emails, phone calls, and township correspondence",
  "Website development and maintenance",
  "Community engagement and public relations",
  "Serving as CEO and member of the Township Board of Trustees",
  "Overseeing General Assistance programs",
  "Acting as Treasurer of the Township",
  "Preparing and managing budgets, bills, auditing, and bookkeeping",
  "Networking and collaborating with neighboring townships",
  "Attending local meetings (school boards, community events, etc.)",
  "Setting meeting agendas",
  "Advocating on behalf of residents with Kane County officials",
  "Working with and, when necessary, challenging State representatives to protect the interests of Township residents",
  "Maintaining township databases and public records (paper and digital)",
  "Overseeing Plato Park (primarily through an intergovernmental agreement with the Road District)",
  "Negotiating contracts and agreements in the best interest of Township residents",
  "Working closely with the Township Highway Department",
];

const biography = [
  "Formerly a City of Chicago Fire Department fireman (Retired) and former business owner. (Retired)",
  "Born in Chicago, grew up in unincorporated Lombard.",
  "College: SIU",
  "Service: USAF",
  "After completing a career in the fire service, we moved out of the City of Chicago.",
  "My wife & I have been residents of Plato Township since 2016.",
];

export default function SupervisorPage() {
  return (
    <main>
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <Link
            href="/departments"
            className="mb-6 inline-flex min-h-11 items-center text-sm font-semibold text-white/62 transition hover:text-white"
          >
            Back to Township Departments
          </Link>
          <h1 className="max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
            Township Supervisor
          </h1>
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
              <h3 className="text-lg font-semibold text-(--navy)">Plato Township Supervisor&apos;s Office:</h3>
              <a
                className="mt-3 block text-base leading-7 text-(--ink-muted) underline decoration-(--line) underline-offset-4 hover:text-(--red)"
                href={siteConfig.contact.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                10N924 Rippburger Road, Elgin, IL 60124
                <span aria-hidden="true" className="ml-1 text-(--red)">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <dl className="mt-4 space-y-4 text-base leading-7">
                <div>
                  <dt className="font-semibold text-(--navy)">Phones</dt>
                  <dd className="grid gap-1">
                    <a className="text-(--ink-muted) underline decoration-(--line) underline-offset-4 hover:text-(--red)" href={`tel:${siteConfig.contact.officePhone.replaceAll("-", "")}`}>
                      {siteConfig.contact.officePhone}
                    </a>
                    <a className="text-(--ink-muted) underline decoration-(--line) underline-offset-4 hover:text-(--red)" href={`tel:${siteConfig.contact.supervisorAlternatePhone.replaceAll("-", "")}`}>
                      {siteConfig.contact.supervisorAlternatePhone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-(--navy)">Emails</dt>
                  <dd className="grid gap-1">
                    <a className="break-all text-(--ink-muted) underline decoration-(--line) underline-offset-4 hover:text-(--red)" href="mailto:Supervisor@PlatoTwp.gov">
                      Supervisor@PlatoTwp.gov
                    </a>
                    <a className="break-all text-(--ink-muted) underline decoration-(--line) underline-offset-4 hover:text-(--red)" href={`mailto:${siteConfig.contact.supervisorEmail}`}>
                      {siteConfig.contact.supervisorEmail}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>

          <div>
            <section aria-labelledby="supervisor-office">
              <h2 id="supervisor-office" className="text-3xl font-semibold tracking-tight text-(--navy)">
                Township Supervisors Office
              </h2>
              <div className="mt-5 border-t border-(--line) pt-5">
                <p className="max-w-3xl text-base leading-8 text-(--ink-muted)">
                  &ldquo;Statutorily defined as the Chief Executive Officer (CEO) of the township, an Illinois Township Supervisor is positioned to fulfill a key leadership role on the township team as the manager of financial affairs in the township, coordinator of Township programs, and administrator of day-to-day activities in the office&rdquo;.
                </p>
                <h3 className="mt-7 text-xl font-semibold text-(--navy)">
                  In addition, A SUPERVISOR is:
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-(--ink-muted)">
                  <li className="border-l-2 border-(--red) pl-4">A voting member and chair of the board of trustees (60 ILCS 1/80-15)</li>
                  <li className="border-l-2 border-(--red) pl-4">Administrator of the General Assistance Program.</li>
                  <li className="border-l-2 border-(--red) pl-4">The treasurer of all township funds including general assistance, cemetery funds, water system funds and road and bridge funds. (60 ILCS 1/70-25)</li>
                </ul>
              </div>
            </section>

            <section aria-labelledby="supervisor-biography" className="mt-12">
              <h2 id="supervisor-biography" className="text-3xl font-semibold tracking-tight text-(--navy)">
                Brief Bio
              </h2>
              <div className="mt-5 border-t border-(--line) pt-5">
                <ul className="space-y-3 text-base leading-7 text-(--ink-muted)">
                  {biography.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 bg-(--red)" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-l-4 border-(--red) bg-(--mist) p-5 text-base leading-8 text-(--navy)">
                  &ldquo;As Supervisor of Plato Township, I am fully committed to representing the residents and always putting the interests of our community first. If you have any questions or concerns, please feel free to contact me by phone or email.&rdquo;
                </p>
              </div>
            </section>

            <section aria-labelledby="supervisor-responsibilities" className="mt-12">
              <h2 id="supervisor-responsibilities" className="text-3xl font-semibold tracking-tight text-(--navy)">
                Responsibilities of the Township Supervisor
              </h2>
              <ul className="mt-5 grid border-t border-(--line) sm:grid-cols-2">
                {responsibilities.map((responsibility, index) => (
                  <li
                    key={responsibility}
                    className={`flex gap-3 border-b border-(--line) py-4 text-base leading-7 text-(--ink-muted) sm:px-5 ${index % 2 === 0 ? "sm:border-r" : ""}`}
                  >
                    <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 bg-(--red)" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg font-semibold leading-8 text-(--navy)">
                &ldquo;My priority is clear: to serve and advocate for the citizens of Plato Township with transparency, responsibility, and dedication.&rdquo;
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
