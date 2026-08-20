import { siteConfig } from "@/config/site";

type LocationSectionProps = {
  locationOnly?: boolean;
};

const LocationSection = ({ locationOnly = false }: LocationSectionProps) => {
  const phoneDirectory = [
    ["Township Office", siteConfig.contact.officePhone],
  ];

  return (
    <div className="grid overflow-hidden bg-white shadow-[0_24px_70px_rgba(14,35,62,0.12)] lg:grid-cols-[0.92fr_1.08fr]">
      <div className="bg-(--navy) p-8 text-white sm:p-10 lg:p-12">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {locationOnly ? "Visit Us" : "Contact Information"}
        </h2>
        {!locationOnly && (
          <>
            <p className="mt-4 max-w-md text-base leading-7 text-white/72">
              Contact the appropriate township office for assistance, public records,
              property questions, or road district information.
            </p>

            <div id="directory" className="mt-7 border-t border-white/18">
              {phoneDirectory.map(([label, phone]) => (
                <a
                  key={label}
                  href={`tel:${phone.replaceAll("-", "")}`}
                  className="flex min-h-14 flex-col items-start justify-center gap-1 border-b border-white/14 py-3 text-base transition hover:text-(--red-light) sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-4"
                >
                  <span className="text-white/70">{label}</span>
                  <span className="font-semibold">{phone}</span>
                </a>
              ))}
            </div>
          </>
        )}

        <div className={locationOnly ? "mt-7 border-t border-white/18 pt-6" : "mt-7"}>
          <p className="text-sm font-semibold text-white/65">
            {locationOnly ? "Plato Township Hall / Township Office" : "Township office"}
          </p>
          <p className="mt-2 max-w-xs text-base leading-7">{siteConfig.contact.address}</p>
          <a
            href={siteConfig.contact.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center border border-white/30 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-(--navy)"
          >
            Get directions
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <div id="directions" className="min-h-110 bg-(--mist)">
        <iframe
          src={siteConfig.contact.mapEmbedUrl}
          title={`${siteConfig.name} office map`}
          width="100%"
          height="100%"
          loading="lazy"
          className="min-h-110 border-0 grayscale"
        />
      </div>
    </div>
  );
};

export default LocationSection;
