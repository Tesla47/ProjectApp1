import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import HomeScreen from '../screens/Homescreen';
import ChosenMiniatureScreen from '../screens/ChosenMiniatureScreen';
import NextMiniatureScreen from '../screens/NextMiniatureScreen';
import { exp } from "react-native/Libraries/Animated/src/Easing";

const MiniaturesNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    ChosenMiniature: ChosenMiniatureScreen,
    NextMiniature: NextMiniatureScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: "center"
    },
  }
);




export default createAppContainer (MiniaturesNavigator);