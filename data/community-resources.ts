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
      "Fire and emergency medical coverage depends on whether a property is in an incorporated or unincorporated part of Plato Township.",
    callout:
      "For a fire, medical emergency, or immediate threat to safety, call 911. Use the agency contacts below for non-emergency information.",
    resources: [
      {
        id: "pingree-grove-fire",
        title: "Pingree Grove & Countryside Fire Protection District",
        description:
          "Fire protection, emergency medical services, prevention information, and district resources for unincorporated portions of Plato Township.",
        resourceType: "Fire protection district",
        href: "https://www.pgfpd.com/",
        external: true,
        phone: "847-741-3151",
        phoneHref: "tel:8477413151",
        phoneLabel: "Non-emergency",
        note: "Service area: unincorporated portions of Plato Township.",
      },
      {
        id: "elgin-fire",
        title: "Elgin Fire Department",
        description:
          "City fire, emergency medical, prevention, and public education information for Plato Township properties located within Elgin city limits.",
        resourceType: "City fire department",
        href: "https://elginil.gov/80/Fire",
        external: true,
        phone: "847-931-6175",
        phoneHref: "tel:8479316175",
        phoneLabel: "Administration",
        note: "Service area: properties within the City of Elgin.",
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
        href: "https://forecast.weather.gov/MapClick.php?lat=42.0384&lon=-88.2858",
        external: true,
      },
      {
        id: "nws-chicago",
        title: "National Weather Service Chicago",
        description:
          "Regional watches, warnings, advisories, forecasts, and weather-safety information for northeastern Illinois, including Kane County.",
        resourceType: "Weather alerts",
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
    availabilityNote:
      "Additional local publications will be added when current destinations can be confirmed.",
    resources: [
      {
        id: "kane-county-connects",
        title: "Kane County Connects",
        description:
          "Official news, announcements, and community information published by Kane County government.",
        resourceType: "County government news",
        href: "https://www.kanecountyconnects.com/",
        external: true,
      },
      {
        id: "kane-county-chronicle",
        title: "Kane County Chronicle",
        description:
          "Local reporting and community coverage from the Kane County edition of Shaw Local News Network.",
        resourceType: "Regional news",
        href: "https://www.shawlocal.com/kane-county-chronicle/",
        external: true,
      },
      {
        id: "northwest-herald",
        title: "Northwest Herald",
        description:
          "Regional reporting for communities across northern Illinois and the northwest suburbs.",
        resourceType: "Regional news",
        href: "https://www.shawlocal.com/northwest-herald/",
        external: true,
      },
    ],
  },
  {
    id: "trash",
    title: "Trash",
    description:
      "Provider and county resources for residential garbage, recycling, yard waste, electronics, and special disposal questions.",
    callout:
      "LRS is an external service provider, not a Plato Township department. Confirm current schedules and collection requirements directly with the provider.",
    resources: [
      {
        id: "lrs-plato-township",
        title: "LRS — Plato Township Residential Services",
        description:
          "Current provider information for Plato Township garbage, recycling, yard waste, bulk items, electronic waste, and customer support.",
        resourceType: "External waste provider",
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
          "County guidance for recycling locations, household hazardous waste, electronics, and other materials that require special handling.",
        resourceType: "County disposal guidance",
        href: "https://www.kanecountyil.gov/Recycling/Pages/default.aspx",
        external: true,
      },
    ],
  },
  {
    id: "plato-park",
    title: "Plato Park",
    description:
      "Township park, recreation, and Depot Museum resources for residents and visitors.",
    callout:
      "The Township identifies the park on Stonecrest Drive, off Russell Road in Plato Center. Check the official park page for current access details.",
    resources: [
      {
        id: "plato-park-and-depot",
        title: "Plato Township Park & Depot Museum",
        description:
          "Township information about the park's open space, athletic fields, playground, covered pavilion, and Illinois Central Railroad Depot Museum.",
        resourceType: "Township park",
        href: "https://www.platotownship.com/content/park/",
        external: true,
        phone: "847-464-4228",
        phoneHref: "tel:8474644228",
        phoneLabel: "Township office",
        note: "Location: Stonecrest Drive, off Russell Road in Plato Center.",
      },
      {
        id: "central-district-baseball",
        title: "Central District Baseball League",
        description:
          "Youth baseball organization identified by the Township as a user of Plato Park fields.",
        resourceType: "Recreation program",
        href: "https://www.cdbaseball.org/",
        external: true,
      },
      {
        id: "central-301-cross-country",
        title: "Central 301 Cross Country & Track",
        description:
          "Prairie Knolls and Central Middle School cross-country and track information linked from the Township's park resources.",
        resourceType: "School athletics",
        href: "https://msrun.central301.net/home",
        external: true,
      },
    ],
  },
];

export const getCommunityResourceCategory = (
  id: CommunityResourceCategoryId,
) => communityResourceCategories.find((category) => category.id === id);
