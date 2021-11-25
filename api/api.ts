import { config } from "../config";
import { GenreData } from "../components/GenrePicker/GenreContext";

const URL = "https://api.themoviedb.org/3/";

let cachedGenres: Promise<GenreData[]>;

export async function getGenres() {
    if (!cachedGenres) {
        cachedGenres = fetch(`${URL}genre/movie/list?api_key=${config.key}`)
            .then((response) => response.json())
            .then((data) => data.genres);
    }
    
    return cachedGenres;
}

export async function getDiscover() {
    return fetch(`${URL}discover/movie?api_key=${config.key}`)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
}