import { useState, type FormEvent } from "react";
import type { ICelestialObject } from "../types/CelestialObject";

interface AddObjectFormProps {
    onAdd: (newObject: ICelestialObject) => void;
}

function AddObjectForm({ onAdd }: AddObjectFormProps) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [distance, setDistance] = useState<number | "">("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();


        if (!name || !type || distance === "" || !image) return;

        const newObject: ICelestialObject = {
            id: Date.now(), // Proste generowanie unikalnego ID
            name,
            type,
            distance: Number(distance),
            image,
            description: description || "Brak opisu",
        };

        onAdd(newObject);

        setName("");
        setType("");
        setDistance("");
        setImage("");
        setDescription("");
    };

    return (
        <div>
            <h2>Zgłoś Obiekt</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
                <div className="form-group">
                    <label>Nazwa</label>
                    <input value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Typ</label>
                    <input value={type} onChange={e => setType(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Odległość</label>
                    <input type="number" value={distance} onChange={e => setDistance(e.target.value === "" ? "" : Number(e.target.value))} required />
                </div>
                <div className="form-group">
                    <label>Link</label>
                    <input value={image} onChange={e => setImage(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Opis</label>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <button type="submit" className="submit-btn">Dodaj Odkrycie</button>
            </form>
        </div>
    );
}

export default AddObjectForm;