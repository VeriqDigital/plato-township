import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Plato Township",
  description:
    "Learn about Plato Township's past, present, future, census, and local history.",
};

const historyParagraphs = [
  `Plato Township embraces Town 41, Range 7, and lies directly west of Elgin and east of Burlington. Because of the diverging correctional range line, run by the Government Surveyor between the townships numbered 41 and 42, all its north row of sections, as well as those of Elgin and Burlington, are fractional. Its west line is on the summit of the divide between the Rock and Fox Rivers and its three or four small spring brooklets, or lowland drains, flow to the creeks emptying into the Fox.`,
  `They furnished in the early days an abundance of good water for household and stock, conveniently distributed over a large portion of the township, Chicken Grove, near the southwest corner, was a body of fine heavy timber, principally oak of several varieties; but there was also considerable hickory, maple, black-walnut and butternut. The old trail of the Indians and of General Scott's army, passed diagonally entirely across it.`,
  `The general surface is quite level, yet sufficiently undulating to afford good drainage. The soil is excellent and small tracts of alternating woodland and prairie rendered it an inviting region to the pioneers. Prospecting, doubtless, along the army trail, and probably attracted by the neighboring grove, JOHN GRIGGS and his son JOHN GRIGGS, JR. located claims along the southwest part of Chicken Grove on land that became part of Sections 35 and 36 in this township in the summer of 1835.`,
  `They were upright, energetic, intelligent men and they and their descendants have ever been active and influential in local and county affairs. JOHN GRIGGS was appointed by Governor FORD one of the judges of the first election in the county in 1836. He was the first Treasurer of the new county and the first Justice of the Peace in his precinct. He kept the first tavern in the township and at it held the office of first postmaster.`,
  `JOHN S. LEE, another able and honorable man, just attaining his majority, came during the same year and located an excellent claim adjoining GRIGGS, but extending north toward the trail, October 23, 1838. He married MISS NANCY PERRY, daughter of Mr. GEORGE PERRY of Campton - we must remember that there were no townships then, and no surveyed lines of roads or lands - and they were the first couple married in these settlements. They were each as handsome, in all manly and womanly endowment, as one need wish to see.`,
  `Their son, ABIJAH A. LEE, born September 4, 1839, was the first white child born in the township. MR. LEE'S original claim of two quarter-sections, was added to, until he owned 940 acres of magnificent land. He was first elected Justice of the Peace in 1840 and served nine years. He was first elected Supervisor and served twelve years, and for forty years he served as a School Director. His first son, ABIJAH A., is now an Assistant Supervisor from Elgin Township.`,
  `Such records indicate something of the character of the first settlers of the township and equally strong men have succeeded them. Their first grists were ground near Naperville, and a little later at Boardman's mill south of Batavia, and their tracks to and from the mill marked the route of the stage road from St. Charles toward Galena, beside which GRIGG's tavern long stood. Dr. LATIMER S. TYLER and MARCUS and JOHN RANSTEAD - the latter becoming in later years a member of the State Legislature - came in 1836 and settled on Section 12.`,
  `During the period between 1838 and 1840 came Dr. DANIEL PINGREE, WILLIAM HANSON, THOMAS BURNIDGE and others. At the general election in 1844 at the "Washington Precinct," which included Plato, we find the following voters registered:`,
];

const registeredVoters =
  "JOHN GRIGGS, JOHN GRIGGS, JR., JOHN S. LEE, JOSEPH S. BURDICK, LEMUEL WOLSEY, SOLOMON ELLIS, MORRIS GUTCHIS, PARDON TABER, GEORGE W. SPRUCE, THOMAS MATTESON, JAMES INGALLS, CHARLES THRALL, GEORGE P. HARVEY, EDWARD BURNIDGE, THOMAS BURNIDGE, EDWARD BURNIDGE, JR., STEPHEN ARCHER, MICHAEL DETRO, MARK RANSTEAD, JAMES MITCHELL, SOLOMON ELLIS, JR., A.W. HODGE, JOHN S. LEE, NATHANIEL LADD, JAMES MOREY, WILLIAM S. PECK, BENJAMIN HALL, WILLIAM D. PECK, JAMES BROWN, BALDWIN WRIGHT, JOSIAH MITCHELL, ALSON BANKER, THOMAS CLARK, SOLOMON WRIGHT, BENJAMIN FULLER, BENJAMIN F. GAGE, HARVEY GAGE, MARLEY GAGE, WILLIAM SANDERS and LORENZO MITCHELL.";

const concludingHistoryParagraphs = [
  `This was so soon after the "land sale" that these can well be named as old settlers. As the voting precincts were arranged in 1836, the lands of this township lay in Pleasant Grove, Lake and Sandusky precincts. It became a part of Fairfield in 1840 and of Washington in 1843. Later is was called Homer, and, at the final adjustment of Congressional townships, it became Plato.`,
  `The name seems pleasant to the people, for every hamlet of the township ever has been and is "Plato" something - thus Plato Center, North Plato, Plato Corners and East Plato. It is a fine prosperous dairy township. The Chicago, Milwaukee and St. Paul Railroad cuts across the northeast corner and McQueen Station, with its tile factory, is just within its limits. Pingree Grove, with its brick and tile yards, is just over the border in Rutland Township and East Plato and Plato Center are thriving stations on the Chicago Great Western Railroad, which follows the general line of the old army trial diagonally across the township.`,
  `Its first school was taught by CHARLOTTE GRIGGS in 1840, at Plato Corners, down on the old stage road on Section 35. The first church organization was the Methodist, and they were holding services in the combined school house and town hall at Plato Center as early as 1848.`,
];

