import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getDiscover, getGenres } from '../api/api';
import { textStyles } from '../styles/TextStyles';
import { lookup } from './GenrePicker/GenreLookUp';

type RandomFilm = {
    title: string,
    genres: number[],
    overview: string,
}
 
export const RandomFilm = () => {
    const [movie, setMovie] = useState<RandomFilm>({title: "hello", genres: [123], overview: "hello"});
    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        getDiscover()
            .then(({ results }) => {
                console.log(results)
                const [{original_title, overview, genre_ids}] = results;

                setMovie({
                    title: original_title,
                    genres: genre_ids,
                    overview,
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        lookup(movie.genres)
            .then(setGenres)
            .catch((error) => {
                console.log(error);
            })
    }, [movie])

    return ( 
        <View style={styles.container}>
            <View style={styles.containerColumn}>
                <Text style={textStyles.h1}>{movie.title}</Text>
                <Text style={styles.discoverText}>{movie.overview}</Text>
                <View style={styles.genreContainer}>
                    {genres.map((genre) => (
                        <View style={styles.genreView}>
                            <Text style={styles.genreText}>{genre}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 175,
        borderRadius: 20,
        backgroundColor: "#C4C4C4",
    },
    containerColumn: {
        flexDirection: "column",
        padding: 10,
    },
    genreContainer: {
        flexDirection: "row",
        marginTop: 10,
    },
    genreView: {
        backgroundColor: "#A7A7A7",
        marginRight: 5,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 50,
    },
    genreText: {
        alignSelf: "center",
    },
    discoverText: {
        
    }
})