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
      <header className="bg-(--navy) py-20 text-white sm:py-28">
        <div className="mx-auto max-w-(--container-width) px-6">
          <p className="eyebrow text-white/55 before:bg-(--red)">About us</p>
          <h1 className="mt-5 max-w-4xl font-heading text-6xl font-medium uppercase leading-[0.96] sm:text-8xl">
            Serving Plato Township
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
            Local leadership, essential services, and an open connection to the
            community we serve in western Kane County.
          </p>
        </div>
      </header>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <p className="eyebrow">Our township</p>
          <div>
            <h2 className="section-title">Government grounded in community</h2>
            <div className="mt-8 grid gap-7 border-t border-(--line) pt-7 md:grid-cols-2">
              <p className="leading-7 text-(--ink-muted)">
                Plato Township provides residents with accessible local
                administration, property assessment support, highway services,
                public records, and transparent township governance.
              </p>
              <p className="leading-7 text-(--ink-muted)">
                This demo is designed to make that work easier to understand,
                with direct pathways to departments, meeting information, and
                commonly requested resources.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <section id="officials" className="bg-(--mist) py-22 sm:py-28">
        <div className="mx-auto max-w-(--container-width) px-6">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow">Elected leadership</p>
              <h2 className="section-title mt-4">Public service by design</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Township Supervisor", "Township Clerk", "Township Assessor", "Highway Commissioner", "Board of Trustees"].map((office) => (
                <article key={office} className="border border-(--line) bg-white p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-(--red)">Office</p>
                  <h3 className="mt-8 font-heading text-2xl uppercase text-(--navy)">{office}</h3>
                  <p className="mt-3 text-sm leading-6 text-(--ink-muted)">Official names and biographies can be added during the township content review.</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="bg-white py-20 text-center sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow justify-center before:hidden">Built for residents</p>
          <h2 className="mt-5 font-heading text-5xl font-medium uppercase text-(--navy) sm:text-6xl">Find the office you need</h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-(--ink-muted)">Explore department responsibilities, then contact the township office if you are not sure where to begin.</p>
          <Link href="/services" className="mt-8 inline-flex items-center gap-8 bg-(--red) px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-(--red-dark)">View departments <span>→</span></Link>
        </div>
      </section>
    </main>
  );
}
