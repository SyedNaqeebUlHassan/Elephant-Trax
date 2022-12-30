import { ImageBackground, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from './Button'
const Card = ({image,imageStyle,title,backgroundImage,Navigation}) => {
  return (
    <View > 
        <ImageBackground source={backgroundImage} style={styles.container}>
            <View>
                <Image
                    source={image}
                    style={imageStyle}
                />
               <Button Title={title} style={styles.button} Navigation={Navigation}/>
            </View>
        </ImageBackground> 
    </View>

  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        width:359,
        height:300,
    },
    BoxImage:{
        width:239,
        height:215,
        marginLeft:61,
    },
    btnImage:{
        width:321,
        height:51,
    },
    button:{
        backgroundColor:'#FFDE77',
        width:321,
        height:51,
        marginLeft:18,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    }
})