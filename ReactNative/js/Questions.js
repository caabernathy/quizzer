/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  ListView,
  TouchableHighlight,
  TouchableNativeFeedback,
  Image,
} from 'react-native';

type Props = {
  data: Array<{id:number,question:string}>,
  results: Array<{number:boolean}>,
  onPress: (key:string) => void,
};

export default class Questions extends Component {
  state: {
    dataSource: ListView.DataSource
  };

  constructor(props: Props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r1});
    var questionsToShow = [];
    var nextQuestion = null;
    this.props.data.map((question) => {
      // Question already answered
      if (question.id in this.props.results) {
        question.hasResult = true;
        question.isCorrect = this.props.results[question.id];
        questionsToShow.push(question);
      } else if (nextQuestion === null) {
        // First question, not answered
        question.hasResult = false;
        nextQuestion = question;
      }
    });
    if (nextQuestion !== null) {
      questionsToShow.unshift(nextQuestion);
    }
    this.state = {
      dataSource: ds.cloneWithRows(questionsToShow)
    };
  }

  _renderSeparator(sectionID: string, rowID: string) {
    return (
      <View style={{marginLeft: 5, marginRight: 5}} key={sectionID+rowID}>
        <View style={styles.separator}  />
      </View>
    );
  }

  _renderRow(rowData: {id:number,question:string},
    sectionID: string, rowID: number) {
    if (rowID == 0 && !rowData.hasResult) {

        if (Platform.OS === 'ios') {
          return (
          <TouchableHighlight
            onPress={() => this.props.onPress(rowData.id)}
            >
            <View style={styles.row}>
              <Text>Next</Text>
            </View>
          </TouchableHighlight>
        );
        }else {
          return(
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => this.props.onPress(rowData.id)}
            >
            <View style={styles.row}>
              <Text>Next</Text>
            </View>
          </TouchableNativeFeedback>
        );
        }


    }
    return (
      <View style={[styles.row, styles.answered]}>
        <Text>
          {rowData.question.substring(0, 50) + (rowData.question.length > 50?"...":"")}
        </Text>
        <Image
          style={[styles.icon, rowData.isCorrect ? styles.correctIcon: styles.incorrectIcon]}
          source={require('../images/result.png')} />
      </View>
    );
  }

  render() {
    return (
       <View style={styles.container}>
         <ListView
           dataSource={this.state.dataSource}
           renderRow={this._renderRow.bind(this)}
           renderSeparator={this._renderSeparator}
           />
       </View>
     )
   }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  row: {
    padding: 10,
    flexDirection: 'row',
  },
  separator: {
    backgroundColor: '#cccccc',
    height: 1,
  },
  icon: {
    width: 20,
    height: 20,
  },
  correctIcon: {
    tintColor: '#7ED321',
  },
  incorrectIcon: {
    tintColor: '#FE6417',
  },
  answered: {
    justifyContent: 'space-between',
  },
});
