import React from 'react';
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import { restaurantOptions, restaurantHeader, homeOptions } from './NavigatorOptions';
import SideBar from './../components/SideBar';
import HomeScreen from './HomeScreen/HomeScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import ContactScreen from './ContactScreen/ContactScreen';
import SearchScreen from './SearchScreen/SearchScreen';
import ReserveScreen from './ReserveScreen/ReserveScreen';
import InfoScreen from './InfoScreen/InfoScreen';
import AboutScreen from './AboutScreen/AboutScreen.js';

const Navigator = DrawerNavigator({
  Home: {
    screen: StackNavigator({
      Home: {
        screen: TabNavigator({
          Home: { screen: HomeScreen },
          Search: { screen: SearchScreen },
        }, homeOptions)
      },
      Restaurant: {
        screen: TabNavigator({
          Reserve: { screen: ReserveScreen },
          Info: { screen: InfoScreen },
        }, restaurantOptions),
        ...restaurantHeader,
      },
    })
  },
  About: { screen: AboutScreen },
  Login: { screen: LoginScreen },
  Contact: { screen: ContactScreen }
}, {
  contentComponent: props => <SideBar {...props} />
});

export default Navigator;
