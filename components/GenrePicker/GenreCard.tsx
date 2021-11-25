import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface GenreCardProps {
    title: string
}

export const GenreCard = ({title}: GenreCardProps) => {
    return ( 
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 125,
        height: 125,
        marginHorizontal: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C4C4C4",
    }
})