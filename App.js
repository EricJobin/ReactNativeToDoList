import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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
    setTodos( (prevTodos)=>{
      return [
        {text: text, key: Math.random().toString() },
        ...prevTodos
      ] //Note, we are using square brackets after the return here because what we are returning is an array, with our prvious items and the new object we are adding
    })
  }

  return (
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
        <AddToDo submitHandler={submitHandler}/>
      </View>
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
