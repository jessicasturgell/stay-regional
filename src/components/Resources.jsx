import { ALResources } from "./ALResources.jsx";
import { KYResources } from "./KYResources.jsx";
import { NCResources } from "./NCResources.jsx";
import { TNResources } from "./TNResources.jsx";
import { VAResources } from "./VAResources.jsx";
import { WVResources } from "./WVResources.jsx";

export const Resources = ({ selectedState }) => {
  const stateResources = {
    WV: <WVResources />,
    NC: <NCResources />,
    TN: <TNResources />,
    AL: <ALResources />,
    KY: <KYResources />,
    VA: <VAResources />,
  };
  return (
    <>
      {selectedState?.id && stateResources[selectedState.id]
        ? stateResources[selectedState.id]
        : "Select a state to see resources."}
    </>
  );
};
