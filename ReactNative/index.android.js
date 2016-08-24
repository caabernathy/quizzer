/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

class Quizzer extends Component {
  render() {
    return (
      <Navigator
        ref='nav'
        initialRoute={{ name: 'Home' }}
        renderScene={(route, navigator) => {
          return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>
              <Text style={styles.instructions}>
                To get started, edit index.android.js
              </Text>
              <Text style={styles.instructions}>
                Double tap R on your keyboard to reload,{'\n'}
                Shake or press menu button for dev menu
              </Text>
            </View>
          );
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: () => { },
              RightButton: () => { },
              Title: () => { return <Text>Quizzer</Text> },
            }}
            style={styles.navBar}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBar: {
    backgroundColor: '#eeeeee',
  },
});

AppRegistry.registerComponent('Quizzer', () => Quizzer);
