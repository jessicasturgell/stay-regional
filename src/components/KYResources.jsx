import { useEffect, useState } from "react";
import { getAllResources } from "../services/resourceServices.jsx";

export const KYResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchKYResources = async () => {
      try {
        const allResources = await getAllResources();
        const kyResources = allResources.filter(
          (resource) => resource.state === "KY"
        );
        setResources(kyResources);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchKYResources();
  }, []);
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
