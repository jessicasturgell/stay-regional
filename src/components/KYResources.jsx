export const KYResources = () => {
  const resources = [
    {
      id: 1,
      name: "EKY Mutual Aid",
      description:
        "An Appalachian community coming together to care for itself. we’re all we’ve got!",
      url: "https://www.instagram.com/hillbillieshelpinghillbillies/",
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
