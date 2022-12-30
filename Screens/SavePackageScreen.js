import { ImageBackground, ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import BackgroundImage from '../assets/Background.png'
import Header from '../Components/Header'
import Arrow from '../assets/Arrow.png'
import PackageCard from '../Components/PackageCard'
import Category from '../assets/Category.png'
import Product from '../assets/Product1.png'
import Location from '../assets/Location.png'
import GroupImage from '../assets/GroupImage.png'
import DeleteIcon from '../assets/DelteIcon.png'
import ItemCard from '../Components/ItemCard'
import Car from '../assets/CarIcon.png'
import Edit from '../assets/EditIcon.png'

const SavePackageScreen = () => {
  return (
    <View style={styles.container}>
        <ScrollView style={{flex:1}}  >
            <ImageBackground style={{flexGrow:1}} source={BackgroundImage}>
                <View>
                        <Header leftImage={Arrow} leftImageStyle={styles.arrow}/>
                        <Text style={styles.createPackage}>Create Your Package</Text>
                        <PackageCard backgroundImageStyle={styles.backgroundImage} headerLeftImage={DeleteIcon} headerLeftImageStyle={styles.deleteIcon} headerRightImage={Category} headerRightImageStyle={styles.leftImage} coverImage={Product} coverImageStyle={styles.productImage} fotterImage={Location} fotterImageStyle={styles.locationImage} fotterGroupImage={GroupImage} fotterGroupImageStyle={styles.groupImage} titleLeftButton="Save" titleRightButton="Add Items"/>
                        <View style={styles.seeAllContainer}>
                            <Text style={styles.seeAllText}>See All</Text>
                            <Image
                                source={DeleteIcon}
                                style={styles.deleteIcon}
                            />    
                        </View> 
                        <ItemCard backGroundImageStyle={styles.backgroundImageItem} productImage={Car} productImageStyle={styles.carImage} rightImage={Edit} rightImageStyle={styles.editImage} /> 
                        <View style={{paddingBottom:100}}>
                            <ItemCard backGroundImageStyle={styles.backgroundImageItem} productImage={Product} productImageStyle={styles.carImage} rightImage={Edit} rightImageStyle={styles.editImage} />               
                        </View>
                </View>
            </ImageBackground>
        </ScrollView>
    </View>
  )
}

export default SavePackageScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
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

    },
    deleteIcon:{
        width:30,
        height:30,
        marginTop:17,
        position:'absolute',
    },
    seeAllText:{
        color:'white',
        fontStyle:'normal',
        fontWeight:"500",
        fontSize:16,
        lineHeight:19,
        marginRight:40,
    },
    seeAllContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop:20,
        marginRight:16,
    },
    backgroundImageItem:{
        width:342,
        height:103, 
    },
    carImage:{
        width:76,
        height:75,
    },
    editImage:{
        width:30,
        height:30,
    }
})