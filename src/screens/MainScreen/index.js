import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';
import Profile from '../ProfileScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import SideBar from '../../components/SideBar/SideBar';

const MainScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    Profile: { screen: Profile },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default MainScreenRouter;
