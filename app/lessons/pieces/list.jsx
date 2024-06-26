import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../header'
import { Link } from 'expo-router'
import { styles } from '../../styles/styles'
import { Image } from 'react-native'

const PiecesLessons = () => {
  return (
    <View style={{minHeight: '100%'}}>
        <Header link='/lessons/list' name='Как ходят фигуры'></Header>
        <div style={styles.container}>
          <Link href='/lessons/pieces/pawn' style={styles.link}>
            <Image source={require('../../images/pawn.svg')} style={styles.icon}/> 
            <div style={styles.link__pair}>
              <p style={styles.link__heading}>Пешка</p>
              <p style={styles.link__text}>Всегда идёт вперёд</p>
            </div>
          </Link>
          <Link href='/lessons/pieces/knight' style={styles.link}>
            <Image source={require('../../images/knight.svg')} style={styles.icon}/> 
            <div style={styles.link__pair}>
              <p style={styles.link__heading}>Конь</p>
              <p style={styles.link__text}>Та самая буква Г</p>
            </div>
          </Link>
          <Link href='/lessons/pieces/bishop' style={styles.link}>
            <Image source={require('../../images/bishop.svg')} style={styles.icon__bishop}/> 
            <div style={styles.link__pair}>
              <p style={styles.link__heading}>Слон</p>
              <p style={styles.link__text}>Основа атаки</p>
            </div>
          </Link>
          <Link href='/lessons/pieces/rook' style={styles.link}>
            <Image source={require('../../images/rook.svg')} style={styles.icon}/> 
            <div style={styles.link__pair}>
              <p style={styles.link__heading}>Ладья</p>
              <p style={styles.link__text}>Каменная поддержка</p>
            </div>
          </Link>
          <Link href='/lessons/pieces/queen' style={styles.link}>
            <Image source={require('../../images/queen.svg')} style={styles.icon}/> 
            <div style={styles.link__pair}>
              <p style={styles.link__heading}>Ферзь</p>
              <p style={styles.link__text}>Фигура ценой в 9 пешек</p>
            </div>
          </Link>
          <Link href='/lessons/pieces/king' style={styles.link}>
            <Image source={require('../../images/king.svg')} style={styles.icon}/> 
            <div style={styles.link__pair}>
              <p style={styles.link__heading}>Король</p>
              <p style={styles.link__text}>Самая важная фигура</p>
            </div>
          </Link>
        </div>
    </View>
  )
}

export default PiecesLessons