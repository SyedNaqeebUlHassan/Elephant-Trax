import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundImage from '../assets/Background.png'
import Header from '../Components/Header'
import Arrow from '../assets/Arrow.png'
import SaveItemCard from '../Components/SaveItemCard'
import ProductIcon from '../assets/ProductIcon.png'
import Button from '../Components/Button'

const AddItemScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ScrollView style={{flex:1}} contentContainerStyle={{flexGrow:1}}>
                <ImageBackground style={{flexGrow:1}} source={BackgroundImage}>
                        <View style={styles.componentWraper}>
                            <Header navigationBack={()=>navigation.goBack()} leftImage={Arrow} leftImageStyle={styles.arrow} navigateTo={()=>navigation.navigate("Profile")}/>
                            <Text style={styles.createPackage}>Add Your Items</Text>
                            <SaveItemCard productImage={ProductIcon} productImageStyle={styles.productImage}/>
                            <Button Title="Save" style={styles.button} />
                        </View>
                </ImageBackground>
        </ScrollView>
    </View>
  )
}

export default AddItemScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    componentWraper:{
        alignItems:'center',
    },
    createPackage:{
        textAlign:'center',
        marginTop:16,
        color:'white',
        fontStyle:'normal',
        fontWeight:'700',
        fontSize:28,
        lineHeight:33,
    },
    arrow:{
        width:28,
        height:28,
    },
    productImage:{
        width:264,
        height:171
    },
    button:{
        backgroundColor:'#FFDE77',
        width: 359,
        height: 65,
        borderRadius:10,   
        justifyContent:'center',
        alignItems:'center',
        marginTop:200,

    }
})