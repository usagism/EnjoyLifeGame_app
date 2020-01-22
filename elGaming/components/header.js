import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>TODO List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'lightblue',
        height: 80,
        paddingTop: 38
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      },

});