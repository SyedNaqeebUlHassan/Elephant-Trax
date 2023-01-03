import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BlurBgImage from '../assets/BlurBackgroundImage.png'
import FindByKeyWordCard from './FindByKeyWordCard'

const FindByKeyword = () => {
  return (
      <ImageBackground source={BlurBgImage} style={{flexGrow:1}}>
          <View style={styles.componentWraper}>
            <FindByKeyWordCard />      
          </View>
      </ImageBackground>
    
  )
}

export default FindByKeyword

const styles = StyleSheet.create({
  componentWraper:{
    alignItems:'center',
  },


})