import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import SideBar from '../../components/SideBar';
import AboutScreen from '../AboutScreen/AboutScreen';
import ContactScreen from '../ContactScreen/ContactScreen';

const MainScreenRouter = DrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    LoginScreen: { screen: LoginScreen },
    AboutScreen: { screen: AboutScreen },
    ContactScreen: { screen: ContactScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default MainScreenRouter;
