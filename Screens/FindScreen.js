import { ImageBackground, ScrollView, StyleSheet, Text, View,Image, Pressable, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import BackgroundImage from '../assets/Background.png'
import Arrow from '../assets/Arrow.png'
import Header from '../Components/Header'
import SearchIcon from '../assets/SearchIcon.png'
import InputField from '../Components/InputField'
import FindByBox from '../Components/FindByBox'
import FilterIcon from '../assets/FilterIcon.png'
import CircleWithDot from '../assets/CirlceWithDot.png'
import Circle from '../assets/Circle.png'
import FindByKeyword from '../Components/FindByKeyword'

const FindScreen = ({navigation}) => {

    const[circleImageWithDot,SetCircleImagecircleImageWithDot]= useState(true);           
    const[circleImage,SetCircleImage]= useState(false);
    const[showBoxComponet,SetShowBoxComponent]= useState(true);
    const[showKeywordComponent,SetShowKeywordComponent]=useState(false);
    const[circleImageWithDot1,SetCircleImagecircleImageWithDot1]= useState(false);           
    const[circleImage1,SetCircleImage1]= useState(true);

    const handleOnPrees=()=>{
        SetCircleImagecircleImageWithDot(!circleImageWithDot);
        SetCircleImage(!circleImage);
        SetShowBoxComponent(!showBoxComponet)
        SetShowKeywordComponent(!showKeywordComponent)
        SetCircleImagecircleImageWithDot1(!circleImageWithDot1)
        SetCircleImage1(!circleImage1);
    }

  return (
    <View style={styles.contanier}>
        <ScrollView style={{flex:1}}>
            <ImageBackground source={BackgroundImage} style={{flexGrow:1}}>
                <View style={styles.componenHeadertWraper}>
                    <Header navigationBack={()=>navigation.goBack()} leftImage={Arrow} leftImageStyle={styles.arrow} navigateTo={()=>navigation.navigate("Profile")}/>       
                    <InputField placeHolder="Find" rightImage={SearchIcon} styleRight={styles.searchIcon}/>
                    <View style={styles.navWraper}>
                        <View style={styles.radioButtonWraperView}>
                            <View style={styles.radioButtonView}>
                                <TouchableOpacity onPress={handleOnPrees}>
                                    {circleImageWithDot &&
                                    <Image 
                                        source={CircleWithDot}
                                        style={styles.radioButtonImg}
                                    />
                                    }
                                    {circleImage &&
                                        <Image
                                        source={Circle}                           
                                        style={styles.radioButtonImg}
                                    />
                                    }
                                </TouchableOpacity>

                                <Text style={styles.buttonText}>By Box No</Text>
                            </View>
                            <View style={styles.radioButtonView}>
                                <TouchableOpacity onPress={handleOnPrees}>

                                    { circleImage1 &&
                                    <Image
                                        source={Circle}                           
                                        style={styles.radioButtonImg}
                                    />
                                    }
                                     {circleImageWithDot1 &&
                                    <Image 
                                        source={CircleWithDot}
                                        style={styles.radioButtonImg}
                                    />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.buttonText}>By KeyWord</Text>
                            </View>
                        </View>
                        <View style={styles.filterWraper}>
                                <Text style={styles.buttonText}>Category</Text>
                                <Image
                                    source={FilterIcon}
                                    style={styles.filterImage}
                                />
                        </View>
                    </View>
                </View>
            </ImageBackground>
            {showBoxComponet && 
                <FindByBox/>
            }
            {showKeywordComponent &&
                <FindByKeyword/>   
            }
        </ScrollView>
    </View>
  )
}

export default FindScreen

const styles = StyleSheet.create({
    contanier:{
        flex:1,
    },
    componenHeadertWraper:{
        alignItems:'center',
    },
   
    arrow:{
        width:28,
        height:28,
    },
    searchIcon:{
        width:36,
        height:36,
        marginLeft:100
    }, 
    radioButtonView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    radioButtonImg:{
        width:20,
        height:20
    },
    buttonText:{
    fontStyle:'normal',
    fontSize:15,
    fontWeight:'500',
    lineHeight:16,
    color:'white',
    marginLeft:5,
    },
    radioButtonWraperView:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        width:220,
    },
    navWraper:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginTop:18,
        width:359,
        marginBottom:22,
    },
    filterWraper:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',

    },
    filterImage:{
        width:24,
        height:24,
    }



})