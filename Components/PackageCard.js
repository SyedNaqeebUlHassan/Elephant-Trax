import {  StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';

const PackageCard = ({FoterImage,FooterText,LinerGradientStart,LinerGradientEnd,LinearGradientLocation, LinerGradientColors,backgroundImageStyle,headerLeftImage,headerLeftImageStyle,headerRightImage,headerRightImageStyle,coverImage,coverImageStyle,fotterImage,fotterImageStyle,fotterGroupImage,fotterGroupImageStyle}) => {
  return (
    <View style={{marginTop:24}}>
        <LinearGradient 
             colors={LinerGradientColors}
             start={LinerGradientStart}
             end={LinerGradientEnd}
             locations={LinearGradientLocation}
             style={backgroundImageStyle}>
            <View style={{alignItems:'flex-start',marginLeft:14}}>
                <Image
                    source={headerLeftImage}
                    style={headerLeftImageStyle}
                />
            </View>
            <View style={{alignItems:'flex-end',marginRight:12}}>
                <Image
                source={headerRightImage}
                style={headerRightImageStyle}
                />
            </View>
            <View style={{alignItems:'center'}}>
                <Image
                    source={coverImage}
                    style={coverImageStyle}
                />
            </View>
            <Text style={styles.Text}>Box NO.3</Text>
            <View style={{alignItems:'center'}}>
                <Image
                    source={fotterImage}
                    style={fotterImageStyle}
                />
            </View>
            <View style={{alignItems:'center'}}>
                <Image
                    source={fotterGroupImage}
                    style={fotterGroupImageStyle}
                />
            </View>
            <View style={styles.foterView}>
                <Text style={styles.fotterText}>{FooterText}</Text>
                <Image
                    source={FoterImage}
                    style={styles.foterImage}
                
                />
            </View>
        </LinearGradient>
    </View>
  )
}

export default PackageCard

const styles = StyleSheet.create({
    Text:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        marginTop:18,
    },
    fotterText:{
        fontWeight:'400',
        fontSize:12,
        lineHeight:14,
        fontStyle:'normal',

    },
    foterImage:{
        width:9,
        height:9,
    },
    foterView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
    }

})