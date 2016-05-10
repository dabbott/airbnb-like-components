import React, { Component } from 'react'

import {
  Text,
  View,
  Image,
  StyleSheet,
  AppRegistry,
  Dimensions,
  ScrollView,
} from 'react-native'

import { 
  Hero, 
  Marquee, 
  Divider,
  Gallery,
} from './components'

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Hero 
            image={{uri: 'https://qanvast-api.s3.amazonaws.com/ware/original/12a4ba3a-5ab7-4f04-937b-d8be5e3bc2f7.jpg'}}
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
          <Divider />
          <Gallery
            width={Dimensions.get('window').width}
            title={'Welcome'}
            items={[
              {title: 'Los Angeles', image: {uri: 'https://unsplash.it/600/400/?image=101'}},
              {title: 'San Francisco', image: {uri: 'https://unsplash.it/600/400/?image=201'}},
              {title: 'New York', image: {uri: 'https://unsplash.it/600/400/?image=301'}},
            ]}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

AppRegistry.registerComponent('Project', () => Project);
