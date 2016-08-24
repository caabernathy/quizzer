/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import ImageMap from './ImageMap';

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
    const answer = this.props.type === 'image' ?
      <Image
        style={[styles.image,
          this.props.isCorrect ? styles.correctImage: styles.incorrectImage]}
        source={ImageMap[this.props.answer]} /> :
      <Text
        style={[styles.answer,
          this.props.isCorrect ? styles.correctText: styles.incorrectText]}>
        {this.props.answer}
      </Text>;

    return (
      <View style={styles.container}>
        {answer}
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
  correctImage: {
    borderColor: '#7ED321',
  },
  incorrectImage: {
    borderColor: '#FE6417',
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 5,
  },
});
