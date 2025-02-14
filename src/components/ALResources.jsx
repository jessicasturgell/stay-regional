import { useEffect, useState } from "react";
import { getAllResources } from "../services/resourceServices.jsx";

export const ALResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchALResources = async () => {
      try {
        const allResources = await getAllResources();
        const alResources = allResources.filter(
          (resource) => resource.state === "AL"
        );
        setResources(alResources);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchALResources();
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
