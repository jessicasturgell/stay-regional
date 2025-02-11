export const ALResources = () => {
  const resources = [
    {
      id: 1,
      name: "Aids Alabama",
      description:
        "AIDS Alabama is an AIDS Alabama is an organization dedicated to supporting individuals living with HIV/AIDS through a variety of services. They focus on housing, policy advocacy, supportive services, and HIV/STI prevention and education. The organization offers culturally inclusive health and wellness services, including healthcare, support groups, and insurance premium assistance. Additionally, AIDS Alabama provides comprehensive treatment and prevention services, including free HIV testing, case management, and housing assistance. They also operate El Centro / The Hub, a community center and PrEP clinic for individuals seeking support. For more information, you can visit their official website at AIDS Alabama.organization dedicated to supporting individuals living with HIV/AIDS through a variety of services. They focus on housing, policy advocacy, supportive services, and HIV/STI prevention and education. The organization offers culturally inclusive health and wellness services, including healthcare, support groups, and insurance premium assistance. Additionally, AIDS Alabama provides comprehensive treatment and prevention services, including free HIV testing, case management, and housing assistance. They also operate El Centro / The Hub, a community center and PrEP clinic for individuals seeking support. For more information, you can visit their official website at AIDS Alabama.",
      url: "https://www.aidsalabama.org/",
    },
    {
      id: 2,
      name: "Alabama Game Changers",
      description:
        "The non-profit Alabama Game Changers (AGC) was created in 2014 by pediatrician, Dr. Stephanie Denton, and certified pediatric nurse, Karen Belcher, to help merge the medical and educational communities together with respect to helping dyslexic children in Alabama. The initial focus was on assessment with early accurate diagnoses paired with evidenced-based effective interventions for children with learning struggles in reading, math, or written expression.",
      url: "https://alabamagamechangers.org/agc/",
    },
    {
      id: 3,
      name: "American Civil Liberties Union",
      description:
        "The American Civil Liberties Union of Alabama is freedom’s watchdog; we work in the courts, legislatures, and communities to defend the civil liberties and civil rights guaranteed to us by the Constitution and the Bill of Rights.",
      url: "https://www.aclualabama.org/en",
    },
    {
      id: 4,
      name: "Magic City Acceptance Center",
      description: "An inclusive space for LGBTQ+ youth.",
      url: "https://www.instagram.com/mcacbham/",
    },
    {
      id: 5,
      name: "T.A.K.E. Birmingham",
      description:
        "TAKE focuses on issues such as discrimination in the workplace, housing advocacy, support for sex workers, providing trans-friendly services, and working to alleviate the many other barriers that TPOC face that no one else was talking about",
      url: "https://www.takebhm.org/",
    },
    {
      id: 6,
      name: "The Knights and Orchids Society",
      description:
        "TKO was founded in 2012. In 2017, TKO became the first and only AIDS Service Organization (ASO) and STD/STI clinic in the state of Alabama founded and led by Black Trans and LGBQ people. We are community people serving the communities that we represent. Our goal is to help more Black trans, same-gender-loving, and Black queer folks access high-quality primary care and endocrinology services. TC Caldwell (they/them) is the Executive Director and Jennine Webb (she/her) is the Co-Founder and Deputy Director of TKO.",
      url: "https://www.tkosociety.org/",
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
