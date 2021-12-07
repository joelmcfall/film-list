import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, SafeAreaView } from 'react-native';
 
export const Header = () => {
    const [newTodo, setNewTodo] = useState<string>();
    
    return (
        <>
            <View style={styles.header}>
                <TextInput 
                    style={styles.search}
                    placeholder={"search"}
                    value={newTodo}
                    onChangeText={(text) => setNewTodo(text)}
                />
                <View style={styles.button}>
                    <Text>X</Text>
                </View>
            </View>
            {newTodo !== "" && 
                <View style={styles.searchView}>
                    <Text>Movies here</Text>
                </View>
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
        width: "100%",
        height: "120%",
        zIndex: 3, 
        elevation: 3, 
        backgroundColor: "white",
    },
    button: {
        marginHorizontal: 5,
        justifyContent: "center",
    }
})
 