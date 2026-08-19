import {
  DepartmentAvailability,
  DepartmentNeeds,
  DepartmentPage,
  DepartmentSection,
} from "@/components/departments/DepartmentPage";
import { departmentMetadata } from "@/components/departments/departmentMetadata";
import { departmentProfiles } from "@/data/departments";

const department = departmentProfiles.cemetery;

export const metadata = departmentMetadata(department);

export default function CemeteryDistrictPage() {
  return (
    <DepartmentPage
      department={department}
      contactNote="The township office is the only verified contact point currently available in the project for cemetery inquiries."
    >
      <DepartmentSection
        id="cemetery-overview"
        title="District Overview"
        intro="This page is reserved for confirmed Plato Township Cemetery District information. The source material currently available does not identify cemetery locations, district contacts, fees, availability, or operating procedures."
      />

      <DepartmentSection
        id="cemetery-inquiries"
        title="Records and Inquiries"
        intro="Residents may contact the township office with a cemetery-related question while the website's district information is being assembled."
        className="mt-12"
      >
        <DepartmentNeeds
          items={[
            {
              title: "Cemetery Records",
              description:
                "Ask the township office where a specific cemetery record inquiry should be directed.",
            },
            {
              title: "General Inquiries",
              description:
                "Request the appropriate contact for a cemetery or district question.",
            },
            {
              title: "Rules and Documents",
              description:
                "Ask whether current district rules or documents are available.",
            },
            {
              title: "Burial Resources",
              description:
                "Request direction to an appropriate source for confirmed burial information.",
            },
          ]}
        />
      </DepartmentSection>

      <DepartmentSection
        id="cemetery-resources"
        title="Rules, Documents, and Resources"
        intro="Only confirmed Cemetery District material will be published in this section."
        className="mt-12"
      >
        <DepartmentAvailability title="Additional information will be added here">
          No verified cemetery rules, forms, records links, or burial resources
          are currently available in the project.
        </DepartmentAvailability>
      </DepartmentSection>
    </DepartmentPage>
  );
}
