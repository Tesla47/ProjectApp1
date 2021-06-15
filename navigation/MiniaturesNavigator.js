import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


import HomeScreen from '../screens/Homescreen';
import ImageDetails from "../screens/Image_details";
import drawer from "../navigation/drawer";
import SplashScreen from '../screens/SplashScreen';
import CategoryChosen from "../category_screens/CategoryChosen";
import categories from "../screens/Categories";


const MiniaturesNavigator = createStackNavigator(
  {
    // SplashScreen: SplashScreen,
    Home: drawer,
    "Home Screen": HomeScreen,
    "Image Details": ImageDetails,
    "Categories": categories,
    "CategoryChosen": CategoryChosen
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      headerShown: false
    },
  }
);
export default createAppContainer (MiniaturesNavigator);

