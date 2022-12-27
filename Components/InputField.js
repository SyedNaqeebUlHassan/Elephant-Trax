import { StyleSheet, Text, TextInput, View,Image } from 'react-native'
import React from 'react'

const InputField = ({image,image2,placeHolder,style}) => {
  return (
    <View  style={styles.wraper}>
      <Image
      style={style}
      source={image}
      />
      <TextInput 
      placeholder={placeHolder}
      style={{width:150,}}
      />
      <Image
      style={styles.img2}
      source={image2}
      />
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    wraper:{
        flexDirection:'row',
        backgroundColor:'white',
        paddingLeft:35,
        paddingRight:37,
        width: 359,
        height: 65,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-around',
        borderRadius:10,
    },
    img2:{
      width: 32.16,
      height: 20.95,
    }
})