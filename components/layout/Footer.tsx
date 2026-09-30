import Link from "next/link";
import Image from "next/image";
import { footerLinks, siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-[#07172b] text-white">
      <div className="mx-auto max-w-(--container-width) px-6 py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/14 pb-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Link
              href="/"
              aria-label="Plato Township home"
              className="inline-flex max-w-full bg-(--warm-white) px-4 py-3"
            >
              <Image
                src="/Logo final 2026.png"
                alt=""
                width={975}
                height={406}
                sizes="240px"
                className="h-auto w-60 max-w-full"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/48">
              Local information, public services, and community resources for
              the residents of Plato Township.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/38">
                Explore
              </p>
              <div className="mt-5 grid gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/62 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/38">
                Township office
              </p>
              <p className="mt-5 text-sm leading-6 text-white/62">
                {siteConfig.contact.address}
              </p>
              <a
                href={`tel:${siteConfig.contact.officePhone.replaceAll("-", "")}`}
                className="mt-4 block font-heading text-2xl text-white"
              >
                {siteConfig.contact.officePhone}
              </a>
              <p className="mt-3 text-xs text-white/38">
                Please call ahead before visiting.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {siteConfig.name}.</p>
          <div className="flex flex-col gap-2 sm:items-end">
            <p className="font-normal normal-case tracking-normal text-white/30">
              Website designed &amp; developed by{" "}
              <a
                href="https://www.veriqdigital.com/"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-white/20 underline-offset-4 transition hover:text-white/60"
              >
                Veriq
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
