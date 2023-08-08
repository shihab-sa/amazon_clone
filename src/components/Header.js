import { StyleSheet, Text, View,SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import Colors from '../styles/Colors'
import VectorIcon from '../reuseable/VectorIcon'

const Header = () => {
  return (
   
    <View style={styles.headerSubContainer}>
      <View style={styles.container}>
      <View style={styles.inputText}>
      <VectorIcon name="search1" size={24} color="black" type="AntDesign" />
          <TextInput placeholder='Enter Your Need' placeholderTextColor="black" /> 
          <VectorIcon name="scan1" size={24} color="black" type="AntDesign" />
        </View>
        <VectorIcon name="keyboard-voice" size={24} color="black" type="MaterialIcons" />  
        </View>
    </View>
   
  )
}

export default Header

const styles = StyleSheet.create({
  headerSubContainer: {
    padding: 10,
    backgroundColor: '#8bd3dd',   
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },

  inputText: {
    flexDirection: 'row',
    justifyContent:'space-between',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor:'#fffffe',
    backgroundColor:'#FFFFFF',
    width:'90%'
  }
})