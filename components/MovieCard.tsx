import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

interface Movie {
    overview: string,
    poster_path: string,
    original_title: string,
}

interface MovieCardProps {
    movie: Movie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
    console.log(movie.poster_path);

    return ( 
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}`}}
            />

            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.description}>{movie.overview}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginBottom: 10,
        paddingVertical: 10,
        paddingLeft: 10,
        width: "100%",
        height: 125,
        borderRadius: 10,
        backgroundColor: "#C4C4C4",
    },
    descriptionContainer: {
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 10,
        paddingRight: 90,
    },
    title: {
        fontWeight: "bold",
        fontSize: 15,
    },
    description: {
        fontSize: 10,
    },
    image: {
        borderRadius: 10,
        width: "20%",
        resizeMode: "contain",
    }
})