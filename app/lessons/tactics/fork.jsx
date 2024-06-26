import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../header'
import { Link } from 'expo-router'
import { styles } from '../../styles/styles'
import { TouchableHighlight } from 'react-native'
import { useState } from 'react'
import { Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Pawn = () => {

  const [isPress, setIsPress] = useState(false)
  const [current, setCurrent] = useState(0)
  const lesson = [
    'Вилкой называется ситуация, когда фигура атакует сразу 2 фигуры противника, и отойдя одной из них от потеряет другую. В примере показано, как белые нападают на ладью и ферзя чёрных и готовы обменять коня на одну из более дорогих фигур.',
  ]

  const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error setting item:', error);
    }
  };

  setItem(11, true)

  const touchIncrement = {
    activeOpacity: 1,
    underlayColor: 'green',                               
    style: isPress ? styles.btnPress : styles.btnNormal, 
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {if (current < lesson.length - 1) setCurrent(current + 1)},
  }

  const touchDecrement = {
    activeOpacity: 1,
    underlayColor: 'green',                               
    style: isPress ? styles.btnPress : styles.btnNormal, 
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {if (current > 0) setCurrent(current - 1)},
  };
  
  return (
    <View style={{minHeight: '100%'}}>
        <Header link='/lessons/tactics/list' name='Вилка'></Header>
        <div style={styles.container}>
          <div style={styles.lesson__wrapper}>
            <Image source={require('../../images/fork.png')} {...{style: current == 0 ? styles.lesson__image : {display: 'none'}}}/>
            <Text style={{color: 'white', marginTop: '20px', maxWidth: '320px', textAlign: 'center'}}>{lesson[current]}</Text>
          </div>
        </div>
    </View>
  )
}

export default Pawn