import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function AddToDo({submitHandler}) {

  const [text, setText] = useState('');

  const changeHandler = (val)=>{
    setText(val);
  }

  // *********************************
  // Added this code to try and clear TextInput on Submit
  // Text seems to clear in State (if you hit 'add task' again it says it's too short), but text is still showing on screen.
  // Come back to this later, add this function in on button
  // const addNewTodo = (text) =>{
  //   submitHandler(text)
  //   setText('')
  // }
  //*******************************/

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder=' New Task'
        onChangeText={changeHandler}
      />
      <Button
        onPress={()=>submitHandler(text)}
        // onPress={()=>addNewTodo(text)}
        title='Add Task'
        color='coral'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginBottom: 5,
    // paddingHorizontal: 8,
    // paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#555',
    // borderBottomWidth: 2,
    // borderBottomColor: '#ddd',
    // borderTopColor: '#eee',

    // borderBottomColor: 'red',
    // paddingTop: 16,
    // marginTop: 16,
    // borderColor: '#bbb',
    // borderWidth: 1,
    // borderStyle:  'dashed',
    borderRadius: 10,
  },
});