import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
  Footer,
  FooterTab,
  Icon,
  Text,
  Button,
} from 'native-base';
import ReserveTab from './ReserveTab';
import InfoTab from './InfoTab';

const RestaurantScreen = TabNavigator(
  {
    ReserveTab: { screen: ReserveTab },
    InfoTab: { screen: InfoTab },
  },
);

export default RestaurantScreen;
