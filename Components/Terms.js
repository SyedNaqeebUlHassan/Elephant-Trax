import { StyleSheet, Text, View,Image,TouchableOpacity, Pressable } from 'react-native'
import React,{useState} from 'react'
import Check from '../assets/Check.png'
const Terms = () => {
    const [check,SetCheck]=useState(false);
  return (
    <View style={styles.container}>
      <Pressable style={styles.checkWraper} onPress={()=>SetCheck(!check)}>
        {check &&
        <Image
            style={{width:30,height:30,marginBottom:10,tintColor:'white'}}
            source={Check}
        />
        }
      </Pressable>
      <Text style={styles.text}>I have accept term & conditions</Text>
    </View>
  )
}

export default Terms

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:300,
        marginTop:20,

    },
    checkWraper:{
        alignItems:'center',
        justifyContent:'center',
        borderColor:'white',
        borderWidth:5,
        width:36,
        height:36,
        borderRadius:5
    },
    text:{
        color:"white",
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:16,
        lineHeight:19,
        marginLeft:20,
    }
})