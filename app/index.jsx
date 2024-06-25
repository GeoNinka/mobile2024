import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'

import React from 'react'
import { Link, Redirect } from 'expo-router'

const index = () => {
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
            </div>
        </View>        
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#312e2b',
    }
})

export default index