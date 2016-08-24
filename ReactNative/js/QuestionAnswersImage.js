/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import ImageMap from './ImageMap';

type Props = {
  answers: Array<string>,
  onPress: (key:string|number) => void,
};

const AnswerSelection = (props) => (
   <TouchableHighlight style={{padding: 10}} onPress={() => props.onPress(props.option)}>
     <Image
       style={styles.image}
       source={ImageMap[props.answers[props.option]]} />
   </TouchableHighlight>
);

module.exports = (props: Props) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <AnswerSelection option={0} {...props} />
      <AnswerSelection option={1} {...props} />
    </View>
    <View style={styles.row}>
      <AnswerSelection option={2} {...props} />
      <AnswerSelection option={3} {...props} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
});
