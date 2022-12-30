import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundImage from '../assets/Background.png'
import Header from '../Components/Header'
import Humburger from '../assets/HumbBurrger.png';
import Profile from '../assets/Profile.png'
import InputField from '../Components/InputField';
import Button from '../Components/Button';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
            <ScrollView style={{flex:1}}>
                    <ImageBackground style={{flexGrow:1}} source={BackgroundImage}>
                            <View style={styles.componentWraper}>
                                <Header leftImage={Humburger} leftImageStyle={styles.HumImage} />  
                                <Text style={styles.profile}>Profile</Text>
                                <Image
                                    source={Profile}
                                    style={styles.profileIcon}
                                />
                                <Text style={styles.company}>Company: Vorksol</Text>
                                <InputField placeHolder="Email"/>
                                <InputField placeHolder="Password"/>
                                <InputField placeHolder="Date of Birth"/>
                                <InputField placeHolder="Gender"/>
                                <Button Navigation={()=>navigation.navigate("Home")} Title="Save"style={styles.button}/>
                            </View>
                    </ImageBackground>
            </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    componentWraper:{
        alignItems:'center',
        marginBottom:40
    },
    profile:{
        color:'white',
        fontStyle:'normal',
        fontWeight:'700',
        fontSize:28,
        lineHeight:33
    },
    HumImage:{
        width:24,
        height:20
      },
      profileIcon:{
        width:122,
        height:122,
        marginTop:26
      },
      company:{
        color:'white',
        fontSize:15,
        fontWeight:'800',
        fontStyle:'normal',
        marginTop:32
      },
      button:{
        backgroundColor:'#FFDE77',
        width:359,
        height:65,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
      }
})