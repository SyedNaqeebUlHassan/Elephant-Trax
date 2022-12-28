import { StyleSheet, View,ImageBackground, ScrollView,} from 'react-native'
import React from 'react'
import BackgroundImage from '../assets/Background.png'
import InputField from '../Components/InputField'
import Email from '../assets/Email.png'
import Button from '../Components/Button'
import Heading from '../Components/Heading'
import Title from '../Components/Title'
import ArrowImage from '../Components/ArrowImage'
const ResetPassScreen = ({navigation}) => {
  return ( 
          <View style={styles.container}>
                <ScrollView contentContainerStyle={{flex:1}}>
                    <ImageBackground style={{flexGrow:1}} source={BackgroundImage} >
                        <View style={{justifyContent:'center',alignItems:'center',position:'absolute'}}>
                            <ArrowImage navigation={()=>navigation.goBack()}/>
                            <Heading Heading="Reset Your Password"/>
                            <Title />
                            <InputField placeHolder='Enter your email' leftImage={Email} styleLeft={{height:36,width:36,marginLeft:-40}} />
                            <Button Title='Send Email'/>
                         </View>
                    </ImageBackground>
                </ScrollView>
          </View>  
  )
}

export default ResetPassScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
 
})