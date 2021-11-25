import { createContext } from 'react';
import { getGenres } from '../../api/api';

export type GenreData = {
    id: number,
    name: string,
}

function hehe() {
    const allGenres: GenreData[] = [];

    getGenres()
        .then(({ genres }) => {
            allGenres.push(genres)
        })
        .catch((error) => {
            console.log(error)
        })

    return allGenres;
}

export const GenreContext = createContext<GenreData[]>(hehe());