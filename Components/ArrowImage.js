import { StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Arrow from '../assets/Arrow.png'
const ArrowImage = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.arrowImageOpacity} onPress={navigation}>
        <Image
        source={Arrow}
        style={{width:36,height:36,}}
        />
    </TouchableOpacity>
  )
}

export default ArrowImage

const styles = StyleSheet.create({
    arrowImageOpacity:{
        justifyContent:'flex-start', 
        width:370, 
        marginTop:40,
    },
})