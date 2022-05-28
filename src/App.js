import React,{useState} from 'react';
import { SafeAreaView, View, FlatList, TextInput } from 'react-native';
import SongCard from './components/SongCard/SongCard';
import music_data from './music-data.json';
import styles from './App.styles'
import SearchBar from './components/SearchBar';

function App() {
  const [data, setData] = useState(music_data);

  const onChangeInputText = (text) => {
    const newData = music_data.filter(item => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });
    setData(newData);
  }

  const renderSongCard = ({item}) => <SongCard song={item} />

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onChangeInputText={onChangeInputText} />
      <FlatList
      data={data}
      renderItem = {renderSongCard}
      keyExtractor = {(item) => item.id}
      ItemSeparatorComponent = {() => <View style={styles.itemSeparator} />}
      />
    </SafeAreaView>
  )
}

export default App;
