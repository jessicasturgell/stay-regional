export const WVResources = () => {
  const resources = [
    {
      id: 1,
      name: "Appalachian Book Project",
      description:
        "APBP sends free books to people imprisoned in six Appalachian states (West Virginia, Virginia, Tennessee, Kentucky, Ohio, and Maryland), hosts book clubs inside prisons in our region, and is leading an effort to bring for-credit college courses into prison.",
      url: "https://appalachianprisonbookproject.org/",
    },
    {
      id: 2,
      name: "Free Meals Appalachia",
      description:
        "Free Meals Appalachia is a 501C3 nonprofit based in Buckhannon, WV. Since December 2020, we have been building truly accessible free food resources, using fresh, seasonal, and local ingredients as often as possible. We collaborate with individuals and organizations to create a diversified and resilient community network that removes financial barriers to meeting human needs.",
      url: "https://fmaf-cms.netlify.app/",
    },
    {
      id: 3,
      name: "Morgantown Mutual Aid",
      description:
        "We distribute supplies & connect community members w/local Morgantown resources.",
      url: "https://www.instagram.com/morgantown_wv_mutual_aid/",
    },
    {
      id: 4,
      name: "Project May Day",
      description: "Peer led harm reduction & Mutual Aid  in WV.",
      url: "https://www.instagram.com/projectmaydayx/",
    },
    {
      id: 5,
      name: "Project Rainbow",
      description:
        "The Rainbow House in Morgantown, WV, is a community space that serves as a hub for LGBTQ+ individuals and allies. It provides a safe and welcoming environment for gatherings, support groups, events, and advocacy efforts. The house is known for fostering inclusivity, promoting queer visibility, and offering resources to those in need within the Morgantown and broader West Virginia community.",
      url: "https://www.projectrainbowwv.com/",
    },
    {
      id: 6,
      name: "SOAR WV",
      description:
        "SOAR (Supporting Our Appalachian Region for Harm Reduction) WV is a Charleston, WV based community group that promotes the health, dignity, and voices of individuals who are impacted by drug use. Together, we’ve distributed over 30,000 naloxone doses since the COVID-19 pandemic began. SOAR was established in 2018 in response to the shut down of the Kanawha-Charleston Health Department’s harm reduction program. We’ve worked since then to fill the crater losing this program has left in our community.",
      url: "https://soarwv.org/",
    },
    {
      id: 7,
      name: "West Virginia Emergency Assistance Program",
      description:
        "Provides one-time financial help for rent, utilities, and other emergency needs.",
      url: "https://dhhr.wv.gov/bfa/programs/Pages/Emergency-Assistance.aspx",
    },
  ];
  return (
    <>
      {resources.map((r) => (
        <div className="resource-card" key={r.id}>
          <a href={r.url}>
            <h2>{r.name}</h2>
          </a>
          <p className="resource-desc">{r.description}</p>
        </div>
      ))}
    </>
  );
};
