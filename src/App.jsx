import { useEffect, useState } from "react";
import "./App.css";
import RegionMap from "./components/RegionMap.jsx";
import { Resources } from "./components/Resources.jsx";

function App() {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <>
      <div className="map-resources-container">
        <div className="map-container">
          <h1>STAY Resource Map</h1>
          <div>
            <RegionMap
              selectedState={selectedState}
              setSelectedState={setSelectedState}
            />
          </div>
        </div>
        <div className="resources-container">
          <Resources selectedState={selectedState} />
        </div>
      </div>
    </>
  );
}

export default App;
