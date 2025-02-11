export const VAResources = () => {
  const resources = [
    {
      id: 1,
      name: "Holler to Holler",
      description:
        "The Holler to Holler project is our way of giving ourselves, our neighbors, and our students in Southwest Virginia ways to respond by building relationships to keep each other safe.",
      url: "http://hollertoholler.org/",
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
