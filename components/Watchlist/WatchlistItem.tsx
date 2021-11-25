import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Watchlist } from './Watchlist';

interface WatchlistItemProps {
    item: Watchlist,
}

export const WatchlistItem = ({item}: WatchlistItemProps) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        marginRight: 10,
        padding: 10,
        height: 100,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "#C4C4C4",
    },
    title: {
        fontSize: 18,
    }
})
 