import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Header = (props) => {
  return (
    <View>
        <div style={{
            width: '100%',
            backgroundColor: 'red',
        }}>
        <Link href={props.link}>Назад.</Link>
        <Text>{props.name}</Text>
        </div>
    </View>
  )
}

export default Header