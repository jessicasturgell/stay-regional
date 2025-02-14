import { useEffect, useState } from "react";
import { getAllResources } from "../services/resourceServices.jsx";

export const TNResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchTNResources = async () => {
      try {
        const allResources = await getAllResources();
        const tnResources = allResources.filter(
          (resource) => resource.state === "TN"
        );
        setResources(tnResources);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchTNResources();
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
