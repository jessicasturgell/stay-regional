import { useEffect, useState } from "react";
import { getAllResources } from "../services/resourceServices.jsx";

export const NCResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchNCResources = async () => {
      try {
        const allResources = await getAllResources();
        const ncResources = allResources.filter(
          (resource) => resource.state === "NC"
        );
        setResources(ncResources);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchNCResources();
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
