import { StyleSheet, Text, View,Image, TextInput } from 'react-native'
import React from 'react'
import box from '../assets/box.png'
import InputField from '../Components/InputField'
import Email from '../assets/Email.png'
import Password from '../assets/Password.png'
import Eye from '../assets/Eye.png'
import Button from '../Components/Button'
import SocialLinks from '../Components/SocialLinks'
import Terms from '../Components/Terms'
const Login = () => {
  return (
    <View style={styles.container}>
          <Image
          source={box}
          style={{width:277,height:249}}
          />
          <Text style={styles.Text}>SIGN IN</Text>
          <InputField  placeHolder='Enter your email' image={Email} style={{height:36,width:36}} />
          <InputField placeHolder='Enter Password' image={Password} image2={Eye} style={{height:22,width:29}} />
          <Terms/>
          <Button/>
          <View style={styles.forgetWrapper}>
            <Text style={styles.forgetPassword}>Forgot password!</Text>
          </View>
          <Text style={styles.or}>OR</Text>
            <SocialLinks/>
          <Text style={styles.dontHave}>Don’t have an account! Sign Up</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#7166F9',
    },
    Text:{
        color:'white',
        fontSize:28,
        fontWeight:'700',
        lineHeight:33,
        fontStyle:'normal',
    },
    forgetWrapper:{
      alignItems:"flex-end",
      width: 359,
    },
    forgetPassword:{
      fontSize:18,
      lineHeight:22,
      fontWeight:'400',
      fontStyle:'normal',
      color:'white',
    },
    or:{
      color:'white',
      fontSize:20,
      lineHeight:24,
      fontWeight:'700',
      fontStyle:'normal',
    },
    dontHave:{
      color:'white',
      fontStyle:'normal',
      fontWeight:'400',
      fontSize:18,
      lineHeight:22
    }
})