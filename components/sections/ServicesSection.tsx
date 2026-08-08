import Link from "next/link";
import { services } from "@/data/services";

const ServicesSection = ({ showIntro = true }: { showIntro?: boolean }) => {
  return (
    <div>
      {showIntro && (
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <h2 className="section-title">Township Departments</h2>
          <p className="max-w-2xl text-base leading-7 text-(--ink-muted) lg:justify-self-end">
            Plato Township connects residents with local administration, property
            assessment, road services, public records, and elected leadership.
            Start with the department that best matches your question.
          </p>
        </div>
      )}

      <div className={`${showIntro ? "mt-9" : ""} border-t border-(--line)`}>
        {services.map((service) => (
          <Link
            key={service.title}
            id={service.id}
            href={`/services#${service.id}`}
            className="grid gap-3 border-b border-(--line) py-5 transition hover:bg-(--mist) sm:grid-cols-[1fr_1.2fr_auto] sm:items-center sm:px-5"
          >
            <h3 className="text-xl font-semibold text-(--navy)">
              {service.title}
            </h3>
            <p className="text-base leading-7 text-(--ink-muted)">{service.description}</p>
            <span className="text-sm font-semibold text-(--navy) underline decoration-(--line) underline-offset-4">View department</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
