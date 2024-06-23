import { View, Text } from 'react-native'
import React from 'react'
import Header from './header'
import { Link } from 'expo-router'

const Pawn = () => {
  return (
    <View>
        {/* Заголовок урока с ссылкой на список уроков данной тематики */}
        <Header link='/pieces' name='Пешка'></Header>
        {/* Содержание урока */}
        <Text>Pawn</Text>
    </View>
  )
}

export default Pawn