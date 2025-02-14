import { useEffect, useState } from "react";
import { getAllResources } from "../services/resourceServices.jsx";

export const VAResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchVAResources = async () => {
      try {
        const allResources = await getAllResources();
        const vaResources = allResources.filter(
          (resource) => resource.state === "VA"
        );
        setResources(vaResources);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchVAResources();
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
