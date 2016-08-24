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
import QuestionAnswersImage from './QuestionAnswersImage';
import QuestionResult from './QuestionResult';

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
    const answers = this.props.question.type === "image" ?
      <QuestionAnswersImage
        answers={this.props.question.answers}
        onPress={this.props.onPress}
        /> :
      <QuestionAnswers
        answers={this.props.question.answers}
        onPress={this.props.onPress}
        />;

    const answersOrResult = (this.props.selected === null) ?
      answers :
      <QuestionResult
        answer={this.props.question.answers[this.props.selected]}
        type={this.props.question.type}
        isCorrect={this.props.selected == this.props.question.answer_index}
        />;
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
