// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry, View, StyleSheet } from 'react-native';
import Header from './src/components/header';

// Create a component: a javascript function that returns some amount of 
// jsx: a dialect of javascript that tells rective native what content to render.
const App = () => (
    <View style={styles.container}>
        <Header />
    </View>   
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });