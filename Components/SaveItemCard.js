import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Carde from '../assets/Carde.png'
import AttachIcon from '../assets/AttachIcon.png'
import Camera from '../assets/Camera.png'
import Button from '../Components/Button'

const SaveItemCard = ({productImage,productImageStyle}) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={Carde} style={styles.backgroundImage}>
            <View style={styles.header}>
                <Text style={styles.itemText}>Item No: 05</Text>
                <View style={styles.imageGroup}>
                    <Image
                        source={AttachIcon}
                        style={styles.attachIcon}
                    />
                    <Image
                        source={Camera}
                        style={styles.cameraIcon}
                    />
                </View>
            </View>
            <View style={styles.midSection}>
                    <Image
                    source={productImage}
                    style={productImageStyle}
                    />
            </View>
            <View style={styles.footer}>
                <TextInput
                style={styles.inputText}
                placeholder='Enter keyword'
                />
                <Button Title='Add' style={styles.button}/>
            </View>
            <View style={styles.keywordView}>
                <Text style={styles.keyword}>KeyWord</Text>
            </View>
        </ImageBackground>
    </View>
  )
}

export default SaveItemCard

const styles = StyleSheet.create({
    container:{
        marginTop:17,
        marginBottom:0,
        justifyContent:'center',
        alignItems:'center'
    },
    backgroundImage:{
        width:357,
        height:400,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:31,
        marginTop:21,
    },
    imageGroup:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginRight:29,
        width:90
    },
    itemText:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:20,
    },
    midSection:{
        width:298,
        height:202,
        backgroundColor:'white',
        borderRadius:10,
        marginTop:14,
        marginLeft:30,
        justifyContent:'center',
        alignItems:'center',
    },
    attachIcon:{
        width:35,
        height:35,
    },
    cameraIcon:{
        width:35,
        height:35,
    },
    footer:{
        marginLeft:30,
        marginTop:15, 
        flexDirection:'row',

    },
    inputText:{
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:12,
        lineHeight:14,
        backgroundColor:'white',
        width:188,
        height:53,
        textAlign:'center',
        alignContent:'center',
        justifyContent:'center',
    },
    button:{
        backgroundColor:'#FFDE77',
        width:110,
        height:53,
        justifyContent:'center',
        alignItems:'center',
    },
    keywordView:{
        width:68,
        height:28,
        backgroundColor:'white',
        borderRadius:5,
        marginTop:15,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        marginLeft:30,
    },
    keyword:{
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:10,
        lineHeight:12
    }
})