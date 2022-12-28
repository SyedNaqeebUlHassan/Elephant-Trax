import { StyleSheet, View,ImageBackground, ScrollView,Text} from 'react-native'
import React from 'react'
import BackgroundImage from '../assets/Background.png'
import InputField from '../Components/InputField'
import Password from '../assets/Password.png'
import Button from '../Components/Button'
import Heading from '../Components/Heading'
import Title from '../Components/Title'
import ArrowImage from '../Components/ArrowImage'
import SecureEye from '../assets/SecureEye.png'

const NewPasswordScreen = () => {
  return (
    <View style={styles.container}>
                <ScrollView contentContainerStyle={{flex:1}}>
                    <ImageBackground style={{flexGrow:1}} source={BackgroundImage}>
                        <View style={{justifyContent:'center',alignItems:'center',position:'absolute'}}>
                            <ArrowImage/>
                            <Heading Heading="Create New Password"/>
                            <Title />
                            <InputField placeHolder='Enter Your Password'  leftImage={Password} rightImage={SecureEye} styleLeft={{height:22,width:29, marginLeft:-40}} styleRight={{ width: 25,height:20.95,
                                 marginRight:-40,}} />
                            <Text style={styles.Text}>Must be at least 8 charcter & No</Text>
                            <InputField placeHolder='Enter Your Password'  leftImage={Password} rightImage={SecureEye} styleLeft={{height:22,width:29, marginLeft:-40}} styleRight={{ width: 25,height:20.95,
                                 marginRight:-40,}} />
                            <Text style={styles.Text}>Must be at least 8 charcter & No</Text>
                            <Button Title='Send Email'/>
                         </View>
                    </ImageBackground>
                </ScrollView>
          </View>  
  )
}

export default NewPasswordScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Text:{
    fontStyle:'normal',
    fontWeight:'400',
    fontSize:18,
    lineHeight:22,
    color:'white',
    paddingRight:90,
    marginTop:15,
    }
})