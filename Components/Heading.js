import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Heading = ({Heading}) => {
  return (
    <View style={{width:365}}>
      <Text style={styles.resetText}>{Heading}</Text>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    resetText:{
        fontStyle:'normal',
        fontWeight:'700',
        fontSize:28,
        lineHeight:33,
        color:'white',
        marginTop:15,
        textAlign:'left'
    },
})