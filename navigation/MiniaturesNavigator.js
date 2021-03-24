import { createAppContainer, createDrawerNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import HomeScreen from '../screens/Homescreen';
import ImageDetails from "../screens/Image_details";
import drawer from "../components/drawer";


const MiniaturesNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    "Image Details": ImageDetails,
    Drawer: drawer,
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: "center",
    },
  }
);
export default createAppContainer (MiniaturesNavigator);