import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
} from 'react-native'

export default ({title = "", subtitle = ""}) => {
  const style = {
    paddingVertical: 20,
    paddingHorizontal: 14,
  }
  return (
    <View style={style}>
      <Text
        style={{
          color: "rgb(74,74,74)",
          fontSize: 32,
          fontWeight: "200",
          fontFamily: 'Helvetica Neue',
        }}>
        {title}
      </Text>
      <Text
        style={{
          marginTop: 8,
          marginBottom: 4,
          color: "rgb(74,74,74)",
          fontSize: 20,
          fontWeight: "300",
          fontFamily: 'Helvetica Neue',
        }}>
        {subtitle}
      </Text>
    </View>
  )
}