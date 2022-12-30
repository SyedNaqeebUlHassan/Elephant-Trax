import { ImageBackground, ScrollView, StyleSheet, Text, View,Image,} from 'react-native'
import React from 'react'
import BackgroundImage from '../assets/Background.png'
import Header from '../Components/Header'
import DeliveryBoyWithPackage from '../assets/DeliveryBoyWithPack.png'
import Card from '../Components/Card'
import Box from '../assets/box.png'
import Boy from '../assets/DeliveryBoy.png'
import Carde from '../assets/Carde.png'
import CardImage from '../assets/Cardimage.png'
import Humburger from '../assets/HumbBurrger.png';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ScrollView style={{flex:1}} >
                <ImageBackground style={{flexGrow:1}} source={BackgroundImage}>
                    <View style={styles.componentWraper}>
                           <Header leftImage={Humburger} leftImageStyle={styles.HumImage} navigateTo={()=>navigation.navigate('Profile')} />   
                         <Image
                         source={DeliveryBoyWithPackage}
                         style={styles.deliveryBoyWithPackage}
                         />
                         <View style={styles.taglineView}>
                            <Text style={styles.taglineText}>Here are the Tageline of App</Text>
                         </View>
                         <View style={{marginTop:60}}>
                               <Card image={Box} imageStyle={styles.box} title="Create Your Package" backgroundImage={CardImage} Navigation={()=>navigation.navigate('Create Package')} />
                         </View>
                         <View style={{marginTop:20,paddingBottom:100}}>
                            <Card image ={Boy} imageStyle={styles.boy} title="Find" backgroundImage={Carde} Navigation={()=>navigation.navigate("Find")}/>
                         </View>
                    </View>
                </ImageBackground>
        </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    box:{
        width:239,
        height:215,
        marginLeft:61,
    },
    boy:{
      width:98,
      height:192,
      marginLeft:123,
      marginTop:20,
    },
    HumImage:{
      width:24,
      height:20
    },
  componentWraper:{
    alignItems:'center',
  },
  deliveryBoyWithPackage:{
    width:240,
    height:251,
    position:'absolute'
    ,marginLeft:60,
    marginTop:20
  },
  taglineView:{
    width:176,
    height:56,
    marginLeft:170,
    marginTop:10
  },
  taglineText:{
    fontStyle:'normal',
    fontWeight:'600',
    fontSize:24,
    lineHeight:28,
    color:'white'
  }
})