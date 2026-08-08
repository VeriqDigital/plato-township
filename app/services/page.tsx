import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Township Departments",
  description: "Find services and department information for Plato Township.",
};

export default function ServicesPage() {
  return (
    <main>
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <h1 className="max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">Township Departments</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">A practical directory of township offices and the public services they provide.</p>
        </div>
      </header>
      <Section className="bg-white">
        <ServicesSection showIntro={false} />
      </Section>
      <section className="bg-(--mist) py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-(--navy)">Not sure where to start?</h2>
          <p className="mt-3 text-base text-(--ink-muted)">Call the township office and we will help direct your question.</p>
          <a href="tel:8474644228" className="mt-5 inline-block text-2xl font-semibold text-(--red)">847-464-4228</a>
        </div>
      </section>
    </main>
  );
}
