import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../header'
import { Link } from 'expo-router'
import { Image } from 'react-native'
import { styles } from '../../styles/styles'

const CommonRules = () => {
  return (
    <View style={{minHeight: '100%'}}>
        <Header link='/lessons/list' name='Основы шахмат'></Header>
        <div style={styles.container}>
          <Link href='/lessons/commonRules/board' style={styles.link}>
            <Image source={require('../../images/board.svg')} style={styles.icon}/> 
            <div style={styles.link__pair}>
              <p style={styles.link__heading}>Шахматная доска</p>
              <p style={styles.link__text}>64 чёрно-белых клетки</p>
            </div>
          </Link>
          <Link href='/lessons/commonRules/pieces' style={styles.link}>
            <Image source={require('../../images/pawn.svg')} style={styles.icon}/> 
            <div style={styles.link__pair}>
              <p style={styles.link__heading}>Фигуры</p>
              <p style={styles.link__text}>Ваши основные силы</p>
            </div>
          </Link>
          <Link href='/lessons/commonRules/mate' style={styles.link}>
            <Image source={require('../../images/king.svg')} style={styles.icon}/> 
            <div style={styles.link__pair}>
              <p style={styles.link__heading}>Мат</p>
              <p style={styles.link__text}>Конец игры</p>
            </div>
          </Link>

        </div>
    </View>
  )
}

export default CommonRules