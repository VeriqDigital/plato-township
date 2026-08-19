import {
  DepartmentAvailability,
  DepartmentNeeds,
  DepartmentPage,
  DepartmentSection,
} from "@/components/departments/DepartmentPage";
import { departmentMetadata } from "@/components/departments/departmentMetadata";
import { departmentProfiles } from "@/data/departments";

const department = departmentProfiles.assessor;

export const metadata = departmentMetadata(department);

export default function AssessorPage() {
  return (
    <DepartmentPage
      department={department}
      contactNote="Contact the Assessor's office to confirm the correct record source, filing requirements, and current deadlines."
    >
      <DepartmentSection
        id="assessor-overview"
        title="Office Overview"
        intro="This page is the township starting point for property assessment questions and assessor resources. It provides the verified Assessor phone number and email address currently available in the project."
      />

      <DepartmentSection
        id="property-search"
        title="Property Search"
        intro="Property Search is an Assessor service, not a separate township department."
        className="mt-12 scroll-mt-28"
      >
        <DepartmentAvailability title="Verified search link needed">
          A confirmed external property-search address is not currently included
          in the project. Contact the Assessor&apos;s office for the correct
          resource until an official link is supplied.
        </DepartmentAvailability>
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
        title="Forms and External Resources"
        intro="Verified township, county, and other assessor-related resources will be listed here as they become available."
        className="mt-12"
      >
        <DepartmentAvailability title="Resources not yet published">
          The project does not currently contain confirmed exemption forms,
          assessment documents, or Kane County resource links.
        </DepartmentAvailability>
      </DepartmentSection>
    </DepartmentPage>
  );
}
