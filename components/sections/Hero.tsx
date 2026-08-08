import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const Hero = () => {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-(--navy)">
      <Image
        src="/plato-township-hero.png"
        alt="A country road crossing farmland near a red barn at sunrise"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,19,38,.94)_0%,rgba(5,19,38,.78)_34%,rgba(5,19,38,.20)_72%,rgba(5,19,38,.08)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-linear-to-t from-(--navy)/70 to-transparent" />

      <Container>
        <div className="flex min-h-[calc(100svh-5rem)] max-w-3xl flex-col justify-center pb-32 pt-24 text-white sm:pb-40">
          <p className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-white/68">
            <span className="h-px w-10 bg-(--red)" />
            Plato Township
          </p>
          <h1 className="font-heading text-6xl font-medium uppercase leading-[0.92] tracking-[-0.025em] sm:text-7xl lg:text-[6.9rem]">
            Welcome to
            <span className="block text-white/72">Plato Township</span>
          </h1>
          <p className="mt-7 text-base font-medium tracking-[0.08em] text-white/78 sm:text-lg">
            Plato Township <span className="mx-2 text-(--red)">|</span> Kane County, Illinois
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/68 sm:text-lg">
            Township news, meeting information, public services, and community
            resources—organized for the people who call Plato Township home.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#postings"
              className="inline-flex items-center gap-8 bg-(--red) px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] transition hover:bg-(--red-dark)"
            >
              Latest updates <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="#departments"
              className="inline-flex items-center gap-8 border border-white/40 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-sm transition hover:bg-white hover:text-(--navy)"
            >
              Township services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 border-t border-white/18 bg-(--navy)/80 text-white backdrop-blur-md">
        <Container>
          <div className="grid sm:grid-cols-3">
            {[
              ["Township Office", siteConfig.contact.streetAddress],
              ["Need assistance?", `Call ${siteConfig.contact.supervisorPhone}`],
              ["Quick access", "Meetings & public notices"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`py-5 sm:px-6 ${index ? "border-t border-white/12 sm:border-l sm:border-t-0" : ""}`}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/46">
                  {label}
                </p>
                <p className="mt-1 text-sm font-semibold text-white/88">{value}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
