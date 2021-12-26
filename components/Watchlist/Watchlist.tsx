import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

//Components
import { WatchlistItem } from './WatchlistItem';

export type Watchlist = {
    title: string,
    description: string,
}

const WATCHLIST: Watchlist[] = [
    {
        title: 'Guardians of the Galaxy',
        description: 'hdeiwo fiew foewi fow dnewodiejwi doeiw dowi',
    },
]

interface WatchlistProps {
    
}
 
export const Watchlist = () => {
    return ( 
        <View style={styles.watchlistContainer}>
            <Text style={styles.header}>Watchlist</Text>
            <ScrollView>
                {WATCHLIST.map((item) => {
                    return <WatchlistItem item={item} />
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    watchlistContainer: {
        flex: 1,
    },
    header: {
        fontSize: 24,
        marginTop: 7,
        marginLeft: 10,
    }
})
 