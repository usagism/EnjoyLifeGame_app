import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function AddTodo() {

    return (
        <View style={styles.inputBox}>
            <TextInput 
            style={styles.input}
            placeholder='Things ToDo'
            onChangeText={changeHandler}/>
        </View>
    )
}