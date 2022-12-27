import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <TouchableOpacity style={styles.buton}>
        <Text style={styles.Text}>Sign IN</Text>
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