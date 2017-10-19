import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const Header = () => {
    const { titleStyle, viewStyle } = styles;

    const weather = 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=0fb96df37506f1175d52250c72f0e840';
  
    axios.get(weather)
        .then((response) => {
        console.log('SUCCESS', response);
    }).catch((error) => {
        console.log('ERROR', error);
    });

    return (
    <View style={viewStyle}>
      <Text style={titleStyle}>Welcome to React Native Course</Text>
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

export default Header;
