import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import AboutScreen from '../screens/About';
import HomeScreen from '../screens/Homescreen';

const DrawerNavigator= createDrawerNavigator ({
    HomeScreen: {
        screen: HomeScreen
    },
    AboutScreen: {
        screen: AboutScreen
    }
});
 
export default createAppContainer(DrawerNavigator); 