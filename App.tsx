import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

//Components
import { Header } from './components/Header';
import { RandomFilm } from './components/RandomFilm';
import { GenrePicker } from './components/GenrePicker/GenrePicker';
import { Watchlist } from './components/Watchlist/Watchlist';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header/>
      <RandomFilm />
      <GenrePicker />
      <Watchlist />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
