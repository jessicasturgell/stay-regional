export const TNResources = () => {
  const resources = [
    {
      id: 1,
      name: "ETN Harm Reduction",
      description:
        "East Tennessee Harm Reduction & Recovery Housing is a non-profit organization that was created in 2022 so that people struggling with addiction and mental health have access to the resources needed to gain the freedom of the chains that’s been weighing them down.",
      url: "https://www.instagram.com/easttnharmredux/?hl=en",
    },
    {
      id: 2,
      name: "Hellbender Harm Reduction",
      description:
        "Hellbender Harm Reduction improves wellbeing and builds solidarity in Tennessee by providing harm reduction supplies and advancing policies that support people who use drugs.",
      url: "https://www.hellbenderharmreduction.org/",
    },
    {
      id: 3,
      name: "Tri-Cities Mutual Aid",
      description:
        "A grassroots coalition of people and groups who care about everyone getting the resources they need.",
      url: "https://www.instagram.com/tricitiesmutualaid/?hl=en",
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
