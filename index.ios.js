import React, { Component } from 'react'
import {
  View,
  AppRegistry,
  ScrollView,
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

        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('Project', () => Project);
