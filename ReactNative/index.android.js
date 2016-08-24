/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Image,
} from 'react-native';
import SimpleList from './js/SimpleList';
import DataUtils from './data/utils';
import Questions from './js/Questions';

class Quizzer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryId: null,
      subcategoryId: null,
      questionId: null,
    };

    this._renderNavLeftButton = this._renderNavLeftButton.bind(this);
    this._renderNavRightButton = this._renderNavRightButton.bind(this);
    this._renderNavTitle = this._renderNavTitle.bind(this);

    this._onCategorySelected = this._onCategorySelected.bind(this);
    this._onSubcategorySelected = this._onSubcategorySelected.bind(this);
    this._onQuestionSelected = this._onQuestionSelected.bind(this);
  }

  _onCategorySelected(key) {
    this.setState({ categoryId: key });
    const category = DataUtils.getCategory(key);
    this.refs.nav.push({ name: 'Subcategories', label: category.name });
  }

  _onSubcategorySelected(key) {
    this.setState({ subcategoryId: key });
    const subcategory = DataUtils.getSubcategory(this.state.categoryId, key);
    this.refs.nav.push({ name: 'Questions', label: subcategory.name  });
  }

  _onQuestionSelected(key) {
    this.setState({ questionId: key });
    console.log("Selected question with id: " + key);
  }

  _renderNavLeftButton(route, navigator, index, navState) {
    if (route.name === 'Home') {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => {
          navigator.pop();
        }}
        style={styles.navBarLeftButton}>
        <Image
          style={styles.navBarImage}
          source={require('./images/back_button.png')}
        />
      </TouchableOpacity>
    );
  }

  _renderNavRightButton(route, navigator, index, navState) {
    return null;
  }

  _renderNavTitle(route, navigator, index, navState) {
    const title = route.label ? route.label : route.name;
    return (
      <Text style={styles.navBarTitle}>{title}</Text>
    );
  }

  render() {
    return (
      <Navigator
        ref='nav'
        initialRoute={{ name: 'Home', label: 'Quizzer' }}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'Subcategories':
              return (
                <SimpleList
                  data={DataUtils.getSubcategories(
                    this.state.categoryId)}
                  onPress={this._onSubcategorySelected} />
               );
            case 'Questions':
              return(
               <Questions
                 data={DataUtils.getQuestions(
                    this.state.categoryId, this.state.subcategoryId)}
                  onPress={this._onQuestionSelected} />
              );
            default:
              return (
                <SimpleList
                  data={DataUtils.getCategories()}
                  onPress={this._onCategorySelected} />
              );
            }
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: this._renderNavLeftButton,
              RightButton: this._renderNavRightButton,
              Title: this._renderNavTitle,
            }}
            style={styles.navBar}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBar: {
    backgroundColor: '#eeeeee',
  },
  navBarTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 15,
  },
  navBarLeftButton: {
    marginVertical: 15,
    paddingLeft: 10,
  },
  navBarImage: {
    tintColor: 'black',
    width: 25,
    height: 25,
  },
});

AppRegistry.registerComponent('Quizzer', () => Quizzer);
