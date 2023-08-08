import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import VectorIcon from '../reuseable/VectorIcon'

const SubHeader = () => {
  return (
      <View style={styles.subheader}>
      <VectorIcon name="location" color="black" size={24} type="EvilIcons"/>    
      <Text style={styles.deleText}>Delevered to Shihab Bangladesh +73473</Text>
          <VectorIcon name="arrow-down" color="black" size={13} type="SimpleLineIcons"/>    
    </View>
  )
}

export default SubHeader


const styles = StyleSheet.create({
    subheader: {
        padding:12,
        flexDirection: 'row',
        backgroundColor: '#e3f6f5', 
        
    },
    deleText: {
        fontSize: 12,
        paddingHorizontal:10,
    }
})