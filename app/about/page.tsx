import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Plato Township and its role in serving residents of Kane County, Illinois.",
};

export default function AboutPage() {
  return (
    <main>
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <h1 className="max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
            Serving Plato Township
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
            Local leadership, essential services, and an open connection to the
            community we serve in western Kane County.
          </p>
        </div>
      </header>

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <h2 className="text-2xl font-semibold text-(--navy)">About Plato Township</h2>
          <div>
            <div className="grid gap-7 border-t border-(--line) pt-6 md:grid-cols-2">
              <p className="text-base leading-7 text-(--ink-muted)">
                Plato Township provides residents with accessible local
                administration, property assessment support, highway services,
                public records, and transparent township governance.
              </p>
              <p className="text-base leading-7 text-(--ink-muted)">
                This demo is designed to make that work easier to understand,
                with direct pathways to departments, meeting information, and
                commonly requested resources.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <section id="officials" className="bg-(--mist) py-16 sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="section-title">Elected Officials</h2>
              <p className="mt-4 max-w-md text-base leading-7 text-(--ink-muted)">Township government is led by elected officials responsible for administration, records, assessments, roads, and public oversight.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Township Supervisor", "Township Clerk", "Township Assessor", "Highway Commissioner", "Board of Trustees"].map((office) => (
                <article key={office} className="border border-(--line) bg-white p-6">
                  <h3 className="text-xl font-semibold text-(--navy)">{office}</h3>
                  <p className="mt-3 text-base leading-7 text-(--ink-muted)">Official names and biographies can be added during the township content review.</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="bg-white py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl">Find the office you need</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-(--ink-muted)">Explore department responsibilities, then contact the township office if you are not sure where to begin.</p>
          <Link href="/services" className="mt-7 inline-flex items-center bg-(--red) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--red-dark)">View departments</Link>
        </div>
      </section>
    </main>
  );
}
