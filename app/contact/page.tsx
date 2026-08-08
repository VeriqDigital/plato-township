import type { Metadata } from "next";
import LocationSection from "@/components/sections/LocationSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Plato Township offices in Elgin, Illinois.",
};

export default function ContactPage() {
  return (
    <main className="bg-(--warm-white)">
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <h1 className="max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">Contact Plato Township</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">Phone numbers, office location, and directions for Plato Township residents.</p>
        </div>
      </header>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <LocationSection />
        </div>
      </section>
    </main>
  );
}
