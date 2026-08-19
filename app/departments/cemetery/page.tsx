import {
  DepartmentPage,
  DepartmentPerson,
  DepartmentSection,
} from "@/components/departments/DepartmentPage";
import { departmentMetadata } from "@/components/departments/departmentMetadata";
import { cemeteryDistrict, departmentProfiles } from "@/data/departments";

const department = departmentProfiles.cemetery;

export const metadata = departmentMetadata(department);

export default function CemeteryDistrictPage() {
  return (
    <DepartmentPage
      department={department}
      contactNote="Direct Cemetery District contact details should be confirmed with the township. Use the township office contact for cemetery inquiries."
    >
      <DepartmentSection
        id="cemetery-overview"
        title="Cemetery District Overview"
        intro="The Plato Township Cemetery Board oversees three cemeteries in the township. The Board maintains the cemetery grounds, manages grave-lot sales, marks graves for burials, and coordinates with monument companies when grave markers are placed."
      />

      <DepartmentSection
        id="township-cemeteries"
        title="Township Cemeteries"
        intro="Published location descriptions for the three cemeteries overseen by the district."
        className="mt-12"
      >
        <div className="mt-6 border-t border-(--line)">
          {cemeteryDistrict.cemeteries.map((cemetery, index) => (
            <article
              key={cemetery.name}
              className="grid gap-3 border-b border-(--line) py-5 sm:grid-cols-[4rem_0.75fr_1.25fr] sm:items-center sm:px-5"
            >
              <span className="font-heading text-3xl font-medium text-(--red)" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-(--navy)">
                {cemetery.name}
              </h3>
              <p className="text-sm leading-7 text-(--ink-muted)">
                {cemetery.location}
              </p>
            </article>
          ))}
        </div>
      </DepartmentSection>

      <DepartmentSection
        id="cemetery-board"
        title="Cemetery Board"
        intro="The district's published board information identifies its president."
        className="mt-12"
      >
        <DepartmentPerson
          name={cemeteryDistrict.president}
          title="Cemetery Board President"
        />
      </DepartmentSection>

      <DepartmentSection
        id="cemetery-services"
        title="Services and Responsibilities"
        intro="The Cemetery Board's published responsibilities cover ongoing maintenance, grave-lot administration, and burial coordination."
        className="mt-12"
      >
        <ul className="mt-6 grid border-t border-(--line) sm:grid-cols-2">
          {cemeteryDistrict.responsibilities.map((responsibility, index) => (
            <li
              key={responsibility}
              className={`flex gap-3 border-b border-(--line) py-4 text-sm leading-7 text-(--ink-muted) sm:px-5 ${
                index % 2 === 0 ? "sm:border-r" : ""
              }`}
            >
              <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 bg-(--red)" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </DepartmentSection>

      <DepartmentSection
        id="grave-pricing"
        title="Grave Pricing"
        intro="The previous Plato Township website published the following grave-lot prices."
        className="mt-12"
      >
        <dl className="mt-6 grid border border-(--line) sm:grid-cols-2">
          {cemeteryDistrict.pricing.map((price, index) => (
            <div
              key={price.audience}
              className={`p-6 ${index === 0 ? "border-b border-(--line) sm:border-r sm:border-b-0" : ""}`}
            >
              <dt className="text-sm font-semibold text-(--ink-muted)">
                {price.audience}
              </dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-(--navy)">
                {price.amount}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm leading-6 text-(--ink-muted)">
          Pricing shown reflects information published on the previous Plato
          Township website and should be confirmed with the Cemetery District
          before purchase.
        </p>
      </DepartmentSection>

      <DepartmentSection
        id="cemetery-board-meetings"
        title="Cemetery Board Meetings"
        intro="The published schedule lists meetings on the third Monday of March, June, September, and December at 7:00 PM at the township hall."
        className="mt-12"
      >
        <dl className="mt-6 grid border border-(--line) sm:grid-cols-3">
          <div className="border-b border-(--line) p-5 sm:border-r sm:border-b-0">
            <dt className="text-sm font-semibold text-(--ink-muted)">Meeting day</dt>
            <dd className="mt-2 text-lg font-semibold text-(--navy)">{cemeteryDistrict.meetings.day}</dd>
          </div>
          <div className="border-b border-(--line) p-5 sm:border-r sm:border-b-0">
            <dt className="text-sm font-semibold text-(--ink-muted)">Months and time</dt>
            <dd className="mt-2 text-lg font-semibold text-(--navy)">
              {cemeteryDistrict.meetings.months.join(", ")} at {cemeteryDistrict.meetings.time}
            </dd>
          </div>
          <div className="p-5">
            <dt className="text-sm font-semibold text-(--ink-muted)">Location</dt>
            <dd className="mt-2 text-lg font-semibold text-(--navy)">{cemeteryDistrict.meetings.location}</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm leading-6 text-(--ink-muted)">
          Residents should confirm the current meeting schedule with the
          township office before attending.
        </p>
      </DepartmentSection>
    </DepartmentPage>
  );
}
