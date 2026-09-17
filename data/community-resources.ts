export const communityResourceCategoryIds = [
  "fire-departments",
  "weather",
  "local-news",
  "trash",
  "plato-park",
] as const;

export type CommunityResourceCategoryId =
  (typeof communityResourceCategoryIds)[number];

export type CommunityResource = {
  id: string;
  title: string;
  description: string;
  resourceType: string;
  ctaLabel: string;
  href: string;
  external: true;
  phone?: string;
  phoneHref?: string;
  phoneLabel?: string;
  note?: string;
};

export type CommunityResourceCategory = {
  id: CommunityResourceCategoryId;
  title: string;
  description: string;
  callout?: string;
  availabilityNote?: string;
  resources: readonly CommunityResource[];
};

export const communityResourceCategories: readonly CommunityResourceCategory[] = [
  {
    id: "fire-departments",
    title: "Fire Departments",
    description:
      "Plato Township identifies separate fire agencies for unincorporated areas and for areas located within Elgin city limits. Use the links below for non-emergency information.",
    callout:
      "For a fire, medical emergency, or immediate threat to safety, call 911. Use the agency contacts below for non-emergency information.",
    resources: [
      {
        id: "pingree-grove-fire",
        title: "Pingree Grove & Countryside Fire Protection District",
        description:
          "Department information, prevention resources, and non-emergency contacts for the district Plato Township identifies with unincorporated township areas.",
        resourceType: "Fire protection district",
        ctaLabel: "Visit Pingree Grove Fire",
        href: "https://www.pgfpd.com/",
        external: true,
        phone: "847-741-3151",
        phoneHref: "tel:8477413151",
        phoneLabel: "Non-emergency",
        note: "Township-listed area: unincorporated portions of Plato Township.",
      },
      {
        id: "elgin-fire",
        title: "Elgin Fire Department",
        description:
          "Department information, prevention resources, and non-emergency contacts for areas Plato Township identifies as being within Elgin city limits.",
        resourceType: "City fire department",
        ctaLabel: "Visit Elgin Fire",
        href: "https://elginil.gov/80/Fire",
        external: true,
        phone: "847-931-6175",
        phoneHref: "tel:8479316175",
        phoneLabel: "Administration",
        note: "Township-listed area: within the City of Elgin.",
      },
    ],
  },
  {
    id: "weather",
    title: "Local Weather",
    description:
      "Official forecast and alert information from the National Weather Service. Plato Township does not produce weather forecasts.",
    resources: [
      {
        id: "nws-elgin-forecast",
        title: "National Weather Service — Elgin Area Forecast",
        description:
          "Current conditions and the extended National Weather Service point forecast for the Elgin area.",
        resourceType: "Local forecast",
        ctaLabel: "View Elgin-area forecast",
        href: "https://forecast.weather.gov/MapClick.php?lat=42.0384&lon=-88.2858",
        external: true,
      },
      {
        id: "nws-chicago",
        title: "National Weather Service Chicago",
        description:
          "Regional watches, warnings, advisories, forecasts, and weather-safety information for northeastern Illinois, including Kane County.",
        resourceType: "Weather alerts",
        ctaLabel: "View NWS Chicago",
        href: "https://www.weather.gov/lot/",
        external: true,
      },
    ],
  },
  {
    id: "local-news",
    title: "Local News",
    description:
      "Links to county and regional news sources historically referenced by Plato Township. Each source maintains its own coverage and access policies.",
    availabilityNote: "Only publications with current destinations are listed.",
    resources: [
      {
        id: "kane-county-connects",
        title: "Kane County Connects",
        description:
          "Official news, announcements, and community information published by Kane County government.",
        resourceType: "County government news",
        ctaLabel: "Visit Kane County Connects",
        href: "https://www.kanecountyconnects.com/",
        external: true,
      },
      {
        id: "kane-county-chronicle",
        title: "Kane County Chronicle",
        description:
          "Local reporting and community coverage from the Kane County edition of Shaw Local News Network.",
        resourceType: "Regional news",
        ctaLabel: "Visit Kane County Chronicle",
        href: "https://www.shawlocal.com/kane-county-chronicle/",
        external: true,
      },
      {
        id: "northwest-herald",
        title: "Northwest Herald",
        description:
          "Regional reporting for communities across northern Illinois and the northwest suburbs.",
        resourceType: "Regional news",
        ctaLabel: "Visit Northwest Herald",
        href: "https://www.shawlocal.com/northwest-herald/",
        external: true,
      },
    ],
  },
  {
    id: "trash",
    title: "Trash",
    description:
      "For routine residential garbage, recycling, and yard waste service, use the LRS resource below. Kane County Recycles provides drop-off and special-material guidance.",
    resources: [
      {
        id: "lrs-plato-township",
        title: "LRS — Plato Township Residential Services",
        description:
          "LRS is the external provider for Plato Township residential garbage, recycling, and yard waste service. Confirm current schedules and collection requirements directly with LRS.",
        resourceType: "Residential collection provider",
        ctaLabel: "Visit LRS",
        href: "https://www.lrsrecycles.com/municipality/plato-township/",
        external: true,
        phone: "844-633-3577",
        phoneHref: "tel:8446333577",
        phoneLabel: "Customer service",
      },
      {
        id: "kane-county-recycles",
        title: "Kane County Recycles",
        description:
          "County guidance for drop-off locations, household hazardous waste, electronics, and other materials requiring special handling. This is separate from routine residential pickup.",
        resourceType: "Special recycling and disposal",
        ctaLabel: "View Kane County Recycles",
        href: "https://www.kanecountyil.gov/Recycling",
        external: true,
      },
    ],
  },
  {
    id: "plato-park",
    title: "Plato Park",
    description:
      "Township information for Plato Park and the Illinois Central Railroad Depot Museum on Stonecrest Drive, just off Russell Road in Plato Center.",
    resources: [
      {
        id: "plato-park-and-depot",
        title: "Plato Township Park & Depot Museum",
        description:
          "Township information about the park's open space, athletic fields, playground, covered pavilion, and Illinois Central Railroad Depot Museum.",
        resourceType: "Township park",
        ctaLabel: "Visit Plato Park",
        href: "https://www.platotownship.com/content/park/",
        external: true,
        phone: "847-464-4228",
        phoneHref: "tel:8474644228",
        phoneLabel: "Township office",
      },
      {
        id: "central-district-baseball",
        title: "Central District Baseball League",
        description:
          "Youth baseball organization identified by the Township as a user of Plato Park fields.",
        resourceType: "Recreation program",
        ctaLabel: "Visit CDBL",
        href: "https://www.cdbaseball.org/",
        external: true,
      },
      {
        id: "central-301-cross-country",
        title: "Central 301 Cross Country & Track",
        description:
          "Prairie Knolls and Central Middle School cross-country and track information linked from the Township's park resources.",
        resourceType: "School athletics",
        ctaLabel: "Visit Central 301 athletics",
        href: "https://msrun.central301.net/home",
        external: true,
      },
    ],
  },
];

export const getCommunityResourceCategory = (
  id: CommunityResourceCategoryId,
) => communityResourceCategories.find((category) => category.id === id);
