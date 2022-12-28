import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View >
        <Text style={styles.resetParagraph}>Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem 
        Ipsum has been the industry's standard 
        dummy text ever since the 1500s,
        </Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    resetParagraph:{
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:18,
        lineHeight:22,
        marginTop:15,  
        color:'white',
        paddingLeft:15,
        textAlign:'left',
    }
})