import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from '../screens/Homescreen';
import ImageDetails from "../screens/Image_details";
import drawer from "../navigation/drawer";

const MiniaturesNavigator = createStackNavigator(
  {
    
    Home: drawer,
    "Home Screen": HomeScreen,
    "Image Details": ImageDetails,
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      headerShown: false
    },
  }
);
export default createAppContainer (MiniaturesNavigator);

// export default createAppContainer (
//   createStackNavigator ({
//     Main: drawer
//   })
// );