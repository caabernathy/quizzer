/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableNativeFeedback,
} from 'react-native';

export default class SimpleList extends Component {
  state: {
    dataSource: ListView.DataSource
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r1});
    this.state = {
      dataSource: ds.cloneWithRows(["Subject 1", "Subject 2", "Subject 3"]),
    };
  }

  _renderSeparator(sectionID: string, rowID: string) {
    return (
      <View style={{marginLeft: 5, marginRight: 5}} key={sectionID+rowID}>
        <View style={styles.separator}  />
      </View>
    );
  }

  _renderRow(rowData: string,
    sectionID: string, rowID: string) {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={() => console.log("Tapped row: " + rowID)}
        >
        <View style={styles.row}>
          <Text>{rowData}</Text>
        </View>
      </TouchableNativeFeedback>
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
  },
  separator: {
    backgroundColor: '#cccccc',
    height: 1,
  },
});
