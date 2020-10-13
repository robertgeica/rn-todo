import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const AddItem = ({addItem}) => {

  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput 
        placeholder="Add new todo" 
        style={styles.input} 
        onChangeText={onChange}
        defaultValue={text}
      />

      <TouchableOpacity 
        style={styles.btn} 
        onPress={() => {addItem(text); setText('');}}
      >
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
        </Text>

      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#2980b9',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  }
  
});

export default AddItem;