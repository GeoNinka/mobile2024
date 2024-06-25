import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Header = (props) => {
  return (
    <View>
        <div style={{
            width: '100%',
            height: '55px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            backgroundColor: '#161212',
        }}>
        <Link href={props.link} style={{
          color: 'white',
          padding: '15px',
        }}>
          Назад.
        </Link>
        <Text href={props.link} style={{
          color: 'white',
          padding: '15px',
          fontSize: '20px',
        }}>
          {props.name}
        </Text>
        </div>
    </View>
  )
}

export default Header