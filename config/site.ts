export const siteConfig = {
  name: "Plato Township",
  shortName: "Plato",
  description:
    "Official information and community resources for Plato Township in Kane County, Illinois.",
  url: "https://plato-township-demo.example.com",
  locale: "en_US",
  contact: {
    supervisorPhone: "847-464-4228",
    roadPhone: "847-464-5121",
    assessorPhone: "847-464-4221",
    address: "10N924 Rippburger Road, Elgin, IL 60124",
    mapUrl:
      "https://maps.google.com/?q=10N924+Rippburger+Road+Elgin+IL+60124",
    mapEmbedUrl:
      "https://www.google.com/maps?q=10N924%20Rippburger%20Road%20Elgin%20IL%2060124&output=embed",
  },
} as const;

export type NavigationLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationGroup = {
  label: string;
  items: NavigationLink[];
};

export const navigation: NavigationGroup[] = [
  {
    label: "Township Postings",
    items: [
      { label: "Latest Announcements", href: "/#postings" },
      { label: "Upcoming Meetings", href: "/#meetings" },
      { label: "Agendas & Minutes", href: "/#meetings" },
      { label: "Public Notices", href: "/#postings" },
    ],
  },
  {
    label: "Township Departments",
    items: [
      { label: "Supervisor's Office", href: "/services#supervisor" },
      { label: "Township Clerk", href: "/services#clerk" },
      { label: "Assessor", href: "/services#assessor" },
      { label: "Highway Department", href: "/services#highway" },
      { label: "Board of Trustees", href: "/services#trustees" },
    ],
  },
  {
    label: "Community Links",
    items: [
      { label: "Resident Resources", href: "/#community" },
      { label: "Kane County Services", href: "/#community" },
      { label: "Emergency Information", href: "/#community" },
      { label: "Forms & Documents", href: "/#community" },
    ],
  },
  {
    label: "About Us",
    items: [
      { label: "About Plato Township", href: "/about" },
      { label: "Elected Officials", href: "/about#officials" },
      { label: "Our Community", href: "/about#community" },
    ],
  },
  {
    label: "Contact",
    items: [
      { label: "Township Office", href: "/contact" },
      { label: "Phone Directory", href: "/contact#directory" },
      { label: "Directions", href: "/contact#directions" },
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
