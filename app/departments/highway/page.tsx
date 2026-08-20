import type { ReactNode } from "react";
import Image from "next/image";
import {
  DepartmentLinks,
  DepartmentPage,
  DepartmentPerson,
  DepartmentSection,
} from "@/components/departments/DepartmentPage";
import { departmentMetadata } from "@/components/departments/departmentMetadata";
import {
  departmentProfiles,
  highwayDepartment,
} from "@/data/departments";

const department = departmentProfiles.highway;

export const metadata = departmentMetadata(department);

export default function HighwayDepartmentPage() {
  return (
    <DepartmentPage
      department={department}
      contactNote="Not every road within Plato Township is maintained by the Road District. Use the jurisdiction lists on this page before reporting a roadway concern."
    >
      <DepartmentSection
        id="highway-overview"
        title="Department Overview"
        intro="The Plato Township Road District maintains roads under the Highway Commissioner's jurisdiction and provides roadway and seasonal maintenance services within that jurisdiction. Roads inside incorporated municipalities, county roads, and state routes are maintained by other agencies."
      >
        <DepartmentPerson
          name={highwayDepartment.commissioner}
          title="Plato Township Highway Commissioner"
        >
          Road Commissioner&apos;s Office, Plato Township Highway District
        </DepartmentPerson>
      </DepartmentSection>

      <DepartmentSection
        id="road-jurisdiction"
        title="Road Jurisdiction"
        intro="Plato Township contains roads maintained by the Road District, Kane County, the State of Illinois, and incorporated municipalities. The lists below reflect township-published jurisdiction information."
        className="mt-12"
      >
        <RoadList
          title="Plato Township Road District"
          description="The Road District includes all or part of these roads."
          roads={highwayDepartment.roadDistrictRoads}
        />

        <div className="mt-8 border-l-4 border-(--red) bg-(--mist) p-5 sm:p-6">
          <h3 className="text-xl font-semibold text-(--navy)">
            Road District subdivisions
          </h3>
          <p className="mt-3 text-sm leading-7 text-(--ink-muted)">
            {highwayDepartment.subdivisions.join(", ")}.
          </p>
          <p className="mt-4 border-t border-(--line) pt-4 text-sm leading-7 text-(--ink-muted)">
            {highwayDepartment.annexationNote}
          </p>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-2">
          <RoadList
            title="Kane County DOT"
            description="Kane County Division of Transportation maintains these roads."
            roads={highwayDepartment.county.roads}
          >
            <p className="mt-5 text-sm leading-6 text-(--ink-muted)">
              {highwayDepartment.county.office}
              <br />
              {highwayDepartment.county.address}
              <br />
              Phone:{" "}
              <a
                href={`tel:${highwayDepartment.county.phone.replaceAll("-", "")}`}
                className="underline decoration-(--line) underline-offset-4 hover:text-(--red)"
              >
                {highwayDepartment.county.phone}
              </a>
              <br />
              Fax: {highwayDepartment.county.fax}
              <br />
              <a
                href={`mailto:${highwayDepartment.county.email}`}
                className="break-all underline decoration-(--line) underline-offset-4 hover:text-(--red)"
              >
                {highwayDepartment.county.email}
              </a>
              <br />
              <a
                href={highwayDepartment.county.website}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-(--line) underline-offset-4 hover:text-(--red)"
              >
                Kane County DOT contact page (external)
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </RoadList>
          <RoadList
            title="Illinois State DOT"
            description="The Illinois Department of Transportation maintains these routes."
            roads={highwayDepartment.state.roads}
          >
            <p className="mt-5 text-sm leading-6 text-(--ink-muted)">
              {highwayDepartment.state.office}
              <br />
              {highwayDepartment.state.address}
              <br />
              Phone:{" "}
              <a
                href={`tel:${highwayDepartment.state.phone.replaceAll("-", "")}`}
                className="underline decoration-(--line) underline-offset-4 hover:text-(--red)"
              >
                {highwayDepartment.state.phone}
              </a>
              <br />
              <a
                href={highwayDepartment.state.website}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-(--line) underline-offset-4 hover:text-(--red)"
              >
                IDOT Region 1 contact page (external)
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </RoadList>
        </div>
      </DepartmentSection>

      <DepartmentSection
        id="seasonal-maintenance"
        title="Road and Seasonal Maintenance"
        intro="The Road District's published snow-removal guidance explains how township routes are divided and how crews respond during winter weather. This is general service information, not an active road alert or maintenance schedule."
        className="mt-12"
      >
        <ul className="mt-6 border-t border-(--line)">
          {highwayDepartment.snowRemoval.map((item) => (
            <li
              key={item}
              className="flex gap-4 border-b border-(--line) py-4 text-sm leading-7 text-(--ink-muted) sm:px-5"
            >
              <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 bg-(--red)" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-7 text-(--ink-muted)">
          For current road conditions or a roadway emergency, use the Highway
          Department contact information. Call 911 for emergencies requiring
          immediate public-safety response.
        </p>
      </DepartmentSection>

      <DepartmentSection
        id="highway-gallery"
        title="Highway Department at Work"
        intro="Selected photographs from the Highway Department's published photo album."
        className="mt-12"
      >
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {highwayDepartment.gallery.map((photo) => (
            <figure key={photo.src} className="border border-(--line) bg-(--mist)">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 430px"
                className="aspect-4/3 h-auto w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </DepartmentSection>

      <DepartmentSection
        id="highway-resources"
        title="Highway Resources"
        intro="The separate Road District website continues to publish road postings, permit information, project updates, inspection reports, and other Highway Department material."
        className="mt-12"
      >
        <DepartmentLinks
          links={[
            {
              title: "Plato Township Road District",
              description:
                "Visit the external Road District website for current road postings, permits, projects, and reports.",
              href: highwayDepartment.website,
              external: true,
            },
          ]}
        />
      </DepartmentSection>
    </DepartmentPage>
  );
}

function RoadList({
  title,
  description,
  roads,
  children,
}: {
  title: string;
  description: string;
  roads: readonly string[];
  children?: ReactNode;
}) {
  return (
    <section aria-label={title} className="border border-(--line) p-5 sm:p-6">
      <h3 className="text-xl font-semibold text-(--navy)">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-(--ink-muted)">
        {description}
      </p>
      <ul className="mt-5 grid grid-cols-1 gap-x-6 border-t border-(--line) sm:grid-cols-2">
        {roads.map((road) => (
          <li
            key={road}
            className="border-b border-(--line) py-2.5 text-sm font-medium text-(--navy)"
          >
            {road}
          </li>
        ))}
      </ul>
      {children}
    </section>
  );
}
