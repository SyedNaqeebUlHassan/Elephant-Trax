import { StyleSheet, Text, TextInput, View,Image, Pressable } from 'react-native'
import React,{useState} from 'react'
import Eye from '../assets/Eye.png'

const InputField = ({leftImage,rightImage,placeHolder,styleLeft,styleRight}) => {
  const [secure,SetSecure]=useState(true);
  const [image,SetImage] =useState(false);
  const [secureImage,SetSecureImage] =useState(true);

  const handlePress=()=>{
      SetSecure(!secure);
      SetImage(!image);
      SetSecureImage(!secureImage);

  }
  return (
    <View  style={styles.wraper}>
      <Image
      style={styleLeft}
      source={leftImage}
      />
      <TextInput 
      placeholder={placeHolder}
      style={{width:150,}}
      secureTextEntry={secure}
      />
      <Pressable onPress={handlePress}>
        {secureImage &&
        <Image
        style={styleRight}
        source={rightImage}
        />
        }   
        {image &&
        <Image
        style={{width:32.16,height:20.95,marginRight:-60}}
        source={Eye}
        />        
        }
      </Pressable>
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    wraper:{
        flexDirection:'row',
        backgroundColor:'white',
        paddingLeft:35,
        paddingRight:37,
        width: 359,
        height: 65,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-around',
        borderRadius:10,
        marginTop:20,
    },

})