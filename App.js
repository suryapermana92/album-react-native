import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  const { backgroundStyle, authorStyle, dateStyle, contentStyle } = styles;
  const today = new Date();
  const date = `${today.getDate()}-${(today.getMonth() + 1)}-${today.getFullYear()}`;
  return (
    
    <View style={backgroundStyle}>
     
      
      <Header title='My Albums' />
      <AlbumList />
    
      </View>
  )
}
const styles = {
  backgroundStyle: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: 20
   
    
  },
  authorStyle: {
    color: '#294F0A',
    fontSize: 15
    
  },
  dateStyle: {
    color: 'black',
    fontSize: 15
    
  },
  contentStyle: {
    color: 'grey',
    
    paddingTop: 20,
    textAlign: 'justify',
    
    
  }
};
export default App;
