import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

//Components
import { GenreCard } from './GenreCard';
import { getGenres } from '../../api/api';

export type GenreData = {
    id: number,
    name: string,
}

export const GenrePicker = () => {
    const [allGenres, setAllGenres] = useState<GenreData[]>([]);

    useEffect(() => {
        getGenres()
            .then((genres) => {
                setAllGenres(genres)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return ( 
        <View style={styles.container} >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {allGenres.map(({id, name}) => {
                    return <GenreCard key={id} title={name} />
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
    }
})