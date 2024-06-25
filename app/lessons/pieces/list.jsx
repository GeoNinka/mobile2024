import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../header'
import { Link } from 'expo-router'

const PiecesLessons = () => {
  return (
    <View>
        {/* Заголовок экрана */}
        <Header link='/lessons/list' name='Как ходят фигуры'></Header>
        {/* Список ссылок на уроки */}
        <Link href='/lessons/pieces/pawn'>Пешка</Link>
        <Link href='/lessons/pieces/bishop'>Слон</Link>
        <Link href='/lessons/pieces/king'>Король</Link>
    </View>
  )
}

export default PiecesLessons