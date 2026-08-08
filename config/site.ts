export const siteConfig = {
  name: "Plato Township",
  description:
    "Official information and community resources for Plato Township in Kane County, Illinois.",
  url: "https://plato-township-demo.example.com",
  locale: "en_US",
  contact: {
    supervisorPhone: "847-464-4228",
    roadPhone: "847-464-5121",
    assessorPhone: "847-464-4221",
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
  {
    label: "Township Departments",
    items: [
      { label: "Supervisor", href: "/services#supervisor" },
      { label: "Highway Department", href: "/services#highway" },
      { label: "Township Clerk", href: "/services#clerk" },
      { label: "Assessor", href: "/services#assessor" },
      { label: "Property Search", href: "/services#assessor" },
      { label: "Cemetery District", href: "/services" },
      { label: "Board of Trustees", href: "/services#trustees" },
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
  { label: "Departments", href: "/services" },
  { label: "Community Links", href: "/#community" },
  { label: "Contact", href: "/contact" },
] as const;
