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

export async function getSearch(searchTerm: string) {
    console.log(`${URL}search/movie?api_key=${config.key}&language=en-US&query="${searchTerm}"&page=1`);
    return fetch(`${URL}search/movie?api_key=${config.key}&language=en-US&query="${searchTerm}"&page=1`)
        .then((response) => response.json())
        .then((data) => {
            console.log('data: ', data.results[0]);
            return data;
        })
}


//     "https://api.themoviedb.org/3/search/movie?api_key=29408d281b8290ab79293fd3f9c29a82&language=en-US&query=" +
//       searchTerm +
//       "&page=1&include_adult=false"