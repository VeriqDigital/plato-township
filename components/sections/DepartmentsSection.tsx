import Link from "next/link";
import { departments } from "@/data/departments";

const DepartmentsSection = ({ showIntro = true }: { showIntro?: boolean }) => {
  const DepartmentHeading = showIntro ? "h3" : "h2";

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
        {departments.map((department) => (
          <Link
            key={department.title}
            id={department.slug}
            href={department.href}
            className="grid gap-3 border-b border-(--line) py-5 transition hover:bg-(--mist) sm:grid-cols-[0.85fr_1.2fr_0.7fr_auto] sm:items-center sm:px-5"
          >
            <DepartmentHeading className="text-xl font-semibold text-(--navy)">
              {department.title}
            </DepartmentHeading>
            <p className="text-base leading-7 text-(--ink-muted)">
              {department.description}
            </p>
            <span className="text-sm leading-6 text-(--ink-muted)">
              <span className="block font-semibold text-(--navy)">
                {department.contactSummary.label}
              </span>
              {department.contactSummary.value}
            </span>
            <span className="text-sm font-semibold text-(--navy) underline decoration-(--line) underline-offset-4">
              View department
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DepartmentsSection;
