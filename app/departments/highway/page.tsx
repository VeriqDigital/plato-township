import {
  DepartmentAvailability,
  DepartmentNeeds,
  DepartmentPage,
  DepartmentSection,
} from "@/components/departments/DepartmentPage";
import { departmentMetadata } from "@/components/departments/departmentMetadata";
import { departmentProfiles } from "@/data/departments";

const department = departmentProfiles.highway;

export const metadata = departmentMetadata(department);

export default function HighwayDepartmentPage() {
  return (
    <DepartmentPage
      department={department}
      contactNote="Contact the Highway Department to confirm road jurisdiction and current guidance before making plans based on a maintenance request."
    >
      <DepartmentSection
        id="highway-overview"
        title="Department Overview"
        intro="This page connects residents with the Plato Township Highway Department for questions involving township roads, roadside conditions, and seasonal operations. Detailed jurisdiction maps, service schedules, and department procedures are not currently published in this project."
      />

      <DepartmentSection
        id="highway-resident-needs"
        title="Common Resident Needs"
        intro="Use the department contact information when you need to report or ask about one of the topics below. The Highway Department can confirm whether a location is within its jurisdiction."
        className="mt-12"
      >
        <DepartmentNeeds
          items={[
            {
              title: "Roadway Concerns",
              description:
                "Questions about conditions on a township road or an observed maintenance concern.",
            },
            {
              title: "Roadside and Right-of-Way Questions",
              description:
                "A contact point for questions involving a township roadside or right-of-way.",
            },
            {
              title: "Drainage Questions",
              description:
                "Questions about drainage conditions associated with a township roadway.",
            },
            {
              title: "Seasonal Operations",
              description:
                "Current information about weather-related or seasonal roadway work.",
            },
          ]}
        />
      </DepartmentSection>

      <DepartmentSection
        id="seasonal-maintenance"
        title="Road and Seasonal Maintenance"
        intro="Official maintenance advisories, schedules, and seasonal guidance will be posted here when verified township material is available."
        className="mt-12"
      >
        <DepartmentAvailability title="Current information">
          No maintenance schedule or active road notice is available in the
          township content currently supplied to this site. Contact the Highway
          Department for current information.
        </DepartmentAvailability>
      </DepartmentSection>

      <DepartmentSection
        id="highway-resources"
        title="Documents and Resources"
        intro="Confirmed Highway Department documents and links will be listed here without duplicating any separate department website."
        className="mt-12"
      >
        <DepartmentAvailability title="Resources not yet published">
          No verified Highway Department forms, documents, or external website
          address are currently available in the project.
        </DepartmentAvailability>
      </DepartmentSection>
    </DepartmentPage>
  );
}
