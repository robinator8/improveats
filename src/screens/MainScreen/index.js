import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import SideBar from '../../components/SideBar/SideBar';

const MainScreenRouter = DrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    LoginScreen: { screen: LoginScreen },
    ProfileScreen: { screen: ProfileScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default MainScreenRouter;
