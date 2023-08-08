import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import categorydata from '../assets/data/catgorydata'

const Category = () => {
  return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
              categorydata.map((itemdata) => {
                  const {id,title,img} = itemdata
                  return (
                    <View key={id} style={styles.containerBoxImg}>
                        <Image source={img} style={styles.catgoryImg} />
                          <Text style={styles.text}>{ title}</Text>
                </View>
                  )
              })
          }
         
    </ScrollView>
  )
}

export default Category

const styles = StyleSheet.create({
    containerBoxImg: {
        backgroundColor: '#faeee7',
        padding: 10,
        paddingHorizontal:12, 
   },

    catgoryImg: {
        height: 70,
        width: 70,
        borderRadius: 8,
       
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        alignSelf: 'center',
        marginTop:12,

    }
})