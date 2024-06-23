import { View, Text } from 'react-native'
import React from 'react'
import Header from './header'
import { Link } from 'expo-router'

const PiecesLessons = () => {
  return (
    <View>
        {/* Заголовок экрана */}
        <Header link='/lessons' name='Как ходят фигуры'></Header>
        {/* Список ссылок на уроки */}
        <Link href='/pawn'>Пешка</Link>
        <Link href='/bishop'>Слон</Link>
        <Link href='/king'>Король</Link>
    </View>
  )
}

export default PiecesLessons