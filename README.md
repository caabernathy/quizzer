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

If you followed the pre-lab instructions, you should already have a working starter Quizzer app. If this is the case do the following, otherwise skip to the **Run Quizzer** section.

    cp -pR quizzer/data <YOUR_QUIZZER_APP_DIRECTORY>/
    cp -pR quizzer/images <YOUR_QUIZZER_APP_DIRECTORY>/

Install Quizzer:

    cd quizzer/ReactNative
    cp -pR ../data .
    cp -pR ../images .
    npm install

Run Quizzer:

Start up your Android emulator or connect to a real device via USB.

    react-native run-android

Copy over the supporting files:

    cd <WHERE_YOU_CLONED_REPO>
    cp -pR quizzer/data <YOUR_QUIZZER_APP_DIRECTORY>/
    cp -pR quizzer/images <YOUR_QUIZZER_APP_DIRECTORY>/

**Note**: If using Windows, compress those two folders and uncompress them under your Quizzer app folder.

When you're done with this step you should have a `data` and `images` folder in the same level as the `index.android.js` file.

## Walk-through
During the Code Lab session we'll walk through building the complete Quizzer app. To follow along and view code changes as they happen, go to: [fbpartnerworkshop.ngrok.io](fbpartnerworkshop.ngrok.io)


## Completed app

The completed app is available in the `completed` branch of this repo.
