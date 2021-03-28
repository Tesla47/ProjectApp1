
import React from 'react';
import {LogBox} from 'react-native';
import MiniaturesNavigator from './navigation/MiniaturesNavigator';


LogBox.ignoreLogs([
  `Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).`,
  `Deprecation in 'navigationOptions':
- 'header: null' will be removed in a future version. Use 'headerShown: false' instead`,
]);

export default function App() {
  
  return<MiniaturesNavigator />
 
}