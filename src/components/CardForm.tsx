import { useState } from 'react'
import { useContext } from "react";
import { ProvaContext } from '../stores/ProvaContext';
import React, { type ChangeEvent, type FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { add } from '../redux/citiesSlice';

// function CardForm({ addCity }: { addCity: (city: any) => void }) {
function CardForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        place: "",
        title: "",
        isVisited: false,
        description: "",
        imgUrl: ""
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name;
        if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
            setFormData({
                ...formData,
                [name]: e.target.checked,
            });
        } else {
            // qui e.target è o HTMLInputElement non‐checkbox, o HTMLTextAreaElement
            setFormData({
                ...formData,
                [name]: e.target.value,
            });
        }
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const city = {
            id: Math.random(),
            place: formData.place,
            title: formData.title,
            isVisited: formData.isVisited,
            description: formData.description,
            imgUrl: formData.imgUrl,
        };
        dispatch(add(city));
        setFormData({
            place: "",
            title: "",
            isVisited: false,
            description: "",
            imgUrl: ""
        });
    };

    const context = useContext(ProvaContext);
    if (!context) {
        throw new Error("Contesto non disponibile");
    }
    const { count } = context;

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg">
            <div className="flex flex-col">
                <label>Nome Nazione</label>
                <input
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleInputChange}
                    className="bg-gray-300 text-black"
                />
            </div>
            <div className="flex flex-col">
                <label>Nome Città</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="bg-gray-300 text-black"
                />
            </div>
            <div className="flex flex-col">
                <label>Visitata?</label>
                <input
                    type="checkbox"
                    name="isVisited"
                    checked={formData.isVisited}
                    onChange={handleInputChange}
                    className="bg-gray-300 text-black"
                />
            </div>
            <div className="flex flex-col">
                <label>Descrizione</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="bg-gray-300 text-black"
                />
            </div>
            <div className="flex flex-col">
                <label>Immagine</label>
                <input
                    type="text"
                    name="imgUrl"
                    value={formData.imgUrl}
                    onChange={handleInputChange}
                    className="bg-gray-300 text-black"
                />
            </div>
            <button className="bg-green-500 text-white py-2 px-4 rounded" type="submit">
                Aggiungi card
            </button>
        </form>
    );
}

export default CardForm;
