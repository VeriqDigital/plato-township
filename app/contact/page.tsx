import type { Metadata } from "next";
import LocationSection from "@/components/sections/LocationSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Plato Township offices in Elgin, Illinois.",
};

export default function ContactPage() {
  return (
    <main className="bg-(--warm-white)">
      <header className="bg-(--navy) py-20 text-white sm:py-28">
        <div className="mx-auto max-w-(--container-width) px-6">
          <p className="eyebrow text-white/55 before:bg-(--red)">Contact</p>
          <h1 className="mt-5 max-w-4xl font-heading text-6xl font-medium uppercase leading-[0.96] sm:text-8xl">Connect with your township</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">Phone numbers, office location, and directions for Plato Township residents.</p>
        </div>
      </header>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-(--container-width) px-6">
          <LocationSection />
        </div>
      </section>
    </main>
  );
}
