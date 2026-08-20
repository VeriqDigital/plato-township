export type ElectionResource = {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  source: "Kane County Clerk" | "Illinois State Board of Elections";
};

export const registrationResources: readonly ElectionResource[] = [
  {
    id: "voter-registration",
    title: "Register to Vote",
    description:
      "Review Kane County registration options, eligibility information, and links to the Illinois online voter application.",
    ctaLabel: "Register to Vote",
    href: "https://clerk.kanecountyil.gov/Elections/Pages/Voter-Registration.aspx",
    source: "Kane County Clerk",
  },
  {
    id: "voter-search",
    title: "Voter Search and Polling Place",
    description:
      "Use Kane County's voter lookup for current registration and polling-place information.",
    ctaLabel: "Check Voter Registration",
    href: "https://clerk.kanecountyil.gov/Elections/Pages/Voter-Search.aspx",
    source: "Kane County Clerk",
  },
];

export const votingMethodsResources: readonly ElectionResource[] = [
  {
    id: "vote-by-mail",
    title: "Vote by Mail",
    description:
      "Find current Kane County vote-by-mail applications, instructions, and ballot information.",
    ctaLabel: "Find Vote-by-Mail Information",
    href: "https://clerk.kanecountyil.gov/Elections/pages/vote-by-mail.aspx",
    source: "Kane County Clerk",
  },
  {
    id: "early-voting",
    title: "Early Voting",
    description:
      "Confirm current early-voting locations, dates, hours, and voter instructions with Kane County.",
    ctaLabel: "View Early Voting Information",
    href: "https://clerk.kanecountyil.gov/Elections/pages/early-voting.aspx",
    source: "Kane County Clerk",
  },
];

export const electionInformationResources: readonly ElectionResource[] = [
  {
    id: "election-calendar",
    title: "Election Calendar",
    description:
      "Review the Kane County Clerk's current election calendar for officially published dates and filing periods.",
    ctaLabel: "View Election Calendar",
    href: "https://clerk.kanecountyil.gov/Elections/Documents/Election-Calendar.pdf",
    source: "Kane County Clerk",
  },
  {
    id: "election-results",
    title: "Election Results",
    description:
      "Access current and archived election results published by the Kane County Clerk.",
    ctaLabel: "View Election Results",
    href: "https://clerk.kanecountyil.gov/Elections/Pages/Election-Results-Archive.aspx",
    source: "Kane County Clerk",
  },
  {
    id: "kane-county-elections",
    title: "Kane County Elections",
    description:
      "The Kane County Clerk's central election site provides voting, registration, maps, election administration, and contact information.",
    ctaLabel: "Visit Kane County Elections",
    href: "https://clerk.kanecountyil.gov/Elections",
    source: "Kane County Clerk",
  },
  {
    id: "candidate-filing",
    title: "Candidate and Filing Information",
    description:
      "Use the County Clerk's official candidate resources for current guides, petitions, filings, and related election documents.",
    ctaLabel: "View Candidate Filing Information",
    href: "https://clerk.kanecountyil.gov/Elections/Pages/Elections.aspx",
    source: "Kane County Clerk",
  },
];

export const illinoisElectionResources: readonly ElectionResource[] = [
  {
    id: "illinois-voter-information",
    title: "Illinois Voter Information",
    description:
      "State voter resources include registration, polling-place lookup, voting guidance, and election-authority information.",
    ctaLabel: "Find Illinois Voter Information",
    href: "https://www.elections.il.gov/InformationForVoters.aspx?MID=I0cuvBFuZRw%3D",
    source: "Illinois State Board of Elections",
  },
  {
    id: "illinois-elections",
    title: "Illinois State Board of Elections",
    description:
      "Official statewide election information, forms, results, candidate resources, and voter services.",
    ctaLabel: "Visit Illinois State Board of Elections",
    href: "https://www.elections.il.gov/",
    source: "Illinois State Board of Elections",
  },
];
