import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import FilterIcon from '../assets/FilterIcon.png'
import CircleWithDot from '../assets/CirlceWithDot.png'
import Circle from '../assets/Circle.png'

const RadioButtonNav = () => {
  return (
                    <View style={styles.navWraper}>
                        <View style={styles.radioButtonWraperView}>
                            <View style={styles.radioButtonView}>
                                <Image 
                                    source={CircleWithDot}
                                    style={styles.radioButtonImg}
                                />
                                <Text style={styles.buttonText}>By Box No</Text>
                            </View>
                            <View style={styles.radioButtonView}>
                                <Image
                                    source={Circle}                           
                                    style={styles.radioButtonImg}
                                />
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
  )
}

export default RadioButtonNav

const styles = StyleSheet.create({
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