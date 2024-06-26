import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'

import { useEffect } from 'react'

import React, { useState } from 'react'
import { Link, Redirect } from 'expo-router'

import AsyncStorage from '@react-native-async-storage/async-storage'

const index = () => {

    const [progression, setProgression] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false
    }) // Массив с пройденными уроками

    const setItem = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error setting item:', error);
        }
    }; // Функция для записи значения в локальное хранилище 

    const getItem = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value != null ? JSON.parse(value) : null;
        } catch (error) {
            console.error('Error getting item:', error);
            return null;
        }
    }; // Функция для получения значения из локального хранилиза

    useEffect(() => {
        let list = {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
            7: false,
            8: false,
            9: false,
            10: false,
            11: false
        } // шаблон пройденных уроков

        for(let i = 1; i < 12; i++) {
            getItem(i).then((res) => {
                list[i] = res
            }) // Перебор локального хранилища по ключам от 1 до 11 и запись в шаблон
        } 
        setProgression(list) // Присвоение стейту с прогрессом прохождения значения шаблона
    }, [setProgression])

    return(
        <View style={{
            height: '100%',
            backgroundColor: '#312e2b',
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            flexDirection: 'column'
            
            }}>
            {/* Заголовок экрана */}
            <div style={{
            height: '55px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            backgroundColor: '#161212',
            }}>
            <Text style={{
                color: 'white',
                padding: '15px',
                fontSize: '20px',
            }}>Шахматный самоучитель</Text>
            </div>
            <div  style={{
            height: '100%',
            backgroundColor: '#312e2b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: '20px',
                    textAlign: 'center',
                    maxWidth: '360px'
                }}>
                    Начните свой путь в мире шахмат с нашего самоучителя.
                </Text>
                {/* Ссылка на экран с тематиками уроков */}
                <Link href='/lessons/list' style={{
                    color: 'white',
                    backgroundColor: 'green',
                    width: '240px',
                    textAlign: 'center',
                    padding: '15px',
                    marginTop: '20px',
                    fontSize: '16px',
                    borderRadius: '8px',
                }}>Начать обучение!</Link> 
                <Text style={{
                    color: 'white',
                    fontSize: '20px',
                    textAlign: 'center',
                    maxWidth: '360px'
                }}>
                    Прогресс уроков.
                </Text>
                {/* Прогресс уроков, стиль присваивается в зависимости от значения стейта с прогрессом */}
                <div style={styles.lesson__rounds}>
                    <div {...{style: progression[1] == true ? styles.lesson__round_active : styles.lesson__round}}/>
                    <div {...{style: progression[2] == true ? styles.lesson__round_active : styles.lesson__round}}/>
                    <div {...{style: progression[3] == true ? styles.lesson__round_active : styles.lesson__round}}/>
                    <div {...{style: progression[4] == true ? styles.lesson__round_active : styles.lesson__round}}/>
                    <div {...{style: progression[5] == true ? styles.lesson__round_active : styles.lesson__round}}/>
                    <div {...{style: progression[6] == true ? styles.lesson__round_active : styles.lesson__round}}/>
                    <div {...{style: progression[7] == true ? styles.lesson__round_active : styles.lesson__round}}/>
                    <div {...{style: progression[8] == true ? styles.lesson__round_active : styles.lesson__round}}/>
                    <div {...{style: progression[9] == true ? styles.lesson__round_active : styles.lesson__round}}/>
                    <div {...{style: progression[10] == true ? styles.lesson__round_active : styles.lesson__round}}/>
                    <div {...{style: progression[11] == true ? styles.lesson__round_active : styles.lesson__round}}/>
                </div>
            </div>

        </View>        
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#312e2b',
    },
    lesson__round: {
        width: '8px',
        height: '8px',
        backgroundColor: 'gray',
        borderRadius: '100%',
    },
    lesson__round_active: {
        width: '8px',
        height: '8px',
        backgroundColor: 'orange',
        borderRadius: '100%',
    },
    lesson__rounds: {
        display: 'flex',
        flexDirection: "row",
        width: '30%',
        justifyContent: "space-around",
        alignItems: "center",
    }, 
})

export default index