/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import QuestionHeader from './QuestionHeader';
import QuestionAnswers from './QuestionAnswers';

type Props = {
  question: {id:number,question:string,prompt?:string,answers:Array<string>,answer_index:number},
  onPress: (key:string) => void,
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
        <QuestionAnswers
          answers={this.props.question.answers}
          onPress={this.props.onPress}
          />
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
