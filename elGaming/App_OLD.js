import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { blue } from 'ansi-colors';

export default function App() {
  const [name, setName] = useState('Jordan');
  const [gameName, setGame] =useState('March 28, 2005')
  const [gameList, setList] = useState([
    { name: 'Yoshi Island', key: '1' },
    { name: 'Kingdom Hearts', key: '2' },
    { name: 'Final Fantasy X', key: '3' },
    { name: 'Biohazard 4', key: '4' },
    { name: 'Cyberpunk 2077', key: '5' },
    { name: 'Judge Eyes', key: '6' },
    { name: 'Red Dead Redemption', key: '7' },
    { name: 'Pokemon: Sword', key: '8' }

  ])
  const pressHandler = (key) => {
    console.log(key);
    setList((prevGame) =>{
      return prevGame.filter(gameList => gameList.key != key)
    })
  }
  const clickHandler = () => {
    setName('Metal Gear Solid 4');
    setGame('April 3, 2020')
  }
  return (

    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList 
        numColumns={2}
        data={gameList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
        />

       {/* <ScrollView>
      { gameList.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      )}
          </ScrollView>  */}

      <Text>Enter Name:</Text>
        <TextInput 
        style={styles.input}
        placeholder='Enter Game Name'
        onChangeText={(val) => setName(val)} />

      <Text>Enter Release Date</Text>
        <TextInput 
        style={styles.input}
        placeholder='Release Date'
        onChangeText={(val) => setGame(val)} />

        {/* <View style={styles.header}>
          <Text style={styles.boldText}>Welcome to the new world of Mobile Web Development Jordan!!!</Text>
        </View> */}

        <View style={styles.gameAlign}>
          <Text>Games: {name}</Text>
        
          <Text>Release Date: {gameName} </Text>
          
          <View style={styles.buttonContainer}></View>
            <Button title='update state' onPress={clickHandler} />
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
    paddingTop: 30,
    paddingHorizontal: 30
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  boldText: {
    fontWeight: 'bold'
  },
  gameAlign: {
    fontWeight: 'bold',
    fontSize: 2,
    padding: 20,
    backgroundColor: 'green'
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#666',
    padding: 10,
    margin: 10,
    width: 200
  },
  item: {
    padding: 10,
    margin: 20,
    backgroundColor: 'lightblue',
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 20
    
  }
});
