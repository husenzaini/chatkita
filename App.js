/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MapView from 'react-native-maps';
import Login from './src/component/Login';
const App: () => React$Node = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default App;
