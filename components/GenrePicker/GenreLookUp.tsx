import { getGenres } from "../../api/api";

export const lookup = async (ids: number[]) => {
    const movieGenres: string[] = [];

    const genres = await getGenres();
    
    for (const genre of genres) {
        for (const id of ids) {
            if (genre.id === id) {
                movieGenres.push(genre.name)
            }
        }
    }

    return movieGenres;
}

