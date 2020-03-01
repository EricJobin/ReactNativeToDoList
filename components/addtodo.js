import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function AddToDo({submitHandler}) {

  const [text, setText] = useState('');

  const changeHandler = (val)=>{
    setText(val);
  }


  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='New Task'
        onChangeText={changeHandler}
      />
      <Button
        onPress={()=>submitHandler(text)}
        title='Add Task'
        color='coral'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // paddingTop: 16,
    // marginTop: 16,
    // borderColor: '#bbb',
    // borderWidth: 1,
    // borderStyle:  'dashed',
    // borderRadius: 10,
  },
});