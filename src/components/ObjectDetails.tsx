import type { ICelestialObject } from "../types/CelestialObject";

interface IObjectDetailsProps {
    selectedObject: ICelestialObject | null;
}

function ObjectDetails({
    selectedObject,
}:IObjectDetailsProps){
    return (
        <div>
            {selectedObject ? (
                <>
                    <h2>{selectedObject.name}</h2>

                    <img
                        src={selectedObject.image}
                        alt={selectedObject.name}
                        width={400}
                    />

                    <p>
                        Typ: {selectedObject.type}
                    </p>

                    <p>
                        Odległość: {selectedObject.distance}
                    </p>

                    <p>
                        {selectedObject.description}
                    </p>
                </>
            ) : (
                <h2>Wybierz obiekt do obserwacji</h2>
            )}
        </div>
    );
}

export default ObjectDetails;