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
  href?: string;
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
      "Road District jurisdiction, road maintenance, snow operations, and roadway contacts.",
    intro:
      "Road jurisdiction, maintenance information, and contacts for the Plato Township Road District.",
    href: "/departments/highway",
    contactSummary: {
      label: "Highway phone",
      value: siteConfig.contact.highwayPhone,
      href: phoneHref(siteConfig.contact.highwayPhone),
    },
    contactHeading: "Road Commissioner's Office",
    contacts: [
      {
        label: "Address",
        value: siteConfig.contact.address,
        href: siteConfig.contact.mapUrl,
        external: true,
      },
      {
        label: "Phone",
        value: siteConfig.contact.highwayPhone,
        href: phoneHref(siteConfig.contact.highwayPhone),
      },
      {
        label: "Fax",
        value: siteConfig.contact.highwayFax,
        href: `tel:${siteConfig.contact.highwayFax.replaceAll("-", "")}`,
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
      "Township Board records, meeting minutes, and local election petitions.",
    intro:
      "Meet the Township Clerk and find board records, meeting minutes, and election-related information.",
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
      "Assessor office information, property search, assessment questions, and taxpayer resources.",
    intro:
      "Office information for the Township Assessor and Deputy Assessor, with access to property search resources.",
    href: "/departments/assessor",
    contactSummary: {
      label: "Assessor phone",
      value: siteConfig.contact.assessorPhone,
      href: phoneHref(siteConfig.contact.assessorPhone),
    },
    contactHeading: "Assessor's Office",
    contacts: [
      {
        label: "Address",
        value: siteConfig.contact.address,
        href: siteConfig.contact.mapUrl,
        external: true,
      },
      {
        label: "Phone",
        value: siteConfig.contact.assessorPhone,
        href: phoneHref(siteConfig.contact.assessorPhone),
      },
      {
        label: "Fax",
        value: siteConfig.contact.assessorFax,
        href: `tel:${siteConfig.contact.assessorFax.replaceAll("-", "")}`,
      },
      {
        label: "Email",
        value: siteConfig.contact.assessorEmail,
        href: `mailto:${siteConfig.contact.assessorEmail}`,
      },
      {
        label: "Hours",
        value: "Monday–Thursday, 9:00 AM–2:00 PM",
      },
      {
        label: "Visits",
        value: "By appointment only",
      },
    ],
  },
  cemetery: {
    slug: "cemetery",
    title: "Cemetery District",
    shortTitle: "Cemetery District",
    description:
      "Three township cemeteries, grave lots, maintenance, and Cemetery Board information.",
    intro:
      "Locations, services, pricing, and meeting information for the Plato Township Cemetery District.",
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

export const highwayDepartment = {
  commissioner: "Larry Trainor",
  office: "Plato Township Highway District",
  website: "https://www.platotownship.com/content/highway/",
  roadDistrictRoads: [
    "Bahr Road",
    "Brier Hill Road",
    "Crawford Road",
    "Ellithorpe Road",
    "Kendall Road",
    "Marshall Road",
    "McDonald Road",
    "Muirhead Road",
    "Nesler Road",
    "Pease Road",
    "Rohrson Road",
    "Switzer Road",
    "Tower Road",
  ],
  subdivisions: [
    "Chippewa",
    "Hidden Lakes",
    "Oak Ridge",
    "Oak Tree",
    "Oak Bluff",
    "Plato Ridge",
    "Bowes Bend",
    "Highland Meadows",
    "Tamara Heights",
    "Plank Road Estates",
    "Wildwood West",
    "Montague Forest",
    "Russinwoods",
    "Stonecrest I and II",
    "Saddlebrook I, II, and III",
    "Sturbridge",
    "Silent Meadows",
    "Catatoga 3",
  ],
  annexationNote:
    "The township road listing notes that Brierwood, Woodbridge, Woodlands, Cranston Meadows, and Arlington Estates were annexed by the Village of Campton Hills on April 17, 2007, along with Lenz Road and portions of Crawford Road and McDonald Road.",
  county: {
    roads: [
      "Bowes Road",
      "Corron Road",
      "Dittman Road",
      "Plank Road",
      "Plato Road",
      "Russell Road",
    ],
    office: "Kane County Division of Transportation",
    address: "41W011 Burlington Road, St. Charles, IL 60175",
    phone: "630-584-1170",
    fax: "630-584-5265",
    email: "kdotcomments@co.kane.il.us",
  },
  state: {
    roads: ["U.S. Route 20", "Route 47"],
    office: "Illinois Department of Transportation, District 1",
    address: "201 West Center Court, Schaumburg, IL 60196-1096",
    phone: "847-705-4401",
  },
  snowRemoval: [
    "The Road District's published snow-removal information describes almost 39 miles of roadway, including more than 20 subdivisions, divided among four routes.",
    "During larger snow events, the department may add a fifth operator so larger snow-removal equipment can remain focused on township roads.",
    "Where wind is blowing snow across a roadway, crews may plow without immediately applying material until conditions allow the surface to be treated effectively.",
    "Residents are asked not to clear driveways into township roadways. Mailbox damage and roadside turf damage associated with Road District snow removal may be reported to the Highway Department.",
  ],
  gallery: [
    {
      src: "/highway/snowplow-truck.jpg",
      alt: "Plato Township snowplow and salt truck parked outside the Highway Department",
      width: 1510,
      height: 1179,
    },
    {
      src: "/highway/roadside-tree-work.jpg",
      alt: "Highway Department worker clearing a fallen roadside tree",
      width: 1600,
      height: 900,
    },
    {
      src: "/highway/truck-maintenance.jpg",
      alt: "Plato Township Highway Department truck undergoing maintenance",
      width: 1600,
      height: 1200,
    },
    {
      src: "/highway/highway-work-truck.jpg",
      alt: "Highway Department work truck outside the Plato Township garage",
      width: 1600,
      height: 1200,
    },
  ],
} as const;

export const clerkDepartment = {
  clerk: "Ronald Straub",
  responsibilities: [
    "Serves as Clerk for the Township Board.",
    "Does not vote except in the case of a tie vote to fill a vacancy in a Township office.",
    "Keeps records of Township proceedings.",
    "Keeps minutes of Town meetings and Township Board meetings.",
    "Serves as the local election authority.",
    "Accepts petitions concerning local elections or referendums involving the township.",
  ],
} as const;

export const assessorDepartment = {
  assessor: "Dave Binz",
  deputyAssessor: "Stephanie Hulke",
  officeName: "Plato Township Assessor's Office",
  hours: "Monday–Thursday, 9:00 AM–2:00 PM",
  appointmentNote: "By appointment only",
  propertySearchUrl: "https://www.platotwp.gov/property-search",
  deputyPortrait: {
    src: "/assessor/stephanie-hulke.png",
    alt: "Stephanie Hulke, Plato Township Deputy Assessor",
    width: 355,
    height: 463,
  },
} as const;

export const cemeteryDistrict = {
  president: "Beth Rylko",
  cemeteries: [
    {
      name: "Plato Center Cemetery",
      location: "At the corner of Muirhead Road and Russell Road.",
    },
    {
      name: "North Plato Cemetery",
      location: "On Plank Road, approximately 1/4 mile east of Route 47.",
    },
    {
      name: "Baker Cemetery",
      location: "On Route 47, just west of Burlington Road.",
    },
  ],
  responsibilities: [
    "Maintaining the cemeteries",
    "Grass mowing",
    "Tree trimming",
    "Snow removal",
    "Selling grave lots to interested parties",
    "Marking graves for burials",
    "Working with monument companies when placing grave markers",
  ],
  pricing: [
    { audience: "Plato Township residents", amount: "$400 per grave" },
    { audience: "Nonresidents", amount: "$1,000 per grave" },
  ],
  meetings: {
    months: ["March", "June", "September", "December"],
    day: "Third Monday",
    time: "7:00 PM",
    location: "Plato Township Hall",
  },
} as const;

export const boardOfTrustees = {
  overview:
    "The Plato Township Board of Trustees, also called the Town Board, oversees and approves Township business. Residents can follow the Board through its published meeting schedule and meeting records.",
} as const;

export const departments = [
  departmentProfiles.supervisor,
  departmentProfiles.highway,
  departmentProfiles.clerk,
  departmentProfiles.assessor,
  departmentProfiles.cemetery,
  departmentProfiles["board-of-trustees"],
] as const;
