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
      <header className="bg-(--navy) py-20 text-white sm:py-28">
        <div className="mx-auto max-w-(--container-width) px-6">
          <p className="eyebrow text-white/55 before:bg-(--red)">Township departments</p>
          <h1 className="mt-5 max-w-4xl font-heading text-6xl font-medium uppercase leading-[0.96] sm:text-8xl">Services for residents</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">A practical directory of township offices and the public services they provide.</p>
        </div>
      </header>
      <Section className="bg-white">
        <ServicesSection />
      </Section>
      <section className="bg-(--mist) py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow justify-center before:hidden">Not sure where to start?</p>
          <h2 className="mt-5 font-heading text-5xl font-medium uppercase text-(--navy)">Call the township office</h2>
          <a href="tel:8474644228" className="mt-6 inline-block font-heading text-3xl text-(--red)">847-464-4228</a>
        </div>
      </section>
    </main>
  );
}
