import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundImage from '../assets/Background.png'
import Header from '../Components/Header'
import Humburger from '../assets/HumbBurrger.png';
import Button from '../Components/Button';

const PrivacyPolicyScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={{flex:1}}>
        <ImageBackground style={{flexGrow:1}} source={BackgroundImage}>
          <View style={styles.componentWraper}>
            <Header leftImage={Humburger} leftImageStyle={styles.HumImage} navigateTo={()=>navigation.navigate('Profile')} />
            <Text style={styles.privacy}>Privacy Policy</Text>
            <Text style={styles.textPrivacy}>Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard 
            dummy text ever since the 1500s,
            </Text>
            <Text style={styles.textPrivacy}>Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard 
            dummy text ever since the 1500s,
            </Text>
            <Text style={styles.textPrivacy}>Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard 
            dummy text ever since the 1500s,
            </Text>
            <Text style={styles.textPrivacy}>Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard 
            dummy text ever since the 1500s,
            </Text>
            <Text style={styles.textPrivacy}>Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard 
            dummy text ever since the 1500s,
            </Text>
            <Text style={styles.textPrivacy}>Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard 
            dummy text ever since the 1500s,
            </Text>
            <View style={styles.buttonGroup}>
              <Button Title="I accept" Navigation={()=>navigation.navigate('Login')} style={styles.butonAccept}/>
              <Button Title="Decline" style={styles.butonDecline}/>
              </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

export default PrivacyPolicyScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  componentWraper:{
    alignItems:'center',
  },
  HumImage:{
    width:24,
    height:20
  },
  privacy:{
    color:'white',
    fontWeight:'700',
    fontSize:28,
    lineHeight:33,
    fontStyle:'normal',
    marginTop:15,
  },
  textPrivacy:{
    fontWeight:'400',
    fontSize:18,
    lineHeight:22,
    fontStyle:'normal',
    marginTop:14,
    color:'white',
    // marginLeft:30,
    textAlign:'justify'
  },
  butonAccept:{
    backgroundColor:'#FFDE77',
    width: 173,
    height: 51,
    borderRadius:5,   
    justifyContent:'center',
    alignItems:'center',
    },
    butonDecline:{
      backgroundColor:'#00000000',
      width: 173,
      height: 51,
      borderRadius:5,   
      justifyContent:'center',
      alignItems:'center',
      marginLeft:10,
      borderWidth:3,
      borderColor:'white',
    },
    buttonGroup:{
      flexDirection:'row',
      justcontenr:'space-between',
      aignItems:'center',
      marginTop:40,
      marginBottom:10,
    }
})