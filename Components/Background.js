import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundImg from '../assets/Background.png'
const Background = () => {
  return (
    <ImageBackground
    source={BackgroundImg}
    style={{flexGrow:1}}
    />
  )
}

export default Background

const styles = StyleSheet.create({})