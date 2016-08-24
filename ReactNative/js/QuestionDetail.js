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
  selected?: number,
  onPress: (key:string) => void,
};

export default class QuestionDetail extends Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const answersOrResult = (this.props.selected === null) ?
      <QuestionAnswers
        answers={this.props.question.answers}
        onPress={this.props.onPress}
        /> :
      <Text>
        {this.props.selected == this.props.question.answer_index ?
        'Correct!!': 'Oops you missed this one'}
      </Text>
    return(
      <View style={styles.container}>
        <QuestionHeader
          question={this.props.question.question}
          prompt={this.props.question.prompt}
        />
        {answersOrResult}
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
