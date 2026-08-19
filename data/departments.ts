import { siteConfig } from "@/config/site";

export type DepartmentSlug =
  | "supervisor"
  | "highway"
  | "clerk"
  | "assessor"
  | "cemetery"
  | "board-of-trustees";

export type DepartmentContact = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export type DepartmentProfile = {
  slug: DepartmentSlug;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  href: `/departments/${string}`;
  contactSummary: {
    label: string;
    value: string;
    href: string;
  };
  contactHeading: string;
  contacts: DepartmentContact[];
};

const phoneHref = (phone: string) => `tel:${phone.replaceAll("-", "")}`;

export const departmentProfiles = {
  supervisor: {
    slug: "supervisor",
    title: "Township Supervisor",
    shortTitle: "Supervisor",
    description:
      "Township administration, financial oversight, general assistance, and resident support.",
    intro:
      "Contact information and published responsibilities for the Plato Township Supervisor.",
    href: "/departments/supervisor",
    contactSummary: {
      label: "Township office",
      value: siteConfig.contact.officePhone,
      href: phoneHref(siteConfig.contact.officePhone),
    },
    contactHeading: "Supervisor's Office",
    contacts: [
      {
        label: "Township office",
        value: siteConfig.contact.officePhone,
        href: phoneHref(siteConfig.contact.officePhone),
      },
      {
        label: "Office email",
        value: siteConfig.contact.supervisorOfficeEmail,
        href: `mailto:${siteConfig.contact.supervisorOfficeEmail}`,
      },
    ],
  },
  highway: {
    slug: "highway",
    title: "Highway Department",
    shortTitle: "Highway Department",
    description:
      "Township road maintenance, right-of-way information, seasonal operations, and roadway concerns.",
    intro:
      "A starting point for Plato Township road, roadside, and seasonal maintenance questions.",
    href: "/departments/highway",
    contactSummary: {
      label: "Highway phone",
      value: siteConfig.contact.highwayPhone,
      href: phoneHref(siteConfig.contact.highwayPhone),
    },
    contactHeading: "Highway Department",
    contacts: [
      {
        label: "Phone",
        value: siteConfig.contact.highwayPhone,
        href: phoneHref(siteConfig.contact.highwayPhone),
      },
      {
        label: "Email",
        value: siteConfig.contact.highwayEmail,
        href: `mailto:${siteConfig.contact.highwayEmail}`,
      },
    ],
  },
  clerk: {
    slug: "clerk",
    title: "Township Clerk",
    shortTitle: "Township Clerk",
    description:
      "Township records, meeting materials, notices, and election-related information.",
    intro:
      "Find published meeting records and contact the township office with Clerk-related questions.",
    href: "/departments/clerk",
    contactSummary: {
      label: "Township office",
      value: siteConfig.contact.officePhone,
      href: phoneHref(siteConfig.contact.officePhone),
    },
    contactHeading: "Township Office",
    contacts: [
      {
        label: "Phone",
        value: siteConfig.contact.officePhone,
        href: phoneHref(siteConfig.contact.officePhone),
      },
      {
        label: "Address",
        value: siteConfig.contact.address,
        href: siteConfig.contact.mapUrl,
        external: true,
      },
    ],
  },
  assessor: {
    slug: "assessor",
    title: "Assessor",
    shortTitle: "Assessor",
    description:
      "Property assessment information, property search access, exemptions, records, and taxpayer resources.",
    intro:
      "Contact the Assessor's office and find the current status of property assessment resources.",
    href: "/departments/assessor",
    contactSummary: {
      label: "Assessor phone",
      value: siteConfig.contact.assessorPhone,
      href: phoneHref(siteConfig.contact.assessorPhone),
    },
    contactHeading: "Assessor's Office",
    contacts: [
      {
        label: "Phone",
        value: siteConfig.contact.assessorPhone,
        href: phoneHref(siteConfig.contact.assessorPhone),
      },
      {
        label: "Email",
        value: siteConfig.contact.assessorEmail,
        href: `mailto:${siteConfig.contact.assessorEmail}`,
      },
    ],
  },
  cemetery: {
    slug: "cemetery",
    title: "Cemetery District",
    shortTitle: "Cemetery District",
    description:
      "A township contact point for cemetery records, inquiries, and published district information.",
    intro:
      "Contact the township office for cemetery inquiries while additional district information is prepared for publication.",
    href: "/departments/cemetery",
    contactSummary: {
      label: "Township office",
      value: siteConfig.contact.officePhone,
      href: phoneHref(siteConfig.contact.officePhone),
    },
    contactHeading: "Township Office",
    contacts: [
      {
        label: "Phone",
        value: siteConfig.contact.officePhone,
        href: phoneHref(siteConfig.contact.officePhone),
      },
      {
        label: "Address",
        value: siteConfig.contact.address,
        href: siteConfig.contact.mapUrl,
        external: true,
      },
    ],
  },
  "board-of-trustees": {
    slug: "board-of-trustees",
    title: "Board of Trustees",
    shortTitle: "Board of Trustees",
    description:
      "Township governance, public meetings, meeting records, and community oversight.",
    intro:
      "Find Plato Township board meeting information, published records, and the township contact point.",
    href: "/departments/board-of-trustees",
    contactSummary: {
      label: "Township office",
      value: siteConfig.contact.officePhone,
      href: phoneHref(siteConfig.contact.officePhone),
    },
    contactHeading: "Township Office",
    contacts: [
      {
        label: "Phone",
        value: siteConfig.contact.officePhone,
        href: phoneHref(siteConfig.contact.officePhone),
      },
      {
        label: "Address",
        value: siteConfig.contact.address,
        href: siteConfig.contact.mapUrl,
        external: true,
      },
    ],
  },
} satisfies Record<DepartmentSlug, DepartmentProfile>;

export const departments = [
  departmentProfiles.supervisor,
  departmentProfiles.highway,
  departmentProfiles.clerk,
  departmentProfiles.assessor,
  departmentProfiles.cemetery,
  departmentProfiles["board-of-trustees"],
] as const;
