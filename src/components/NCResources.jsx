export const NCResources = () => {
  const resources = [
    {
      id: 1,
      name: "Campaign for Southern Equality",
      description:
        "The Campaign for Southern Equality is working to build a South where LGBTQ+ people are equal in every part of life. They do the Trans Youth Emergency Project helps families of transgender youth across 25 states navigate cruel bans on gender-affirming care. It is the largest national program of its kind, offering custom 1-on-1 logistical and financial support so families can identify out-of-state healthcare options and pay for the cost of getting there.",
      url: "https://southernequality.org/",
    },
    {
      id: 2,
      name: "Rednecks Rising Media",
      description:
        "Anarchist abolitionist Appalachians. Healing, storytelling, organizing in WNC.",
      url: "https://www.instagram.com/rednecksrising/?hl=en",
    },
    {
      id: 3,
      name: "Youth Outright",
      description:
        "Youth OUTright engages in intersectional and intergenerational dialogue with a focus on gender and racial justice. Our work includes programming for youth ages 11-24, training for youth-serving organizations, and advocacy for policies that protect Queer and Trans youth.",
      url: "https://www.youthoutright.org/",
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
