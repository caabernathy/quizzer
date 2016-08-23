# MEA Partner Workshop: Quizzer sample app

## Pre-requisites

Follow the [getting started](https://facebook.github.io/react-native/docs/getting-started.html) docs for Android to install the dependencies for your environment and to create a working test app.

The repo contains the following:

+  A bare bones React Native app in the `ReactNative` folder.
+ The `images` folder contains images that you'll use to build Quizzer.
+ The `data` folder contains static test data and a utilities class that you'll use to work with the data.

## Install

Clone this repository:

    git clone https://github.com/caabernathy/quizzer

Install Quizzer:

**Note**: if you followed the pre-class instructions, you should already have a running app. In this case skip the following two commands:

    cd quizzer/ReactNative
    npm install

If you skipped the previous two commands, go to the folder where you installed and tested your React Native app.

Start up your Android emulator or connect to a real device via USB.

Run Quizzer:

    react-native run-android

Copy over the supporting files:

    cp -pR data/ <YOUR_QUIZZER_APP_DIRECTORY>/
    cp -pR quizzer/images/ <YOUR_QUIZZER_APP_DIRECTORY>/

**Note**: If using Windows, compress those two folders and uncompress them under your Quizzer app folder.

When you're done with this step you should have a `data` and `images` folder in the same level as the `index.android.js` file.

## Walk-through
During the Code Lab session we'll walk through building the complete Quizzer app. To follow along and view code changes as they happen, go to: [fbpartnerworkshop.ngrok.io](fbpartnerworkshop.ngrok.io)


## Completed app

Once the walk-through is done, the completed app will be made available in the `completed` branch of this repo. Check back in a day or so to grab it.
