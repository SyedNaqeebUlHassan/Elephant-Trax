import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Carde from '../assets/Carde.png'
import AttachIcon from '../assets/AttachIcon.png'
import Camera from '../assets/Camera.png'
import Button from '../Components/Button'
import { LinearGradient } from 'expo-linear-gradient'
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux'
import { addItem } from '../Redux/ItemSlider';
import CrossIcon from '../assets/CrossIcon.png'

const SaveItemCard = ({productImage,productImageStyle}) => {

    const dispatch=useDispatch();

    const[keyWord,SetKeyWord]=useState('');
    const [image,SetImage]=useState('');
    const[dataImage,SetImageData]=useState([{image}]);
    const[keyWordData,SetKeyWordData]=useState([{keyWord}]);
    const [show,SetShow]=useState(false);

    const pickImage =async() => { //Pcik Image Function
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
          if(!result.canceled){
              SetImage(result.assets);
          }
          SetImageData((prevState)=>[{image:result.assets,key:Math.random()},...prevState]);
          SetImage(result.assets)
          SetShow(true);
          
      };
      
    const cameraImage=async()=>{//Camera Image Fucntion
          let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.launchCameraAsync.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
          if(!result.canceled){
              SetImage(result.assets);
          }
          SetImageData((prevState)=>[{image:result.assets,key:Math.random()},...prevState]);
          SetImage(result.assets)
          SetShow(true);


    };

    const handleDelteImage=(key)=>{
        SetImageData((prevState)=>{
            return prevState.filter((item)=>item.key!==key)
        })
    };

    const handleDeleteKeyword=(key)=>{
        SetKeyWordData((prevState)=>{
            return prevState.filter((item)=>item.key!==key)
        })
    };

    const handleKeyWord=()=>{
        SetKeyWordData((prevState)=>[{keyWord:keyWord,key:Math.random()},...prevState]);
    };

    const handleReduxData=()=>{// Redux Data
        dispatch(
            addItem({
                newImage:image,
                newKeyWord:keyWord,
            })
        )
    };

  return (
    <View style={styles.container}>
        <LinearGradient 
        colors={['#ffffffcc','#f3eef766']}
        start={[0,0]}
        end={[1,1]}
        locations={[0,1]}
        style={styles.backgroundImage}>
            <View style={styles.header}>
                <Text style={styles.itemText}>Item No: 05</Text>
                <View style={styles.imageGroup}>
                    <Pressable onPress={pickImage}>                  
                        <Image
                            source={AttachIcon}
                            style={styles.attachIcon}
                        />
                    </Pressable>
                    <Pressable onPress={cameraImage}>
                         <Image
                            source={Camera}
                            style={styles.cameraIcon}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={styles.midSection}>
                <ScrollView>
                {  dataImage.map(item=>
                <View key={item.key} >
                    <View>
                        <Image
                            source={item.image}
                            style={productImageStyle}
                            />
                    </View>
                    <Pressable style={{position:'absolute'}} onPress={()=>handleDelteImage(item.key)}>
                        {show &&
                        <Image
                            source={CrossIcon}
                            style={styles.imageCross}
                        />
                        }
                    </Pressable>
                </View>
                )}
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <TextInput
                style={styles.inputText}
                placeholder='Enter keyword'
                onChangeText={SetKeyWord}
                />
                <Button Title='Add' style={styles.button} Navigation={handleKeyWord} />
            </View>
            <View style={{flexDirection:'row'}}>
                <ScrollView horizontal={true}>
                    { keyWordData.map((item)=>
                    <Pressable key={item.key} style={styles.keywordView} onPress={()=>handleDeleteKeyword(item.key)}>
                        <Text style={styles.keyword}>{item.keyWord}</Text>
                    </Pressable>
                    )}
                </ScrollView>
            </View>
        </LinearGradient>
        <Button Title="Save" style={styles.button1} Navigation={handleReduxData} />

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
        borderRadius:10,
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
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        overflow:'scroll',
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
    },
    button1:{
        backgroundColor:'#FFDE77',
        width: 359,
        height: 65,
        borderRadius:10,   
        justifyContent:'center',
        alignItems:'center',
        marginTop:200,
    },
    imageCross:{
        width:14,
        height:14,
        marginLeft:65,
        marginTop:10,
    }
})