import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';


import HomeScreen from '../screens/Homescreen';
import About from "../screens/About";
import Categories from '../screens/Categories';
import ContactUs from '../screens/ContactUs';


const DrawerNavigator = createDrawerNavigator({
  "Home Screen": {
    screen: HomeScreen,
  },
  Categories: {
    screen: Categories,
  },
  "Contact Us": {
    screen: ContactUs,
  },
  About: {
    screen: About,
  },
 
});

const DrawerProps = (props) => {
  return (
    <View>
      <Text>Miniatures</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default createAppContainer( DrawerNavigator); 