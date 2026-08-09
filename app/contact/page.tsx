import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import LocationSection from "@/components/sections/LocationSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Plato Township offices in Elgin, Illinois.",
};

const contactDirectory = [
  {
    office: "Township Supervisor",
    email: siteConfig.contact.supervisorOfficeEmail,
  },
  {
    office: "Highway Commissioner",
    email: siteConfig.contact.highwayEmail,
  },
  {
    office: "Township Assessor",
    email: siteConfig.contact.assessorEmail,
  },
] as const;

export default function ContactPage() {
  return (
    <main className="bg-(--warm-white)">
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <h1 className="max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
            Contact Plato Township
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
            Township office contact information, location, and directions.
          </p>
        </div>
      </header>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-(--container-width) gap-10 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl">
              Contact Information
            </h2>

            <div className="mt-7 border-y border-(--line) py-6">
              <h3 className="text-xl font-semibold text-(--navy)">
                Township Office
              </h3>
              <a
                href={`tel:${siteConfig.contact.officePhone.replaceAll("-", "")}`}
                className="mt-3 inline-flex min-h-11 items-center text-base text-(--ink-muted) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
              >
                {siteConfig.contact.officePhone}
              </a>
            </div>

            <div>
              {contactDirectory.map((contact) => (
                <section
                  key={contact.office}
                  aria-labelledby={`${contact.office.toLowerCase().replaceAll(" ", "-")}-heading`}
                  className="border-b border-(--line) py-6"
                >
                  <h3
                    id={`${contact.office.toLowerCase().replaceAll(" ", "-")}-heading`}
                    className="text-xl font-semibold text-(--navy)"
                  >
                    {contact.office}
                  </h3>
                  <div className="mt-3 grid gap-2 text-base leading-7">
                    <a
                      href={`mailto:${contact.email}`}
                      className="w-fit break-all text-(--ink-muted) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
                    >
                      {contact.email}
                    </a>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-7">
              <h3 className="text-lg font-semibold text-(--navy)">
                Township Office Address
              </h3>
              <a
                href={siteConfig.contact.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block max-w-sm text-base leading-7 text-(--ink-muted) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
              >
                {siteConfig.contact.address}
              </a>
            </div>
          </div>

          <ContactForm />
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
