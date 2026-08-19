import {
  DepartmentLinks,
  DepartmentPage,
  DepartmentPerson,
  DepartmentSection,
} from "@/components/departments/DepartmentPage";
import { departmentMetadata } from "@/components/departments/departmentMetadata";
import { clerkDepartment, departmentProfiles } from "@/data/departments";

const department = departmentProfiles.clerk;

export const metadata = departmentMetadata(department);

export default function TownshipClerkPage() {
  return (
    <DepartmentPage
      department={department}
      contactNote="Direct Clerk contact information and office hours have not been published. Contact the township office for assistance."
    >
      <DepartmentSection
        id="township-clerk"
        title="Township Clerk"
        intro="The Township Clerk serves as Clerk for the Township Board and keeps the Township's official meeting records."
      >
        <DepartmentPerson name={clerkDepartment.clerk} title="Town Clerk" />
      </DepartmentSection>

      <DepartmentSection
        id="clerk-responsibilities"
        title="Office Responsibilities"
        intro="The Clerk's published office responsibilities include the following."
        className="mt-12"
      >
        <ul className="mt-6 border-t border-(--line)">
          {clerkDepartment.responsibilities.slice(0, 4).map((responsibility) => (
            <li
              key={responsibility}
              className="flex gap-4 border-b border-(--line) py-4 text-base leading-7 text-(--ink-muted) sm:px-5"
            >
              <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 bg-(--red)" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </DepartmentSection>

      <DepartmentSection
        id="clerk-records"
        title="Township Records"
        intro="The Clerk keeps records of Township proceedings and minutes of Town meetings and Township Board meetings. Residents can access the published meeting schedule and available minutes below."
        className="mt-12"
      >
        <DepartmentLinks
          links={[
            {
              title: "Board Meetings",
              description:
                "View the published meeting schedule and township hall location.",
              href: "/board-meetings",
            },
            {
              title: "Board Minutes",
              description:
                "Browse the meeting-minute PDFs currently available on this site.",
              href: "/board-minutes",
            },
          ]}
        />
      </DepartmentSection>

      <DepartmentSection
        id="elections-petitions"
        title="Elections and Petitions"
        intro="The Township Clerk serves as the local election authority and accepts petitions concerning local elections or referendums involving the township."
        className="mt-12"
      >
        <p className="mt-5 border-l-4 border-(--red) bg-(--mist) p-5 text-sm leading-7 text-(--ink-muted) sm:p-6">
          Election deadlines, filing instructions, petition requirements, and
          forms are not provided on this page. Contact the township office for
          current information and the appropriate filing guidance.
        </p>
      </DepartmentSection>
    </DepartmentPage>
  );
}
