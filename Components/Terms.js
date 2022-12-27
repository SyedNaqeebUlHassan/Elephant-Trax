import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Check from '../assets/Check.png'
const Terms = () => {
  return (
    <View style={styles.container}>
      <View style={styles.checkWraper}>
        <Image
            style={{width:30,height:30}}
            source={Check}
        />
      </View>
      <Text style={styles.text}>I have accept term & conditions</Text>
    </View>
  )
}

export default Terms

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'red',
        width:300
    },
    checkWraper:{
        alignItems:'center',
        justifyContent:'center',
        borderColor:'white',
        borderWidth:5,
        width:36,
        height:36,
        borderRadius:5
    },
    text:{
        color:"white",
    }
})