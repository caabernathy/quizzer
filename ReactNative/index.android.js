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
  constructor(props) {
    super(props);

    this._renderNavLeftButton = this._renderNavLeftButton.bind(this);
    this._renderNavRightButton = this._renderNavRightButton.bind(this);
    this._renderNavTitle = this._renderNavTitle.bind(this);
  }

  _renderNavLeftButton(route, navigator, index, navState) {
    return null;
  }

  _renderNavRightButton(route, navigator, index, navState) {
    return null;
  }

  _renderNavTitle(route, navigator, index, navState) {
    return (
      <Text style={styles.navBarTitle}>{route.name}</Text>
    );
  }

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
              LeftButton: this._renderNavLeftButton,
              RightButton: this._renderNavRightButton,
              Title: this._renderNavTitle,
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
  navBarTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 15,
  },
});

AppRegistry.registerComponent('Quizzer', () => Quizzer);
