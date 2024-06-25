import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../header'
import { Link } from 'expo-router'

const King = () => {
  return (
    <View>
        <Header link='/lessons/pieces/list' name='Король'></Header>
        <Text>Король</Text>
    </View>
  )
}

export default King