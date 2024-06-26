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

  const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error setting item:', error);
    }
  };

  setItem(4, true)

  const [isPress, setIsPress] = useState(false)
  const [current, setCurrent] = useState(0)
  const lesson = [
    'Чаще всего пешка ходит на одну клетку вперёд, если та не занята другой фигурой. Белые пешки ходят В сторону восьмой горизонтали, черные в сторону первой.',
    'Если пешка ещё не ходила, то своим первым ходом она может передвинутся на две свободные клетки вперёд.',
    'Пешка может рубить фигуры противника на одну клетку по диагонали.',
    'Если пешка противника сделала ход на 2 клетки вперёд и оказалось на 1 клетку сбоку от нашей пешки, то мы можем срубить её таким образом, как будто она сделала ход на одну клетку вперёд. Такой ход называется взятием на проходе.',
    'Достигнув последней горизонтали пешка может превратиться в любую фигуру. Будьте внимательны, превращая вашу пешку, иногда лучше превратить её не в ферзя, а в другую фигуру чтобы поставить форсированный мат или избежать пата.'
  ]

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
        <Header link='/lessons/pieces/list' name='Пешка'></Header>
        <div style={styles.container}>
          <div style={styles.lesson__wrapper}>
            <Image source={require('../../images/1.png')} {...{style: current == 0 ? styles.lesson__image : {display: 'none'}}}/>
            <Image source={require('../../images/2.png')} {...{style: current == 1 ? styles.lesson__image : {display: 'none'}}}/>
            <Image source={require('../../images/3.png')} {...{style: current == 2 ? styles.lesson__image : {display: 'none'}}}/>
            <Image source={require('../../images/4.png')} {...{style: current == 3 ? styles.lesson__image : {display: 'none'}}}/>
            <Image source={require('../../images/5.png')} {...{style: current == 4 ? styles.lesson__image : {display: 'none'}}}/>
            <div style={styles.lesson__buttons}>
              <TouchableHighlight {...touchDecrement}>
                <Text style={{color: 'white'}}>Назад</Text>
              </TouchableHighlight>
              <div style={styles.lesson__rounds}>
                <div {...{style: current == 0 ? styles.lesson__round_active : styles.lesson__round}}/>
                <div {...{style: current == 1 ? styles.lesson__round_active : styles.lesson__round}}/>
                <div {...{style: current == 2 ? styles.lesson__round_active : styles.lesson__round}}/>
                <div {...{style: current == 3 ? styles.lesson__round_active : styles.lesson__round}}/>
                <div {...{style: current == 4 ? styles.lesson__round_active : styles.lesson__round}}/>
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

export default Pawn