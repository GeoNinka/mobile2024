import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Header from './header'


const Lessons = () => {
  return (
    <View>
        <Header link='/' name='Темы уроков'></Header>
        <Link href='commonRules'>Основные правила</Link>
        <Link href='/pieces'>Как ходят фигуры</Link>
    </View>
  )
}

export default Lessons