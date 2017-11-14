import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import Profile from '../ProfileScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import SideBar from '../../components/SideBar/SideBar';

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: Profile },
    Login: { screen: LoginScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default HomeScreenRouter;
