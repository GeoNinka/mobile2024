import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Header from '../header'
import { StyleSheet } from 'react-native'



const Lessons = () => {
  return (
    <View style={{height: '100%'}}>
        <Header link='/' name='Темы уроков'></Header>
        <div style={styles.container}>
          <Link href='/lessons/commonRules/list' style={styles.link}>Основы шахмат</Link>
          <Link href='/lessons/pieces/list'>Как ходят фигуры</Link>

        </div>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      height: '100%',
      backgroundColor: '#312e2b',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'column'
  },
  link : {
    border: 'black solid 1px',
  }
})

export default Lessons