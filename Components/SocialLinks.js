import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Google from '../assets/Google.png'
import Insta from '../assets/Insta.png'
import Fb from '../assets/Fb.png'
const SocialLinks = () => {
  return (
    <View style={styles.container}>
      <Image
      style={styles.img}
      source={Fb}
      />
       <Image
      style={styles.img}
      source={Google}
      />
       <Image
      style={styles.img}
      source={Insta}
      />
    </View>
  )
}

export default SocialLinks

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:200,
    },
    img:{
        width:44,
        height:44,
    }
})