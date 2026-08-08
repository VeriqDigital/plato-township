import Link from "next/link";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="eyebrow">Township departments</p>
          <h2 className="section-title mt-4">Services close to home</h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-(--ink-muted) lg:justify-self-end">
          Plato Township connects residents with local administration, property
          assessment, road services, public records, and elected leadership.
          Start with the department that best matches your question.
        </p>
      </div>

      <div className="mt-14 border-t border-(--line)">
        {services.map((service) => (
          <Link
            key={service.title}
            id={service.id}
            href={`/services#${service.id}`}
            className="group grid gap-4 border-b border-(--line) py-7 transition hover:bg-(--mist) sm:grid-cols-[5rem_1fr_1.25fr_3rem] sm:items-center sm:px-5"
          >
            <span className="font-heading text-lg text-(--red)">{service.number}</span>
            <h3 className="font-heading text-2xl font-medium uppercase text-(--navy) sm:text-3xl">
              {service.title}
            </h3>
            <p className="text-sm leading-6 text-(--ink-muted)">{service.description}</p>
            <span
              aria-hidden="true"
              className="text-2xl text-(--navy) transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
