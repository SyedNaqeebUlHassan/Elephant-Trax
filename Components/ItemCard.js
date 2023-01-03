import { ImageBackground, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'


const ItemCard = ({leftImageStyle,leftImage,LinerEnd,LinerStart, LinerLocation,linerColors, backGroundImageStyle,productImage,productImageStyle,rightImage,rightImageStyle,locationImage,locationImageStyle,locationText}) => {
  return (
    <View style={{marginTop:17,marginBottom:0,marginLeft:30}}>
        <LinearGradient  
        colors={linerColors} 
        start={LinerStart}
        LinerEnd={LinerEnd}
        locations={LinerLocation}
        style={backGroundImageStyle}>       
            <View style={{marginLeft:-13,marginTop:13}}>
                <Image
                    source={productImage}
                    style={productImageStyle}
                    />
            </View>
            <Text style={styles.itemText}>Item No: 05</Text>
            <View style={{position:'absolute',marginLeft:305,marginTop:15}}>
                <Image
                    source={rightImage}
                    style={rightImageStyle}
                    />
                <Image
                    source={leftImage}
                    style={leftImageStyle}
                />
            </View>
            <View>
                <Image
                    source={locationImage}
                    style={locationImageStyle}
                />
                <Text>{locationText}</Text>
            </View>
            <View style={styles.keywordView}>
                <Text>Keyword</Text>
            </View>
            <View style={styles.keywordView1}>
                <Text>Keyword</Text>
            </View>
        </LinearGradient>
    </View>
  )
}

export default ItemCard

const styles = StyleSheet.create({
    itemText:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:20,
        position:'absolute',
        marginTop:20,
        marginLeft:75
    },
    keywordView:{
        backgroundColor:'white',
        width:104,
        height:30,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        marginTop:58,
        marginLeft:75

    },
    keywordView1:{
        backgroundColor:'white',
        width:104,
        height:30,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        marginTop:58,
        marginLeft:200
    }
})