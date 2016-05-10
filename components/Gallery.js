import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native'

export default ({width = 300, height = 200, items = [], title = ''}) => {
//   const {height: screenHeight, width: screenWidth} = Dimensions.get('window')
  const horizontal = 14
  const innerWidth = width - horizontal * 2
  const style = {
    paddingVertical: 20,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
  }
  const scrollStyle = {
    width: innerWidth,
    overflow: 'visible',
    flex: 1,
  }
  const margin = 3
  return (
    <View style={style}>
      <Text
        style={{
          width: innerWidth,
          textAlign: 'left',
          color: "rgb(74,74,74)",
          fontSize: 18,
          fontWeight: 'normal',
          fontFamily: 'Helvetica Neue',
          marginBottom: 10,
        }}>
        {title}
      </Text>
      <ScrollView
        snapToInterval={innerWidth + margin}
        horizontal={true}
        style={scrollStyle}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}>
        {
          items.map(({title, image}, i) => {
            const itemStyle = {
              flex:1, 
              marginRight: margin
            }
            return (
              <View key={i} style={itemStyle}>
                <Image 
                  style={{
                    width: innerWidth,
                    height: height,
                  }}
                  resizeMode={"cover"}
                  source={image} 
                />
                <Text
                  style={{
                    marginTop: 10,
                    color: "rgb(74,74,74)",
                    fontSize: 18,
                    fontWeight: 'normal',
                    fontFamily: 'Helvetica Neue',
                  }}>
                  {title}
                </Text>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}