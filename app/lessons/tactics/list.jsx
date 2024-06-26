import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../header'
import { Link } from 'expo-router'
import { Image } from 'react-native'
import { styles } from '../../styles/styles'

const TacticsList = () => {
  return (
    <View style={{minHeight: '100%'}}>
        <Header link='/lessons/list' name='Продвинутые тактики'></Header>
        <div style={styles.container}>
          <Link href='/lessons/tactics/pin' style={styles.link}>
            <Image source={require('../../images/pin.svg')} style={styles.icon}/> 
            <div style={styles.link__pair}>
              <p style={styles.link__heading}>Связка</p>
              <p style={styles.link__text}>Лишите фигуры свободы действия</p>
            </div>
          </Link>
          <Link href='/lessons/tactics/fork' style={styles.link}>
            <Image source={require('../../images/fork.svg')} style={styles.icon}/> 
            <div style={styles.link__pair}>
              <p style={styles.link__heading}>Вилки</p>
              <p style={styles.link__text}>Атакуйте всё в радиусе поражения</p>
            </div>
          </Link>
        </div>
    </View>
  )
}

export default TacticsList