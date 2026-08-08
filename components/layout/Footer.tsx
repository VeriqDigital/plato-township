import Link from "next/link";
import { footerLinks, siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-[#07172b] text-white">
      <div className="mx-auto max-w-(--container-width) px-6 py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/14 pb-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <span className="relative grid size-12 place-items-center border border-white/35 font-heading text-2xl">
                P
                <span className="absolute -right-1 -top-1 size-2.5 bg-(--red)" />
              </span>
              <span>
                <span className="block font-heading text-2xl uppercase tracking-[0.07em]">{siteConfig.name}</span>
                <span className="mt-1 block text-[9px] uppercase tracking-[0.24em] text-white/45">Kane County, Illinois</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/48">
              Local information, public services, and community resources for
              the residents of Plato Township.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/38">Explore</p>
              <div className="mt-5 grid gap-3">
                {footerLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="text-sm text-white/62 transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/38">Township office</p>
              <p className="mt-5 text-sm leading-6 text-white/62">{siteConfig.contact.address}</p>
              <a href="tel:8474644228" className="mt-4 block font-heading text-2xl text-white">847-464-4228</a>
              <p className="mt-3 text-xs text-white/38">Please call ahead before visiting.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {siteConfig.name}. Demo website.</p>
          <p>Not an official source for township notices.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
