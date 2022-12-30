import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import React from 'react';

import Bell from '../assets/Bell.png';
import Admin from '../assets/Admin.png'
const Header = ({leftImage,leftImageStyle,navigationBack,navigateTo}) => {
  return (
    <View style={styles.container}>
        <View style={styles.Humburger}>
            <TouchableOpacity onPress={navigationBack}>
                <Image
                source={leftImage}
                style={leftImageStyle}
                />
            </TouchableOpacity>
        </View>
        <View style={styles.NotficationAdmin}>
            <Image
            source={Bell}
            style={styles.Bell}
            />
            <TouchableOpacity onPress={navigateTo}>
                <Image
                source={Admin}
                style={styles.Admin}
                />
            </TouchableOpacity>
        </View> 
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:35,
        paddingRight:35,
        marginTop:50,
        width:440,
    },
    Humburger:{

    },
    NotficationAdmin:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-around',
        width:60,
    },
    Bell:{
        width:18,
        height:21
    },
    Admin:{
        width:20,
        height:20,
        tintColor:'white',
    }
})