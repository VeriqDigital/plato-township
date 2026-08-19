import {
  DepartmentAvailability,
  DepartmentLinks,
  DepartmentPage,
  DepartmentSection,
} from "@/components/departments/DepartmentPage";
import { departmentMetadata } from "@/components/departments/departmentMetadata";
import { boardOfTrustees, departmentProfiles } from "@/data/departments";

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
        intro={boardOfTrustees.overview}
      />

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
                "View the published meeting schedule, meeting time, and location.",
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
        id="trustee-information"
        title="Trustee Information"
        className="mt-12"
      >
        <DepartmentAvailability title="Roster confirmation needed">
          Trustee names and term information will be posted after the current
          roster is confirmed by the township.
        </DepartmentAvailability>
      </DepartmentSection>
    </DepartmentPage>
  );
}
