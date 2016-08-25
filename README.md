# MEA Partner Workshop: Quizzer sample app

## Pre-requisites

Follow the [getting started](https://facebook.github.io/react-native/docs/getting-started.html) docs for Android to install the dependencies for your environment and to create a working test app.

The repo contains the following:

+ The completed Quizzer app in the `ReactNative` folder.
+ The `images` folder contains images that you'll use to build Quizzer.
+ The `data` folder contains static test data and a utilities class that you'll use to work with the data.

## Install

Clone this repository:

    git clone https://github.com/caabernathy/quizzer

Get the completed branch:

    git checkout completed

Install Quizzer:

    cd quizzer/ReactNative
    cp -pR ../data .
    cp -pR ../images .
    npm install

Start up your Android emulator or connect to a real device via USB.

Run Quizzer:

    react-native run-android
