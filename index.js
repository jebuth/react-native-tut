// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry, View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component: a javascript function that returns some amount of 
// jsx: a dialect of javascript that tells rective native what content to render.
const App = () => (
    <View style={styles.container}>
        <Header headerText={ 'headerText from index.js' } />
        <AlbumList />
    </View>   
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);


const styles = StyleSheet.create({
    container: {
       backgroundColor: '#FFF',
       flex: 1 // for scrollview
    }
  });
