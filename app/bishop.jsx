import { View, Text } from 'react-native'
import React from 'react'
import Header from './header'
import { Link } from 'expo-router'

const Bishop = () => {
  return (
    <View>
        <Header link='/pieces' name='Слон'></Header>
        <Text>Bishop</Text>
    </View>
  )
}

export default Bishop