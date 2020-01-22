import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler }) {
    
    return (
        <TouchableOpacity  onPress={() => pressHandler(item.key)}>
            <Text>{item.todo}</Text>
        </TouchableOpacity>
    )

}