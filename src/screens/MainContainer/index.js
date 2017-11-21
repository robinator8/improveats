import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import SideBar from '../../components/SideBar/SideBar';
import AboutScreen from '../AboutScreen/AboutScreen';
import ContactScreen from '../ContactScreen/ContactScreen';
import RestaurantScreen from '../RestaurantScreen';

const MainScreenRouter = DrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    LoginScreen: { screen: LoginScreen },
    AboutScreen: { screen: AboutScreen },
    ContactScreen: { screen: ContactScreen },
    RestaurantScreen: { screen: RestaurantScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default MainScreenRouter;
