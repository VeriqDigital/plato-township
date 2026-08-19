import {
  DepartmentAvailability,
  DepartmentLinks,
  DepartmentNeeds,
  DepartmentPage,
  DepartmentSection,
} from "@/components/departments/DepartmentPage";
import { departmentMetadata } from "@/components/departments/departmentMetadata";
import { departmentProfiles } from "@/data/departments";

const department = departmentProfiles.clerk;

export const metadata = departmentMetadata(department);

export default function TownshipClerkPage() {
  return (
    <DepartmentPage
      department={department}
      contactNote="The project does not currently include a verified Clerk email address or office hours."
    >
      <DepartmentSection
        id="clerk-overview"
        title="Office Overview"
        intro="The Clerk page provides a clear route to published township meeting records and a township contact point for record, notice, form, and election-related questions. Specific office procedures and responsibilities will be added only when confirmed township content is available."
      />

      <DepartmentSection
        id="clerk-records"
        title="Township and Meeting Records"
        intro="The website currently publishes the board meeting schedule and an archive of approved meeting-minute documents."
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
        id="clerk-information"
        title="Clerk Information"
        intro="Use the township office contact for questions about the categories below. Published requirements, deadlines, and procedures have not been inferred."
        className="mt-12"
      >
        <DepartmentNeeds
          items={[
            {
              title: "Township Records",
              description:
                "Questions about township records that are not already available in the meeting-minute archive.",
            },
            {
              title: "Notices",
              description:
                "Questions about township notices and where current notices are published.",
            },
            {
              title: "Election Information",
              description:
                "A starting point for identifying the appropriate source for township election-related information.",
            },
            {
              title: "Forms and Documents",
              description:
                "Questions about the availability of Clerk-related forms or documents.",
            },
          ]}
        />
        <DepartmentAvailability title="Additional information">
          Verified Clerk notices, election guidance, forms, and office-specific
          contact details have not yet been supplied for publication.
        </DepartmentAvailability>
      </DepartmentSection>
    </DepartmentPage>
  );
}
