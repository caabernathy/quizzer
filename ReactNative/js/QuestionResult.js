/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

type Props = {
  answer: string,
  type?: string,
  isCorrect: boolean,
};

export default class QuestionResult extends Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={[styles.answer,
            this.props.isCorrect ? styles.correctText: styles.incorrectText]}>
          {this.props.answer}
        </Text>
        <Text
          style={[styles.message,
            this.props.isCorrect ? styles.correctText: styles.incorrectText]}>
          {this.props.isCorrect ? 'Correct!': 'Incorrect!'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 0,
  },
  answer: {
    fontSize: 60,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  correctText: {
    color: '#7ED321',
  },
  incorrectText: {
    color: '#FE6417',
  },
});
