import Link from "next/link";
import { siteConfig } from "@/config/site";

const LocationSection = () => {
  const phoneDirectory = [
    ["Township Supervisor", siteConfig.contact.supervisorPhone],
    ["Road Commissioner", siteConfig.contact.roadPhone],
    ["Township Assessor", siteConfig.contact.assessorPhone],
  ];

  return (
    <div className="grid overflow-hidden bg-white shadow-[0_24px_70px_rgba(14,35,62,0.12)] lg:grid-cols-[0.92fr_1.08fr]">
      <div className="bg-(--navy) p-8 text-white sm:p-12 lg:p-14">
        <p className="eyebrow text-white/55 before:bg-(--red)">Contact information</p>
        <h2 className="mt-5 font-heading text-5xl font-medium uppercase leading-none sm:text-6xl">
          We’re here to help
        </h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
          Contact the appropriate township office for assistance, public records,
          property questions, or road district information.
        </p>

        <div id="directory" className="mt-10 border-t border-white/18">
          {phoneDirectory.map(([label, phone]) => (
            <a
              key={label}
              href={`tel:${phone.replaceAll("-", "")}`}
              className="flex items-center justify-between gap-4 border-b border-white/14 py-4 text-sm transition hover:text-(--red-light)"
            >
              <span className="text-white/55">{label}</span>
              <span className="font-semibold">{phone}</span>
            </a>
          ))}
        </div>

        <div className="mt-9">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">Township office</p>
          <p className="mt-2 max-w-xs text-base leading-7">{siteConfig.contact.address}</p>
          <Link
            href={siteConfig.contact.mapUrl}
            target="_blank"
            className="mt-6 inline-flex items-center gap-6 border border-white/30 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] transition hover:bg-white hover:text-(--navy)"
          >
            Get directions <span>↗</span>
          </Link>
        </div>
      </div>

      <div id="directions" className="min-h-120 bg-(--mist)">
        <iframe
          src={siteConfig.contact.mapEmbedUrl}
          title={`${siteConfig.name} office map`}
          width="100%"
          height="100%"
          loading="lazy"
          className="min-h-120 border-0 grayscale"
        />
      </div>
    </div>
  );
};

export default LocationSection;
