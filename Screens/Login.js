import { StyleSheet, Text, View,Image, TextInput, ScrollView,} from 'react-native'
import React,{useState} from 'react'
import box from '../assets/box.png'
import InputField from '../Components/InputField'
import Email from '../assets/Email.png'
import Password from '../assets/Password.png'
import Button from '../Components/Button'
import SocialLinks from '../Components/SocialLinks'
import Terms from '../Components/Terms'
import Background from '../Components/Background'
import SecureEye from '../assets/SecureEye.png'
const Login = ({navigation}) => {
  
  return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flex:1}}>
              <Image
              source={box}
              style={{width:277,height:249,marginLeft:50,marginTop:20,}}
              />
              <Text style={styles.Text}>SIGN IN</Text>
              <InputField  placeHolder='Enter your email' leftImage={Email} styleLeft={{height:36,width:36,marginLeft:-40}} />
              <InputField secureEntry={true} placeHolder='Enter Password'  leftImage={Password} rightImage={SecureEye} styleLeft={{height:22,width:29, marginLeft:-40}} styleRight={{ width: 25,height:20.95,
                marginRight:-40,}} />
              <Terms/>
              <Button Title='Sign In'/>
              <View style={styles.forgetWrapper}>
                <Text onPress={()=>navigation.navigate("Reset Pass")} style={styles.forgetPassword}>Forgot password!</Text>
              </View>
              <Text style={styles.or}>OR</Text>
                <SocialLinks/>
              <Text onPress={()=>navigation.navigate('Sign Up')} style={styles.dontHave}>Don’t have an account!<Text style={{textDecorationLine:'underline',fontSize:18,fontWeight:'600'}}>SignUp</Text></Text>
              </ScrollView>
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
        textAlign:'center',
    },
    forgetWrapper:{
      alignItems:"flex-end",
      width: 359,
      marginTop:10
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
      textAlign:'center',
      marginTop:10,
    },
    dontHave:{
      color:'white',
      fontStyle:'normal',
      fontWeight:'400',
      fontSize:15,
      lineHeight:22,
      marginTop:20,
      textAlign:'center',
    }
})