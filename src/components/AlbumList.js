import React,  { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios'

class AlbumList extends Component {
    state = { albums: [] }

    componentWillMount() {
        const url = 'https://59ed5606ff7d5d00128e085a.mockapi.io/api/albums';
        axios.get(url)
        .then((response) => this.setState({ albums: response.data }))
        .catch((error) => console.log(error));
        console.log('abc');
    }
    renderAlbums() {
        if (this.state.albums.length > 0) {
            
        return (
            this.state.albums.map(data => 
                <View key={data.title} style={styles.viewStyle}>
                <Text>{data.title}</Text>
                </View>
            )
        )
    }
    }
    render() {
        console.log('this render album', this.state.albums)
        return (
           
        <View>
            {this.renderAlbums()}
        </View>
        );
    }
}
const styles = {
    viewStyle: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#d8fdff',
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 5
       
    }
}
export default AlbumList;
