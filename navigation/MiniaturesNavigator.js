import { createAppContainer, createDrawerNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import HomeScreen from '../screens/Homescreen';
import ImageDetails from "../screens/Image_details";
import ChosenMiniatureScreen from '../screens/ChosenMiniatureScreen';
import NextMiniatureScreen from '../screens/NextMiniatureScreen';

const MiniaturesNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    ChosenMiniature: ChosenMiniatureScreen,
    NextMiniature: NextMiniatureScreen,
    "Image Details": ImageDetails
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: "center"
    },
  });
 


export default createAppContainer (MiniaturesNavigator);