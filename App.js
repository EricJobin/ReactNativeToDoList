import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header'
import Todoitem from './components/todoitem'
import AddToDo from './components/addtodo'

export default function App() {
  const [todos, setTodos] = useState([
    {text:'nap',key:'1'},
    {text:'create reactNative todo list',key:'2'},
    {text:'eat chips',key:'3'},
    {text:'rue eating chips',key:'4'},
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) =>{
    if (text.length > 2){
      setTodos( (prevTodos)=>{
        return [
          {text: text, key: Math.random().toString() },
          ...prevTodos
        ] //Note, we are using square brackets after the return here because what we are returning is an array, with our prvious items and the new object we are adding
      });
      // changeHandler('')
    } else {
      Alert.alert('Input Too Short', 'Tasks must be at least 3 characters in length', [{text:'Dismiss'}])
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={()=>{Keyboard.dismiss()}}
    >
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>

          <View style={styles.list}>
            <FlatList 
              data = {todos}
              renderItem = {( {item} ) => (
                // <Text>{item.text}</Text>
                <Todoitem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
          <View style={styles.add}>
            <AddToDo submitHandler={submitHandler} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flex:1,
    padding: 30,
    paddingTop: 0,
    // backgroundColor: 'gold',
  },
  list: {
    flex:2,
    marginTop: 20,
    // backgroundColor: 'yellow',
  },
  add: {
    borderTopWidth: 3,
    borderColor: '#888',
    // flex:1,
    justifyContent: 'flex-end',
    // backgroundColor: 'blue',
    // marginTop: 50,
  }
});
