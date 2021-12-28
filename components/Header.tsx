import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import { getSearch } from '../api/api';
import { MovieCard } from './MovieCard';
 
export const Header = () => {
    const [movieSearch, setMovieSearch] = useState<string>("");
    const [movieList, setMovieList] = useState<any[]>([]);

    useEffect(() => {
        getSearch(movieSearch)
            .then(({ results }) => {
                setMovieList(results)
            });
    }, [movieSearch])
    
    return (
        <>
            <View style={styles.header}>
                <TextInput 
                    style={styles.search}
                    placeholder={"search"}
                    value={movieSearch}
                    onChangeText={(text) => setMovieSearch(text)}
                />
                <View style={styles.button}>
                    <Text>X</Text>
                </View>
            </View>
            {movieSearch !== "" && 
                <ScrollView style={styles.searchView}>
                    {movieList.map((movie) => {
                        return (
                            <MovieCard movie={movie}/>
                        )
                    })}
                </ScrollView>
            }
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: "#C4C4C4",
    },
    search: {
        flex: 1,
        padding: 15,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: "white",
    },
    searchView: {
        marginTop: 10,
        width: "100%",
        height: "100%",
        zIndex: 3, 
        elevation: 3, 
        backgroundColor: "white",
    },
    button: {
        marginHorizontal: 5,
        justifyContent: "center",
    },
    image: {
        borderRadius: 10,
        width: "100%",
        resizeMode: "contain",
    }
})
 