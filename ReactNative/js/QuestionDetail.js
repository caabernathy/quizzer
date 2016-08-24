/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import QuestionHeader from './QuestionHeader';

type Props = {
  question: {id:number,question:string,prompt?:string,answers:Array<string>,answer_index:number},
};

export default class QuestionDetail extends Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <QuestionHeader
          question={this.props.question.question}
          prompt={this.props.question.prompt}
        />
        <Text>Answer choices or results go here</Text>
      </View>
    );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
