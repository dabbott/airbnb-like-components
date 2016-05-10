import React, { Component } from 'react'
import {  
  Text,
  View,
  Image,
} from 'react-native'

export default ({height = 350, image}) => {
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
  return (
    <View style={{height}}>
      <Image 
        style={style}
        resizeMode={"cover"}
        source={image} 
      />
    </View>
  )
}