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
} from 'react-native';

type Props = {
  answers: Array<string>,
  onPress: (key:string) => void,
};

export default class QuestionAnswers extends Component {
  state: {
    dataSource: ListView.DataSource,
  };

  constructor(props: Props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r1});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.answers),
    };
  }

  _renderSeparator(sectionID: string, rowID: string) {
    return (
      <View style={{marginLeft: 5, marginRight: 5}} key={sectionID+rowID}>
        <View style={styles.separator}  />
      </View>
    );
  }

  _renderRow(rowData: string, sectionID: string, rowID: string) {
    if(Platform.OS === 'ios'){
      return (
        <TouchableHighlight
          onPress={() => this.props.onPress(rowID)}
          >
          <View style={styles.row}>
            <Text>{rowData}</Text>
          </View>
        </TouchableHighlight>
      );
    }else {
      return (
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={() => this.props.onPress(rowID)}
          >
          <View style={styles.row}>
            <Text>{rowData}</Text>
          </View>
        </TouchableNativeFeedback>
      );
    }

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
    marginTop: 0,
  },
  row: {
    padding: 10,
  },
  separator: {
    backgroundColor: '#cccccc',
    height: 1,
  },
});
