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
    'Игра проходит на поле, состоящим из 64 разноцветных полей. Расстановка фигур в каждой игре всегда одинаковая, первыми свой ход делают белые. Вертикали обозначены буквами, горизонтали цифрами, таким образом каждое поле имеет свой индекс. Белый король стоит на поле е1.',
  ] //Массив с текстовым содержанием уроков

  const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error setting item:', error);
    }
  };

  setItem(1, true) // Запись в локальное хранилище информации о прохождении урока
  
  return (
    <View style={{minHeight: '100%'}}>
        <Header link='/lessons/commonRules/list' name='Шахматная доска'></Header>
        <div style={styles.container}>
          <div style={styles.lesson__wrapper}>
            <Image source={require('../../images/board1.png')} {...{style: current == 0 ? styles.lesson__image : {display: 'none'}}}/>
            <Text style={{color: 'white', marginTop: '20px', maxWidth: '320px', textAlign: 'center'}}>{lesson[current]}</Text>
          </div>
        </div>
    </View>
  )
}

export default Pawn