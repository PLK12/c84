import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();
const createDrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = 'Home' component = {TabNavigator}/>
            <Drawer.Screen name = 'Profile' component = {Profile}/>

        </Drawer.Navigator>
    )
}
export default createDrawerNavigator;