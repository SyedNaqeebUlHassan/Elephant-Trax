import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundImage from '../assets/Background.png'
import Header from '../Components/Header'
import Arrow from '../assets/Arrow.png'
import PackageCard from '../Components/PackageCard'
import Category from '../assets/Category.png'
import Product from '../assets/Product1.png'
import Location from '../assets/Location.png'
import GroupImage from '../assets/GroupImage.png'

const CreatePackageScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ScrollView style={{flex:1}} contentContainerStyle={{flex:1}} >
            <ImageBackground style={{flexGrow:1}} source={BackgroundImage}>
                <View style={styles.componentWrapper}>
                    <Header leftImage={Arrow} leftImageStyle={styles.arrow} navigationBack={()=>navigation.goBack()} navigateTo={()=>navigation.navigate("Profile")}/>
                    <Text style={styles.createPackage}>Create Your Package</Text>
                    <PackageCard addItemNavigation={()=>navigation.navigate("Add Item")} backgroundImageStyle={styles.backgroundImage} headerRightImage={Category} headerRightImageStyle={styles.leftImage} coverImage={Product} coverImageStyle={styles.productImage} fotterImage={Location} fotterImageStyle={styles.locationImage} fotterGroupImage={GroupImage} fotterGroupImageStyle={styles.groupImage} titleLeftButton="Create" titleRightButton="Add Items"/>
                </View>
            </ImageBackground>
        </ScrollView>
    </View>
  )
}

export default CreatePackageScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    componentWrapper:{
        alignItems:'center',
    },
    arrow:{
        width:28,
        height:28,
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
    backgroundImage:{
        width:357,
        height:460,
    },
    leftImage:{
        width:93,
        height:27,
        marginTop:17,
    },
    productImage:{
        width:237,
        height:237,
        marginTop:17,
    },
    locationImage:{
        width:158.46,
        height:30.34,
        marginTop:13,
    },
    groupImage:{
        width:158.46,
        height:42.7,
        marginTop:13,

    }
})