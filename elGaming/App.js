import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem'
export default function App() {
    const [todo, setTodo] = useState ([
        {
            todo: 'Work on Website',
            complete: false,
            key: '1'
        },
        {
            todo: 'Practice Saxophone',
            complete: false,
            key: '2'
        },
        {
            todo: 'Go to Gym',
            complete: false,
            key: '3'
        }
    ]);


    const pressHandler = (key) => {
        console.log(key)
        setTodo((prevList) => {
            return prevList.filter( todo => todo.key != key)
        })
    }
  return (

    <View style={styles.container}>
        <Header />
                <View style={styles.list}>
                  
                        <FlatList
                        data={todo}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                                <TodoItem item={item} pressHandler = {pressHandler} />
                            </TouchableOpacity>
                        )} />
                </View>
           
            <View style={styles.buttonContainer}></View>
                <Button title='update state' /> 
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
      borderWidth: 1,
      width: 200,
      padding: 5
  },
  inputBox: {
      padding: 20
  }

});
