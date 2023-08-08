import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <View>
       <StatusBar barStyle="dark-content"/>
       <HomeScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})