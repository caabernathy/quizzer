/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

type Props = {
  question: string,
  prompt: string,
};

module.exports = (props: Props) => (
  <View style={styles.container}>
    <Text style={styles.label}>
      {props.question}
    </Text>
    <Text style={styles.label}>
      {props.prompt}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 60,
  },
  label: {
    color: 'black',
    fontSize: 24,
    padding: 10,
  },
});
