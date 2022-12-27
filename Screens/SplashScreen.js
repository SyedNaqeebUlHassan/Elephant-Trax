import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
const SplashScreen = () => {
  return (
    <View style={styles.container}>
            {/* <View style={styles.innerContainer}> 
                <Image style={styles.image} source={require('../assets/Logo.png')} alt='Logo Image'/>
                <Text style={styles.text}>Elephant Trax</Text>       
            </View> */}
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#7166F9',
    },
    innerContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        height:170,
        width:158,
        position:'absolute',
    },
    text:{
        color:'white',
        marginTop:240,
        fontSize:24,
    }
})