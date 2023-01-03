import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundImage from '../assets/Background.png'
import Header from '../Components/Header'
import Arrow from '../assets/Arrow.png'
import PackageCard from '../Components/PackageCard'
import Category from '../assets/Category.png'
import Location from '../assets/Location.png'
import GroupImage from '../assets/GroupImage.png'
import Button from '../Components/Button'
import Product from '../assets/Product1.png'

const CreatePackageScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ScrollView style={{flex:1}} contentContainerStyle={{flex:1}} >
            <ImageBackground style={{flexGrow:1}} source={BackgroundImage}>
                <View style={styles.componentWrapper}>
                    <Header leftImage={Arrow} leftImageStyle={styles.arrow} navigationBack={()=>navigation.goBack()} navigateTo={()=>navigation.navigate("Profile")}/>
                    <Text style={styles.createPackage}>Create Your Package</Text>
                    <PackageCard LinerGradientStart={[0,0]} LinerGradientEnd={[1,1]} LinearGradientLocation={[0,1]} LinerGradientColors={['#ffffffcc','#f3eef766']}  backgroundImageStyle={styles.backgroundImage} headerRightImage={Category} headerRightImageStyle={styles.leftImage} coverImage={Product} coverImageStyle={styles.productImage} fotterImage={Location} fotterImageStyle={styles.locationImage} fotterGroupImage={GroupImage} fotterGroupImageStyle={styles.groupImage} />
                    <View style={styles.btnGroup}>
                        <Button Title="Create" style={styles.button}/>
                        <Button Navigation={()=>navigation.navigate("Add Item")} Title="Add Items" style={styles.button}/>
                     </View>
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
        borderColor:'#FFFFFF',
        borderRadius:10,
        borderWidth:2,
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
        alignItems:'center',
        marginLeft:15,
    }
})