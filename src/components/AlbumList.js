import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    //class level property
    state = { albums: [] };

    componentWillMount() {
        // make http get request
        // thne will run once response is complete
        // inherently aynchronous - taking some amount of 
        // time to complete network request. we have no idea how long..
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => this.setState({ albums: res.data }));
    }

    render() {
        console.log(this.state);

        return (
            <View>
                <Text>Album List!!</Text>
            </View>
        );
    }
}

export default AlbumList;
