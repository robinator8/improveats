import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import MainScreenNavigator from '../ChatScreen';
import Profile from '../ProfileScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import SideBar from '../SideBar/SideBar';

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    Profile: { screen: Profile },
    Login: { screen: LoginScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default HomeScreenRouter;
