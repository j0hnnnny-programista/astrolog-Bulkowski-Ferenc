import type {ICelestialObject} from "../types/CelestialObject";

export const initialObjects: ICelestialObject[] = [
    {
        id: 1,
        name: "Jowisz",
        type: "Planeta",
        distance: 778,
        image: "https://tinyurl.com/myph6m4z",
        description: "Największa planeta Układu Słonecznego."
    },
    {
        id: 2,
        name: "Syriusz",
        type: "Gwiazda",
        distance: 8.6,
        image: "https://tinyurl.com/vbzuyv5k",
        description: "Najjaśniejsza gwiazda nocnego nieba."
    },
    {
        id: 3,
        name: "Tytan",
        type: "Księżyc",
        distance: 1200,
        image: "https://tinyurl.com/3epsy98t",
        description: "Największy księżyc Saturna."
    },
    {
        id: 4,
        name: "Kometa Halleya",
        type: "Kometa",
        distance: 88,
        image: "https://tinyurl.com/mr3vzjhe",
        description: "Jedna z najbardziej znanych komet okresowych."
    },
    {
        id: 5,
        name: "Mgławica Oriona",
        type: "Mgławica",
        distance: 1344,
        image: "https://tinyurl.com/mwsn9udu",
        description: "Jeden z najjaśniejszych obszarów gwiazdotwórczych."
    },
    {
        id: 6,
        name: "Sagittarius A*",
        type: "Czarna Dziura",
        distance: 26600,
        image: "https://tinyurl.com/2z36fcjx",
        description: "Supermasywna czarna dziura znajdująca się w centrum Drogi Mlecznej."
    }
]