import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header'

export default function App() {
  const [todos, setTodos] = useState([
    {text:'nap',key:'1'},
    {text:'create reactNative todo list',key:'2'},
    {text:'eat chips',key:'3'},
    {text:'rue eating chips',key:'4'},
  ])

  return (
    <View style={styles.container}>
      {/* Header Placeholder */}
      <Header />
      <View style={styles.content}>
        {/* Form */}
        <View style={styles.list}>
          <FlatList 
            data = {todos}
            renderItem = {( {item} ) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
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
