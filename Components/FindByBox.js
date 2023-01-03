import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React from 'react'
import BlurBgImage from '../assets/BlurBackgroundImage.png'
import DelteIcon from '../assets/DelteIcon.png'
import PackageCard from './PackageCard'
import Category from '../assets/Category.png'
import Product from '../assets/Product1.png'
import CarIcon from '../assets/CarIcon.png'
import Location from '../assets/Location.png'
import RightArrow from '../assets/RightArrowImage.png'

const FindByBox = () => {
  return (
    <ImageBackground source={BlurBgImage} style={{flexGrow:1}}  >
        <View style={styles.componentWraper}>
            <View style={styles.selectAllView}>
                <Text style={styles.selectAllText}>Select All</Text>
                <Image
                    source={DelteIcon}
                    style={styles.deletIcon}
                />
            </View>
            <PackageCard LinerGradientStart={[0,0]} LinerGradientEnd={[1,1]} LinearGradientLocation={[1,1]} LinerGradientColors={['#FFFFFF','#FFFFFF']}  backgroundImageStyle={styles.backgroundImage} headerRightImage={Category} headerRightImageStyle={styles.leftImage} coverImage={Product} coverImageStyle={styles.productImage} fotterImage={Location} fotterImageStyle={styles.locationImage} FooterText="View All" FoterImage={RightArrow}  />
            <View style={{marginBottom:100}}>
                <PackageCard LinerGradientStart={[0,0]} LinerGradientEnd={[1,1]} LinearGradientLocation={[1,1]} LinerGradientColors={['#FFFFFF','#FFFFFF']}  backgroundImageStyle={styles.backgroundImage} headerRightImage={Category} headerRightImageStyle={styles.leftImage} coverImage={CarIcon} coverImageStyle={styles.productImage} fotterImage={Location} fotterImageStyle={styles.locationImage} FooterText="View All" FoterImage={RightArrow}  />
            </View>  
        </View>
    </ImageBackground>
  )
}

export default FindByBox

const styles = StyleSheet.create({
    componentWraper:{
        alignItems:'center',
    },
    selectAllView:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
        marginLeft:253
    },
    selectAllText:{
        fontWeight:'500',
        fontSize:16,
        lineHeight:19,
        fontStyle:'normal',
        marginRight:10
    },
    deletIcon:{
        width:30,
        height:30
    },
    backgroundImage:{
        width:359,
        height:440,
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
})