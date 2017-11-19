import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import SideBar from '../../components/SideBar/SideBar';

const MainScreenRouter = DrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    LoginScreen: { screen: LoginScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default MainScreenRouter;
