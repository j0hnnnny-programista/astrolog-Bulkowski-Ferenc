import type { ICelestialObject } from "../types/CelestialObject";

interface CatalogListProps {
    objects: ICelestialObject[];
    onSelectObject: (object: ICelestialObject) => void;
}

function CatalogList({
    objects,
    onSelectObject,
}:CatalogListProps) {
    return (
        <div>
            <h2>Katalog Obiektów</h2>

            {objects.map((object) => (
                <div
                key={object.id}
                onClick={() => onSelectObject(object)}
                >
                    <img
                        src={object.image}
                        alt={object.name}
                        width={100}
                    />

                    <p>{object.name}</p>
                </div>
            ))}
        </div>
    );
}

export default CatalogList;