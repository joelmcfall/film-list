import React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';

interface Movie {
    overview: string,
    poster_path: string,
    original_title: string,
}

interface MovieCardProps {
    movie: Movie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
    return ( 
        <View style={styles.help}>
            <Image
                style={styles.image}
                source={{uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}`}}
            />

            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text numberOfLines={3} style={styles.description}>{movie.overview}</Text>
                <TouchableOpacity>
                    <Text>{"+Watch"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    help: {
        flexDirection: "row",
        paddingVertical: 5,
        backgroundColor: "#C3C3C3",
        width: "95%",
        marginBottom: 10,
        alignSelf: "center",
    },
    descriptionContainer: {
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 5,
        width: "100%",
        flex: 1,
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
        height: 100,
        resizeMode: "contain",
    }
})