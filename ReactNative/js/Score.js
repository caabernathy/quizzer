/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import BarChart from './BarChart';

type Props = {
  correct: number,
  total: number,
  onPress: () => void,
};
if(Platform.OS==='ios'){
  module.exports = (props: Props) => (
    <View style={styles.container}>
      <BarChart correct={props.correct} total={props.total} />

        <TouchableHighlight
          onPress={() => props.onPress()}>
          <Text
            style={styles.button}>
            Try Another
          </Text>
        </TouchableHighlight>

    </View>
  )
}else {
  module.exports = (props: Props) => (
    <View style={styles.container}>
      <BarChart correct={props.correct} total={props.total} />

        <TouchableOpacity
          onPress={() => props.onPress()}>
          <Text
            style={styles.button}>
            Try Another
          </Text>
        </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  label: {
    color: 'black',
    fontSize: 24,
    padding: 10,
  },
  button: {
    alignSelf: 'center',
    padding: 10,
    color: 'blue',
    fontSize: 16,
  },
});
