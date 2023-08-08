import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Category from '../components/Category'

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <SubHeader />
      <Category/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})