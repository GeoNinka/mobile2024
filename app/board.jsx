import { View, Text } from 'react-native'
import React from 'react'
import Header from './header'
import { Link } from 'expo-router'

const Board = () => {
  return (
    <View>
        <Header link='/commonRules' name='Шахматная доска'></Header>
        <Text>Board</Text>
    </View>
  )
}

export default Board