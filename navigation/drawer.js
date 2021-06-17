import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';


import HomeScreen from '../screens/Homescreen';
import About from "../screens/About";
import Categories from '../screens/Categories';
import ContactUs from '../screens/ContactUs';
import BuyUsACoffee from '../screens/BuyUsACoffee';
import CategoryChosen from '../category_screens/CategoryChosen';
const Separator = () => <View style={styles.separator} />;

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
  "Buy Us a Coffee ": {
    screen: BuyUsACoffee,
  },
});

// const DrawerProps = (props) => {
//   return (
//     <View>
//       <Text>Miniatures</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
   separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
   },

});

export default createAppContainer( DrawerNavigator); 