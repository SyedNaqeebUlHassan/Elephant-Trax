import { ImageBackground, ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import BackgroundImage from '../assets/Background.png'
import Arrow from '../assets/Arrow.png'
import Header from '../Components/Header'
import SearchIcon from '../assets/SearchIcon.png'
import SelectIcon from '../assets/SelectIcon.png'
import FilterIcon from '../assets/FilterIcon.png'
import DelteIcon from '../assets/DelteIcon.png'
import InputField from '../Components/InputField'

const FindScreen = ({navigation}) => {
  return (
    <View style={styles.contanier}>
        <ScrollView style={{flex:1}}>
            <ImageBackground source={BackgroundImage} style={{flexGrow:1}}>
                <View style={styles.componentWraper}>
                    <Header navigationBack={()=>navigation.goBack()} leftImage={Arrow} leftImageStyle={styles.arrow} navigateTo={()=>navigation.navigate("Profile")}/>       
                    <InputField placeHolder="Find" rightImage={SearchIcon} styleRight={styles.searchIcon}/>
                    <View>
                        
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    </View>
  )
}

export default FindScreen

const styles = StyleSheet.create({
    contanier:{
        flex:1,
    },
    componentWraper:{
        alignItems:'center',
    },
    arrow:{
        width:28,
        height:28,
    },
    searchIcon:{
        width:36,
        height:36,
        marginLeft:100
    }
})