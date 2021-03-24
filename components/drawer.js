import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../screens/Homescreen';
import About from "../screens/About";
import Categories from '../screens/Categories';


const drawer = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  About: {
    screen: About,
  },
  Categories: {
    screen: Categories,
  },
});
 
export default createAppContainer(drawer); 