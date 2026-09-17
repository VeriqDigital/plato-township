import {
  DepartmentAvailability,
  DepartmentLinks,
  DepartmentNeeds,
  DepartmentPage,
  DepartmentPerson,
  DepartmentSection,
} from "@/components/departments/DepartmentPage";
import { departmentMetadata } from "@/components/departments/departmentMetadata";
import { assessorDepartment, departmentProfiles } from "@/data/departments";

const department = departmentProfiles.assessor;

export const metadata = departmentMetadata(department);

export default function AssessorPage() {
  return (
    <DepartmentPage
      department={department}
      contactNote="Office visits are by appointment only. Contact the Assessor's office before visiting and to confirm current filing requirements or deadlines."
    >
      <DepartmentSection
        id="assessor-overview"
        title="Assessor Office"
        intro="The Plato Township Assessor's Office is located at the township hall on Rippburger Road."
      >
        <DepartmentPerson
          name={assessorDepartment.assessor}
          title="Township Assessor"
        />
      </DepartmentSection>

      <DepartmentSection
        id="assessor-office-information"
        title="Office Information"
        intro={`${assessorDepartment.hours}. ${assessorDepartment.appointmentNote}.`}
        className="mt-12"
      >
        <dl className="mt-6 grid border-t border-l border-(--line) sm:grid-cols-2">
          {department.contacts.map((contact) => (
            <div
              key={contact.label}
              className="border-r border-b border-(--line) p-5"
            >
              <dt className="text-sm font-semibold text-(--navy)">
                {contact.label}
              </dt>
              <dd className="mt-2 min-w-0 break-words text-sm leading-6 text-(--ink-muted)">
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noreferrer" : undefined}
                    className="inline-flex min-h-11 items-center underline decoration-(--line) underline-offset-4 hover:text-(--red)"
                  >
                    {contact.value}
                    {contact.external && (
                      <>
                        <span aria-hidden="true" className="ml-1 text-(--red)">
                          ↗
                        </span>
                        <span className="sr-only"> (opens in a new tab)</span>
                      </>
                    )}
                  </a>
                ) : (
                  contact.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </DepartmentSection>

      <DepartmentSection
        id="deputy-assessor"
        title="Deputy Assessor"
        intro="Deputy Assessor information published by the township."
        className="mt-12"
      >
        <DepartmentPerson
          name={assessorDepartment.deputyAssessor}
          title="Deputy Assessor"
          image={assessorDepartment.deputyPortrait}
        />
      </DepartmentSection>

      <DepartmentSection
        id="property-search"
        title="Property Search"
        intro="The township's online property-search page provides the Assessor's information disclaimer and access to the external assessment database."
        className="mt-12 scroll-mt-28"
      >
        <DepartmentLinks
          links={[
            {
              title: "Open Online Property Search",
              description:
                "Review the township disclaimer before continuing to the property database.",
              href: assessorDepartment.propertySearchPath,
            },
          ]}
        />
      </DepartmentSection>

      <DepartmentSection
        id="assessment-information"
        title="Assessment Information"
        intro="The Assessor's office can direct residents to the appropriate information for the property and question involved."
        className="mt-12"
      >
        <DepartmentNeeds
          items={[
            {
              title: "Assessment Questions",
              description:
                "Questions about assessment information associated with a property.",
            },
            {
              title: "Property Records",
              description:
                "Help identifying the appropriate source for available property records.",
            },
            {
              title: "Exemption Resources",
              description:
                "Questions about where to find current exemption information and requirements.",
            },
            {
              title: "Forms and Documents",
              description:
                "Questions about current assessor forms and supporting documents.",
            },
          ]}
        />
      </DepartmentSection>

      <DepartmentSection
        id="assessor-resources"
        title="Forms and Assessment Resources"
        intro="The Assessor's office can confirm which forms, exemptions, or county resources apply to a specific property question."
        className="mt-12"
      >
        <DepartmentAvailability title="Additional resources">
          Direct links to current exemption forms and county assessment
          resources will be posted when available. Contact the Assessor&apos;s
          office for current materials.
        </DepartmentAvailability>
      </DepartmentSection>
    </DepartmentPage>
  );
}
