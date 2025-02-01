export const TNResources = () => {
  const resources = [
    {
      id: 1,
      name: "STAY Member Support Fund",
      description:
        "Members can request up to $200 to support with projects that align with STAY's core mission and beliefs.",
      url: "https://www.thestayproject.net/member-support-fund",
    },
    {
      id: 2,
      name: "Something",
      description: "Something something goes here for Tennessee.",
      url: "https://www.thestayproject.net/member-support-fund",
    },
    {
      id: 3,
      name: "Something else",
      description: "Something else goes here.",
      url: "https://www.thestayproject.net/member-support-fund",
    },
  ];
  return (
    <>
      {resources.map((r) => (
        <div className="resource-card" key={r.id}>
          <a href={r.url}>
            <h2>{r.name}</h2>
          </a>
          <span>{r.description}</span>
        </div>
      ))}
    </>
  );
};
