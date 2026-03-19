import Link from "next/link";

type CaseStudy = {
  title: string;
  problem: string;
  workDone: string;
  outcome: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Bottom Service + Storage Transition",
    problem: "Owner needed haul-out and bottom service before moving into seasonal storage.",
    workDone: "Coordinated lift scheduling, yard handling, and service sequencing with one team.",
    outcome: "Boat moved back into storage on schedule with reduced handoff delays.",
    beforeImage: "/img/third-small.jpg",
    afterImage: "/img/fourth-small.jpg",
    beforeAlt: "Boat awaiting haul-out planning in marina.",
    afterAlt: "Boat positioned after haul-out and service sequence.",
  },
  {
    title: "Refinishing + Maintenance Refresh",
    problem: "Finish quality declined and owner wanted a cleaner maintenance baseline.",
    workDone: "Planned detailing and refinishing support with maintenance follow-up notes.",
    outcome: "Improved appearance and a clearer recurring service plan for ongoing care.",
    beforeImage: "/img/6.jpg",
    afterImage: "/img/10.jpg",
    beforeAlt: "Boat in pre-refinishing condition at service area.",
    afterAlt: "Boat after refinishing and maintenance support.",
  },
];

export function CaseStudyPairs() {
  return (
    <section className="home-section case-studies" id="projects" aria-labelledby="case-studies-heading">
      <div className="line">
        <div className="home-section-head">
          <h2 id="case-studies-heading" className="home-heading">
            Project case studies: problem, work done, outcome
          </h2>
          <p className="home-subhead">
            Structured examples to show how we handle real marine service workflows in Tarpon Springs.
          </p>
        </div>
        <div className="case-study-grid">
          {CASE_STUDIES.map((study) => (
            <article key={study.title} className="case-study-card">
              <h3>{study.title}</h3>
              <div className="case-study-photos">
                <figure>
                  <img src={study.beforeImage} alt={study.beforeAlt} />
                  <figcaption>Before</figcaption>
                </figure>
                <figure>
                  <div className="case-study-coming-soon" aria-label="New after images coming soon">
                    New Images Coming Soon
                  </div>
                  <figcaption>After (New Images Coming Soon)</figcaption>
                </figure>
              </div>
              <p>
                <strong>Problem:</strong> {study.problem}
              </p>
              <p>
                <strong>Work done:</strong> {study.workDone}
              </p>
              <p>
                <strong>Outcome:</strong> {study.outcome}
              </p>
            </article>
          ))}
        </div>
        <p className="home-gallery-more">
          <Link href="/boatyardgallery.html" className="btn-hero btn-hero-outline btn-hero-outline--dark">
            View Full Project Gallery
          </Link>
        </p>
      </div>
    </section>
  );
}
