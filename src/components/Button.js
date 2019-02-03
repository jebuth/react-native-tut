import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {

    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle}> 
                click 
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1, // expand to fill as much content as it can
        aligntSelf: 'stretch', // property of flexbox. stretch to fill limits of container
        backrgoundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },

    textStyle: {
        alignSelf: 'center', // center text inside button
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;
