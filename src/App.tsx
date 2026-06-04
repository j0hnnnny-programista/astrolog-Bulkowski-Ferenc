import { useState } from "react";
import CatalogList from "./components/CatalogList";
import ObjectDetails from "./components/ObjectDetails";
import { initialObjects } from "./data/initialObjects";
import type { ICelestialObject } from "./types/CelestialObject";

function App() {
  const [objects] = useState<ICelestialObject[]>(initialObjects);
  const [selectedObject, setSelectedObject] = useState<ICelestialObject | null>(null);
  return (
      <div>
        <h1>Astrolog</h1>

        <CatalogList
        objects={objects}
        onSelectObject={setSelectedObject}
        />

        <ObjectDetails selectedObject={selectedObject}/>
      </div>
  );
}
export default App;