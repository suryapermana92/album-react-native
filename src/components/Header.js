import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const Header = (props) => {
        return (
            <View style={viewStyle}>
            <Text style={titleStyle}>{props.title}</Text>
            </View>
        );
    };
const styles = {
    viewStyle: {
        backgroundColor: '#A4E7F0',
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, heigth: 20 },
        shadowOpacity: 1,
        elevation: 5
        
    },
    titleStyle: {
        color: '#300A4F',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    }
};
const { titleStyle, viewStyle } = styles;


export default Header;
