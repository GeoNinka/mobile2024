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
    'Игра заканчивается, когда король одного из игроков находится под ударом фигуры противника и не может сделать ход чтобы выйти из под него.',
  ]
  
  const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error setting item:', error);
    }
  };

  setItem(3, true)

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
        <Header link='/lessons/commonRules/list' name='Мат'></Header>
        <div style={styles.container}>
          <div style={styles.lesson__wrapper}>
            <Image source={require('../../images/mate.png')} {...{style: current == 0 ? styles.lesson__image : {display: 'none'}}}/>
            <Text style={{color: 'white', marginTop: '20px', maxWidth: '320px', textAlign: 'center'}}>{lesson[current]}</Text>
          </div>
        </div>
    </View>
  )
}

export default Pawn