const galleryImages = [
  { src: "/about/20250320_180411 (1)_edited_edited.jpg", width: 295, height: 202 },
  { src: "/about/20250506_175059_edited.jpg", width: 290, height: 217 },
  { src: "/about/20250508_103905.jpg", width: 295, height: 261 },
  { src: "/about/20250509_120220.jpg", width: 282, height: 202 },
  { src: "/about/20250509_120603.jpg", width: 350, height: 202 },
  { src: "/about/20250509_121444.jpg", width: 350, height: 261 },
  { src: "/about/20250509_121452.jpg", width: 282, height: 211 },
  { src: "/about/2b39d1_1bd6fae94dc8425bbb586af5e2bdeba7~mv2.jpg", width: 294, height: 356 },
  { src: "/about/2b39d1_c2d9084e2d684cf5956ad532e0198354~mv2.jpg", width: 294, height: 356 },
  { src: "/about/2b39d1_c7395443f8c546478a003435cdb0ba20~mv2.jpg", width: 294, height: 356 },
  { src: "/about/2b39d1_e73ab0f25d6c4ebd86ebb3641a45794a~mv2.jpg", width: 294, height: 356 },
  { src: "/about/central-high-school-burlington-il-8-schoolphoto.jpg", width: 282, height: 261 },
  { src: "/about/Copy of A aerial view of a large group of houses.png", width: 350, height: 217 },
  { src: "/about/plato-center-elgin-il.jpg", width: 454, height: 302 },
  { src: "/about/2b39d1_99ef4ebf68e3444f8f0dbee7c8940a0f~mv2.png", width: 482, height: 302 },
];

export default function AboutPage() {
  return (
    <main>
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <h1 className="max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
            About Plato Township
          </h1>
        </div>
      </header>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-(--container-width) gap-8 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl">
            Planning the Future, Preserving the Past
          </h2>
          <div className="max-w-3xl border-t border-(--line) pt-5 text-base leading-8 text-(--ink-muted) sm:text-lg">
            <p>
              The rural tradition of our township endures, side-by-side with
              growth and development.
            </p>
            <p className="mt-4">
              Founded in 1835, Plato Township&apos;s 36 square miles includes
              rolling farmland, country roads, and town centers, as well as
              residential subdivisions and commercial development.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-(--mist) py-14 sm:py-16">
        <div className="mx-auto grid max-w-(--container-width) gap-10 px-6 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-(--navy)">
              Past and Present
            </h2>
            <p className="mt-4 border-t border-(--line) pt-4 text-base leading-8 text-(--ink-muted)">
              Plato Township began in the 1800&apos;s as a quiet farming
              community with approximately 200 residents. Today, Plato is a
              bustling suburban hub of northern Illinois.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-(--navy)">
              The Future
            </h2>
            <p className="mt-4 border-t border-(--line) pt-4 text-base leading-8 text-(--ink-muted)">
              The spirit of our community is its people. Today, Plato&apos;s
              residents and elected officials are working together to preserve
              its heritage while preparing for tomorrow. We invite both new and
              long-time residents to join us in building Plato&apos;s future.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-(--navy-deep) py-14 text-white sm:py-16">
        <div className="mx-auto grid max-w-(--container-width) gap-7 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            2020 Census
          </h2>
          <p className="max-w-3xl border-t border-white/20 pt-5 text-base leading-8 text-white/72 sm:text-lg">
            Plato Township had just short of 10,000 residents. In the past five
            years, Plato Township has added many new homes. Our best estimate is
            that the population is likely 11,000–12,000 residents. In the last
            year alone, 195 new homes were added. The urban areas of Plato
            Township form a “C” shape along the north, east, and west borders,
            leaving the center of Plato full of rural areas and open spaces.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-(--container-width) gap-10 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl">
              Plato Township History
            </h2>
          </div>
          <article className="max-w-3xl">
            <div className="space-y-6 text-base leading-8 text-(--ink-muted) sm:text-[1.0625rem]">
              {historyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <p className="border-y border-(--line) bg-(--warm-white) px-5 py-5 text-sm leading-7 text-(--ink-muted) sm:px-6 sm:text-base">
                {registeredVoters}
              </p>

              {concludingHistoryParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-8 border-t border-(--line) pt-5 text-sm leading-6 text-(--ink-muted)">
              Source: Historical Encyclopedia of Illinois (Edited by Newton
              Bateman, LL.D. and Paul Selby, A.M.) and History of Kane County
              Edited by Gen. John S. Wilcox. Chicago; Munsell Publishing
              Company, 1904, pp. 715–716; transcribed by K. Torp.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-(--mist) py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl">
            1920 Plato Township Map
          </h2>
          <div className="mt-7 border border-(--line) bg-white p-3 sm:p-5">
            <Image
              src="/about/2b39d1_20255b9109d2447a8b2042a8a844dfc2~mv2.jpg"
              alt="1920 Plato Township map"
              width={561}
              height={600}
              sizes="(min-width: 1024px) 896px, calc(100vw - 48px)"
              className="mx-auto h-auto w-full max-w-3xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl">
            Community Photo Gallery
          </h2>
          <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((image) => (
              <figure key={image.src} className="mb-4 break-inside-avoid overflow-hidden bg-(--mist)">
                <Image
                  src={image.src}
                  alt="Plato Township community"
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
