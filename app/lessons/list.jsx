import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Header from '../header'
import { Image } from 'react-native'
import { styles } from '../styles/styles'



const Lessons = () => {
  return (
    <View style={{minHeight: '100%'}}>
        <Header link='/' name='Темы уроков'></Header>
        <div style={styles.container}>
          <Link href='/lessons/commonRules/list' style={styles.link}>
            <Image source={require('../images/board.svg')} style={styles.icon}/> 
            <div style={styles.link__pair}>
              <p style={styles.link__heading}>Основы шахмат</p>
              <p style={styles.link__text}>Ваши первые ходы</p>
            </div>
          </Link>
          <Link href='/lessons/pieces/list' style={styles.link}>
            <Image source={require('../images/pawn.svg')} style={styles.icon}/> 
            <div style={styles.link__pair}>
              <p style={styles.link__heading}>Как ходят фигуры</p>
              <p style={styles.link__text}>Король, пешки, две ладьи</p>
            </div>
          </Link>
          <Link href='/lessons/tactics/list' style={styles.link}>
            <Image source={require('../images/pawn.svg')} style={styles.icon}/> 
            <div style={styles.link__pair}>
              <p style={styles.link__heading}>Продвинутые тактики</p>
              <p style={styles.link__text}>Вилки, связки, контратака</p>
            </div>
          </Link>

        </div>
    </View>
  )
}


export default Lessons