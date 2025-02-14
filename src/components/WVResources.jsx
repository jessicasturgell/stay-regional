import { useEffect, useState } from "react";
import { getAllResources } from "../services/resourceServices.jsx";

export const WVResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchWVResources = async () => {
      try {
        const allResources = await getAllResources();
        const wvResources = allResources.filter(
          (resource) => resource.state === "WV"
        );
        setResources(wvResources);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchWVResources();
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
