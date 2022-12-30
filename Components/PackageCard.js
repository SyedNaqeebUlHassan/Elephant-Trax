import { ImageBackground, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Carde from '../assets/Carde.png'
import Button from './Button'

const PackageCard = ({addItemNavigation,backgroundImageStyle,headerLeftImage,headerLeftImageStyle,headerRightImage,headerRightImageStyle,coverImage,coverImageStyle,fotterImage,fotterImageStyle,fotterGroupImage,fotterGroupImageStyle,titleLeftButton,titleRightButton}) => {
  return (
    <View style={{marginLeft:18,marginTop:24}}>
        <ImageBackground source={Carde} style={backgroundImageStyle}>
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
        </ImageBackground>
        <View style={styles.btnGroup}>
            <Button Title={titleLeftButton} style={styles.button}/>
            <Button Navigation={addItemNavigation} Title={titleRightButton} style={styles.button}/>
        </View>
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
    button:{
        width:172,
        height:51,
        backgroundColor:'#FFDE77',
        borderRadius:5,   
        justifyContent:'center',
        alignItems:'center',
        marginRight:15,
    },
    btnGroup:{
        flexDirection:'row',
        marginTop:23,
    }
})