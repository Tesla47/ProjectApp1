import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';

import drawer from "./components/drawer";
import MiniaturesNavigator from './navigation/MiniaturesNavigator';

export default function App() {
  
  return<MiniaturesNavigator />
 
}