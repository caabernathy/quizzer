/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';

type Props = {
  correct: number,
  total: number,
};

var totalWidth = Dimensions.get("window").width - 50; // full width
var boxInset = 0;
var boxFromLeft = boxInset / 2;
var barWidth = totalWidth - boxInset;
var threshold = barWidth / 2;

module.exports = (props: Props) => (
  <View style={styles.box}>
    <View style={[styles.barContainer, barColor('container', props.correct, props.total, barWidth)]}>
      <View style={[styles.bar, barColor('bar', props.correct, props.total, barWidth), barWidthStyle(props.correct, props.total, barWidth)]}>
        <Text style={[styles.scoreText, textStyle('bar', props.correct, props.total, barWidth)]}>
          {textString('bar', props.correct, props.total, barWidth)}
        </Text>
      </View>
      <View style={[styles.barSpace, barWidthStyle(props.correct, props.total, barWidth)]}>
        <Text style={[styles.scoreText, textStyle('bar', props.correct, props.total, barWidth)]}>
          {textString('container', props.correct, props.total, barWidth)}
        </Text>
      </View>
    </View>
  </View>
)

/* Determines string for text in colored bar area and bar area that is grayed */
const textString = function(which, correct, total, width) {

  var str = correct + " of " + total;
  var strOut = "";

  var ratio = correct / total;

  if (which == 'bar') {
    if((ratio * width) > threshold) {
      strOut = str;
    } else {
      strOut = "";
    }
  } else {
    if((ratio * width) > threshold) {
      strOut = "";
    } else {
      strOut = str;
    }
  }

  return strOut;

}

/* Calculates the color for the bar and background */
const barColor = function(which, correct, total, width) {
  var styleOut = {};

  var positiveColor = {backgroundColor: "#7ED321"};
  var negativeColor = {backgroundColor: "#FE6417"};

  var positiveColorAlpha = {backgroundColor: 'rgba(126, 211, 33, 0.25)'};
  var negativeColorAlpha = {backgroundColor: 'rgba(254, 100, 23, 0.25)'};

  var ratio = correct / total;

  if (which == 'bar') {
    if((ratio * width) > threshold) {
      styleOut = positiveColor;
    } else {
      styleOut = negativeColor;
    }
  } else {
    if((ratio * width) > threshold) {
      styleOut = positiveColorAlpha;
    } else {
      styleOut = negativeColorAlpha;
    }
  }

  return styleOut;
}

/* Determines style for text in colored bar area and bar area that is grayed */
const textStyle = function(which, correct, total, width) {
  var styleOut = {};

  var whiteColorText = {color: "white"};
  var negativeColorText = {color: "#FE6417"};

  var ratio = correct / total;

  if (which == 'bar') {
    if((ratio * width) > threshold) {
      styleOut = whiteColorText;
    } else {
      styleOut = negativeColorText;
    }
  } else {
    if((ratio * width) > threshold) {
      styleOut = {};
    } else {
      styleOut = negativeColorText;
    }
  }

  return styleOut;
}

/* Determines string for text in colored bar area and bar area that is grayed */
const barWidthStyle = function(correct, total, width) {
   return {
     width: correct / total * width,
   }
 }

const styles = StyleSheet.create({
  positive: {
    backgroundColor: '#7ED321',
  },
  negative: {
    backgroundColor: '#FE6417'
  },
  box: {
    // backgroundColor: '#7ED321',
    height: 50,
    width: barWidth,
    marginTop: 20,
  },
  scoreText: {
    flex: 1,
    fontSize: 24,
    fontFamily: "Helvetica",
    fontWeight: "900",
    alignItems: 'center',
    marginTop: 5,
  },
  barContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'rgba(126, 211, 33, 0.25)',
    height: 50,
  },
  bar: {
    alignItems: 'center',
    backgroundColor: '#7ED321',
  },

  barSpace: {
    flex: 1,
    alignItems: 'center',
  },
});
