export const siteConfig = {
  name: "Plato Township",
  description:
    "Official information and community resources for Plato Township in Kane County, Illinois.",
  url: "https://plato-township-demo.example.com",
  locale: "en_US",
  contact: {
    officePhone: "847-464-4228",
    highwayPhone: "847-464-5121",
    highwayFax: "847-464-5122",
    assessorPhone: "847-464-4221",
    assessorFax: "847-464-4297",
    supervisorAlternatePhone: "847-654-7787",
    supervisorOfficeEmail: "Supervisor@PlatoTwp.gov",
    supervisorEmail: "supervisor@platotownship.com",
    highwayEmail: "PlatoHighway@Comcast.net",
    assessorEmail: "Assessor@PlatoTownship.com",
    cemeteryPhone: "630-669-5295",
    cemeteryEmail: "Betty.Rylko@gmail.com",
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
  items: NavigationLink[];
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
  { label: "Announcements", href: "/announcements" },
  {
    label: "Township Departments",
    href: "/departments",
    items: [
      { label: "Supervisor", href: "/departments/supervisor" },
      { label: "Highway Department", href: "/departments/highway" },
      { label: "Township Clerk", href: "/departments/clerk" },
      { label: "Assessor", href: "/departments/assessor" },
      {
        label: "Property Search",
        href: "/departments/assessor/property-search",
      },
      { label: "Cemetery District", href: "/departments/cemetery" },
      {
        label: "Board of Trustees",
        href: "/departments/board-of-trustees",
      },
    ],
  },
  {
    label: "Community Links",
    href: "/community-resources",
    items: [
      {
        label: "Fire Departments",
        href: "/community-resources#fire-departments",
      },
      { label: "Local Weather", href: "/community-resources#weather" },
      { label: "Local News", href: "/community-resources#local-news" },
      { label: "Trash", href: "/community-resources#trash" },
      { label: "Plato Park", href: "/community-resources#plato-park" },
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
  { label: "Community Links", href: "/community-resources" },
  { label: "Contact", href: "/contact" },
] as const;
