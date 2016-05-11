import {
  Hero,
  ActionButton,
  Marquee,
  Divider,
  Gallery,
} from './components'
import React, { Component } from 'react'
import {
  View,
  AppRegistry,
  ScrollView,
  Dimensions,
} from 'react-native'

class Project extends Component {
  render() {
    const style = {
      flex: 1,
      justifyContent: 'flex-start',
    }

    return (
      <View style={style}>
        <ScrollView>
          <Hero 
            image={{uri: 'https://qanvast-api.s3.amazonaws.com/ware/original/12a4ba3a-5ab7-4f04-937b-d8be5e3bc2f7.jpg'}}
          />
          <ActionButton 
            color={"rgba(255,101,106,1)"}
            side={"left"}
            icon={"search"}
          />
          <Marquee 
            title={'Hi, Devin'}
            subtitle={'Welcome to Deco, the easiest way to put together a React Native app.'}
          />
          <Divider />
          <Gallery
            width={Dimensions.get('window').width}
            title={'Just for the weekend'}
            items={[
              {title: 'Los Angeles', image: {uri: 'https://unsplash.it/600/400/?image=100'}},
              {title: 'San Francisco', image: {uri: 'https://unsplash.it/600/400/?image=200'}},
              {title: 'New York', image: {uri: 'https://unsplash.it/600/400/?image=300'}},
            ]}
          />
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('Project', () => Project);
