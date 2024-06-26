import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../header'
import { Link } from 'expo-router'
import { styles } from '../../styles/styles'
import { TouchableHighlight } from 'react-native'
import { useState } from 'react'
import { Image } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

const Knight = () => {

  const [isPress, setIsPress] = useState(false)
  const [current, setCurrent] = useState(0)
  const lesson = [
    'Конь может ходить на 2 клетку вперёд и на 1 вбок в любом направлении.',
    'Конь может перепрыгивать другие фигуры, при это не важно, какого они цвета.',
    'Конь рубит фигуры на поле, на которое становится сам, но не полях через которые он проходит.',
  ]

  const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error setting item:', error);
    }
  };

  setItem(5, true)

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
        <Header link='/lessons/pieces/list' name='Конь'></Header>
        <div style={styles.container}>
          <div style={styles.lesson__wrapper}>
            <Image source={require('../../images/k1.png')} {...{style: current == 0 ? styles.lesson__image : {display: 'none'}}}/>
            <Image source={require('../../images/k2.png')} {...{style: current == 1 ? styles.lesson__image : {display: 'none'}}}/>
            <Image source={require('../../images/k3.png')} {...{style: current == 2 ? styles.lesson__image : {display: 'none'}}}/>
            <div style={styles.lesson__buttons}>
              <TouchableHighlight {...touchDecrement}>
                <Text style={{color: 'white'}}>Назад</Text>
              </TouchableHighlight>
              <div style={styles.lesson__rounds}>
                <div {...{style: current == 0 ? styles.lesson__round_active : styles.lesson__round}}/>
                <div {...{style: current == 1 ? styles.lesson__round_active : styles.lesson__round}}/>
                <div {...{style: current == 2 ? styles.lesson__round_active : styles.lesson__round}}/>
              </div>
              <TouchableHighlight {...touchIncrement}>
                <Text style={{color: 'white'}}>Дальше</Text>
              </TouchableHighlight>
            </div>
            <Text style={{color: 'white', marginTop: '20px', maxWidth: '320px', textAlign: 'center'}}>{lesson[current]}</Text>
          </div>
        </div>
    </View>
  )
}

export default Knight