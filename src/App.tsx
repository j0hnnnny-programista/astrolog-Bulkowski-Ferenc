import { useState } from "react";
import CatalogList from "./components/CatalogList";
import ObjectDetails from "./components/ObjectDetails";
import AddObjectForm from "./components/AddObjectForm";
import { initialObjects } from "./data/initialObjects";
import type { ICelestialObject } from "./types/CelestialObject";
import "./App.css";

function App() {

    const [objects, setObjects] = useState<ICelestialObject[]>(initialObjects);
    const [selectedObject, setSelectedObject] = useState<ICelestialObject | null>(null);


    const handleAddObject = (newObject: ICelestialObject) => {
        setObjects([...objects, newObject]);
    };

    return (
        <div className="app-layout">
            <header className="header">
                <h1>AstroLog</h1>
            </header>

            <main className="dashboard">
                <div className="panel left-panel">
                    <CatalogList
                        objects={objects}
                        onSelectObject={setSelectedObject}
                    />
                </div>

                <div className="panel center-panel">
                    <ObjectDetails selectedObject={selectedObject}/>
                </div>

                <div className="panel right-panel">
                    <AddObjectForm onAdd={handleAddObject} />
                </div>
            </main>
        </div>
    );
}

export default App;