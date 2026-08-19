import {
  DepartmentAvailability,
  DepartmentLinks,
  DepartmentPage,
  DepartmentSection,
} from "@/components/departments/DepartmentPage";
import { departmentMetadata } from "@/components/departments/departmentMetadata";
import { departmentProfiles } from "@/data/departments";

const department = departmentProfiles["board-of-trustees"];

export const metadata = departmentMetadata(department);

export default function BoardOfTrusteesPage() {
  return (
    <DepartmentPage
      department={department}
      contactNote="Contact the township office with board-related questions that are not answered by the published meeting pages."
    >
      <DepartmentSection
        id="trustees-overview"
        title="Board Overview"
        intro="This page connects residents with Plato Township board meeting information and published meeting records. Verified descriptions of board responsibilities will be added when official township content is supplied."
      />

      <DepartmentSection
        id="trustee-information"
        title="Trustee Information"
        intro="The project does not currently include a verified roster of trustees or term information."
        className="mt-12"
      >
        <DepartmentAvailability title="Roster pending confirmed information">
          Trustee names, titles, biographies, and terms will be published here
          after they are confirmed by the township.
        </DepartmentAvailability>
      </DepartmentSection>

      <DepartmentSection
        id="board-meetings-records"
        title="Meetings and Records"
        intro="Use the published pages below for the current meeting schedule and available meeting-minute PDFs."
        className="mt-12"
      >
        <DepartmentLinks
          links={[
            {
              title: "Board Meetings",
              description:
                "View the published 2026 meeting schedule, meeting time, and location.",
              href: "/board-meetings",
            },
            {
              title: "Board Minutes",
              description:
                "Browse the meeting-minute documents currently published by year.",
              href: "/board-minutes",
            },
          ]}
        />
      </DepartmentSection>

      <DepartmentSection
        id="board-governance"
        title="Governance and Documents"
        intro="Confirmed governance information and board documents beyond the current meeting archive will be added here when available."
        className="mt-12"
      >
        <DepartmentAvailability title="Additional information">
          No verified board roster, term details, governance summary, or
          additional board document collection is currently included in the
          project.
        </DepartmentAvailability>
      </DepartmentSection>
    </DepartmentPage>
  );
}
