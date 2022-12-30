import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({Title,style,Navigation,}) => {
  return (
    <TouchableOpacity style={style} onPress={Navigation}  >
        <Text style={styles.Text}>{Title}</Text>
    </TouchableOpacity>
    
  )
}

export default Button

const styles = StyleSheet.create({
    buton:{
        backgroundColor:'#FFDE77',
        width: 359,
        height: 65,
        borderRadius:10,   
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    Text:{
        textAlign:'center',
        color:'black',
        fontStyle:'normal',
        fontWeight:'700',
        fontSize:20,
        lineHeight:24,
    }
})