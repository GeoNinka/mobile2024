import { View, Text } from 'react-native'

import React from 'react'
import { Link, Redirect } from 'expo-router'

const index = () => {
    return(
        <View>
            {/* Заголовок экрана */}
            <div style={{
            width: '100%',
            backgroundColor: 'red',
            }}>
            <Text>Шахматный самоучитель</Text>
            </div>
            <Text>
                Начните свой путь в мире шахмат с нашего самоучителя.
            </Text>
            {/* Ссылка на экран с тематиками уроков */}
            <Link href='/lessons'>Начать обучение!</Link> 
        </View>        
    )

}

export default index