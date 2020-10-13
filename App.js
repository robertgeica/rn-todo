import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';


import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


const App = () => {

  const [items, setItems] = useState([
    {id: 44, text: 'rn app'},
    {id: 1, text: 'cli app'},
    {id: 11, text: 'full stack app'}
  ]);

  const handleDeleteItem = (id) => {
    const newItems = items.filter(item => item.id != id);
    console.log('deleted');
    setItems(newItems);
  }

  const handleAddItem = (text) => {
    if(!text) {
      console.log('enter text');
    } else {
      const newItems = [...items, {id: Math.random(), text}];
      setItems(newItems);
    }

    
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={handleAddItem}/>
      <FlatList 
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={handleDeleteItem} />
        )}
        keyExtractor={item => item.id.toString()}
      />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }


});

export default App;