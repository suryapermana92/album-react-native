import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Header from './src/components/Header'


const App = () => {
  const { backgroundStyle, authorStyle, dateStyle, contentStyle } = styles;
  const today = new Date();
  const date = `${today.getDate()}-${(today.getMonth() + 1)}-${today.getFullYear()}`;
  return (
    
    <View style={backgroundStyle}>
      <View>
      
      <Header />
      <Text style={authorStyle}>Posted by Surya Permana</Text>
      <Text style={dateStyle}>on {date}</Text>
      <ScrollView style={{ marginTop: 10, elevation: 5 }}>
      <Text style={contentStyle}>
      Lorem ipsum dolor sit amet, ex usu iriure explicari abhorreant. 
      Eos cu dicunt graecis mandamus.
      Vis id veritus dissentias, has fugit quidam tincidunt in.
      Ad zril percipitur mel, ius quando tritani ad, in qui propriae oportere aliquando.
      Animal efficiendi id pri, duo ea saepe ignota.
      Utroque quaerendum adversarium usu ex, vix cu paulo indoctum. 
      Sed at atqui alterum appareat.
      Lorem ipsum dolor sit amet, ex usu iriure explicari abhorreant. 
      Eos cu dicunt graecis mandamus.
      Vis id veritus dissentias, has fugit quidam tincidunt in.
      Ad zril percipitur mel, ius quando tritani ad, in qui propriae oportere aliquando.
      Animal efficiendi id pri, duo ea saepe ignota.
      Utroque quaerendum adversarium usu ex, vix cu paulo indoctum. 
      Sed at atqui alterum appareat.Lorem ipsum dolor sit amet, ex usu iriure explicari abhorreant. 
      Eos cu dicunt graecis mandamus.
      Vis id veritus dissentias, has fugit quidam tincidunt in.
      Ad zril percipitur mel, ius quando tritani ad, in qui propriae oportere aliquando.
      Animal efficiendi id pri, duo ea saepe ignota.
      Utroque quaerendum adversarium usu ex, vix cu paulo indoctum. 
      Sed at atqui alterum appareat.Lorem ipsum dolor sit amet, ex usu iriure explicari abhorreant. 
      Eos cu dicunt graecis mandamus.
      Vis id veritus dissentias, has fugit quidam tincidunt in.
      Ad zril percipitur mel, ius quando tritani ad, in qui propriae oportere aliquando.
      Animal efficiendi id pri, duo ea saepe ignota.
      Utroque quaerendum adversarium usu ex, vix cu paulo indoctum. 
      Sed at atqui alterum appareat.Lorem ipsum dolor sit amet, ex usu iriure explicari abhorreant. 
      Eos cu dicunt graecis mandamus.
      Vis id veritus dissentias, has fugit quidam tincidunt in.
      Ad zril percipitur mel, ius quando tritani ad, in qui propriae oportere aliquando.
      Animal efficiendi id pri, duo ea saepe ignota.
      Utroque quaerendum adversarium usu ex, vix cu paulo indoctum. 
      Sed at atqui alterum appareat.
      Lorem ipsum dolor sit amet, ex usu iriure explicari abhorreant. 
      Eos cu dicunt graecis mandamus.
      Vis id veritus dissentias, has fugit quidam tincidunt in.
      Ad zril percipitur mel, ius quando tritani ad, in qui propriae oportere aliquando.
      Animal efficiendi id pri, duo ea saepe ignota.
      Utroque quaerendum adversarium usu ex, vix cu paulo indoctum. 
      Sed at atqui alterum appareat.Lorem ipsum dolor sit amet, ex usu iriure explicari abhorreant. 
      Eos cu dicunt graecis mandamus.
      Vis id veritus dissentias, has fugit quidam tincidunt in.
      Ad zril percipitur mel, ius quando tritani ad, in qui propriae oportere aliquando.
      Animal efficiendi id pri, duo ea saepe ignota.
      Utroque quaerendum adversarium usu ex, vix cu paulo indoctum. 
      Sed at atqui alterum appareat.Lorem ipsum dolor sit amet, ex usu iriure explicari abhorreant. 
      Eos cu dicunt graecis mandamus.
      Vis id veritus dissentias, has fugit quidam tincidunt in.
      Ad zril percipitur mel, ius quando tritani ad, in qui propriae oportere aliquando.
      Animal efficiendi id pri, duo ea saepe ignota.
      Utroque quaerendum adversarium usu ex, vix cu paulo indoctum. 
      Sed at atqui alterum appareat.Lorem ipsum dolor sit amet, ex usu iriure explicari abhorreant. 
      Eos cu dicunt graecis mandamus.
      Vis id veritus dissentias, has fugit quidam tincidunt in.
      Ad zril percipitur mel, ius quando tritani ad, in qui propriae oportere aliquando.
      Animal efficiendi id pri, duo ea saepe ignota.
      Utroque quaerendum adversarium usu ex, vix cu paulo indoctum. 
      Sed at atqui alterum appareat.
      
        </Text>
        </ScrollView>
    </View>
    </View>
    
  );
};

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
