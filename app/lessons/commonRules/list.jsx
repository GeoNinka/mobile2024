import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../header'
import { Link } from 'expo-router'

const CommonRules = () => {
  return (
    <View>
        <Header link='/lessons/list' name='Основные правила'></Header>
        <Link href='/lessons/commonRules/board'>Шахматная доска</Link>
        <Text>Мат</Text>
        <Text>Ничья</Text>
    </View>
  )
}

export default CommonRules