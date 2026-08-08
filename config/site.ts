export const siteConfig = {
  name: "Plato Township",
  description:
    "Official information and community resources for Plato Township in Kane County, Illinois.",
  url: "https://plato-township-demo.example.com",
  locale: "en_US",
  contact: {
    officePhone: "847-464-4228",
    highwayPhone: "847-464-5121",
    assessorPhone: "847-464-4221",
    supervisorAlternatePhone: "847-654-7787",
    supervisorOfficeEmail: "Supervisor@PlatoTwp.gov",
    supervisorEmail: "supervisor@platotownship.com",
    highwayEmail: "PlatoHighway@Comcast.net",
    assessorEmail: "Assessor@PlatoTownship.com",
    streetAddress: "10N924 Rippburger Road",
    address: "10N924 Rippburger Road, Elgin, IL 60124",
    mapUrl:
      "https://maps.google.com/?q=10N924+Rippburger+Road+Elgin+IL+60124",
    mapEmbedUrl:
      "https://www.google.com/maps?q=10N924%20Rippburger%20Road%20Elgin%20IL%2060124&output=embed",
  },
} as const;

type NavigationLink = {
  label: string;
  href: string;
};

type NavigationGroup = {
  label: string;
  href?: string;
  items: Array<{
    label: string;
    href?: string;
  }>;
};

type NavigationItem = NavigationLink | NavigationGroup;

export const navigation: NavigationItem[] = [
  {
    label: "Township Postings",
    items: [
      { label: "Board Meetings", href: "/board-meetings" },
      { label: "Board Minutes", href: "/board-minutes" },
    ],
  },
  {
    label: "Township Departments",
    href: "/departments",
    items: [
      { label: "Supervisor", href: "/departments/supervisor" },
      { label: "Highway Department" },
      { label: "Township Clerk" },
      { label: "Assessor" },
      { label: "Property Search" },
      { label: "Cemetery District" },
      { label: "Board of Trustees" },
    ],
  },
  {
    label: "Community Links",
    items: [
      { label: "Fire Departments", href: "/#community" },
      { label: "Local Weather", href: "/#community" },
      { label: "Local News", href: "/#community" },
      { label: "Trash", href: "/#community" },
      { label: "Plato Park", href: "/#community" },
    ],
  },
  { label: "About Us", href: "/about" },
  {
    label: "More",
    items: [
      { label: "Elections", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Archive", href: "/#postings" },
    ],
  },
];

export const footerLinks = [
  { label: "Township Postings", href: "/#postings" },
  { label: "Meetings", href: "/#meetings" },
  { label: "Departments", href: "/departments" },
  { label: "Community Links", href: "/#community" },
  { label: "Contact", href: "/contact" },
] as const;
