import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
} from 'react-native'

export default ({color = "rgba(255,101,106,1)", side = "left"}) => {
  const radius = 28
  const margin = 14
  const style = {
    height: 0,
    flex: 1,
    overflow: 'visible',
    paddingVertical: 10,
  }
  const imageSize = 36
  return (
    <View style={style}>
      <View
        style={{
          position: 'absolute',
          borderRadius: radius,
          top: -radius,
          left: side === 'left' ? margin : null,
          right: side === 'left' ? null : margin,
          width: radius * 2,
          height: radius * 2,
          backgroundColor: color,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Image 
            style={{
              width: imageSize,
              height: imageSize,
            }}
            resizeMode={"cover"}
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/2000px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png'}} 
          />
      </View>
    </View>
  )
}