import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Todoitem({item, pressHandler}) {
 
  return (
    <TouchableOpacity onPress={()=> pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialCommunityIcons name='trash-can-outline'size={18} color='#333'/>
        <Text> - {item.text}</Text>
      </View>    
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingTop: 12,
    paddingBottom: 6,
    paddingLeft: 6,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle:  'dashed',
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
});