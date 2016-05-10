import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
} from 'react-native'

export default ({title = "", subtitle = ""}) => {
  const style = {
    height: 1,
    backgroundColor: "rgb(210,210,210)",
  }
  return (
    <View style={style} />
  )
}