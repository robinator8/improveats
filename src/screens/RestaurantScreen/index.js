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
  {
    swipeEnabled: true,
    lazy: false,
    backBehavior: 'none',
    tabBarPosition: 'bottom',
    tabBarComponent: props => (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate('ReserveTab')}
            >
              <Icon name='md-time' />
              <Text>Reserve</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate('InfoTab')}
            >
              <Icon name='md-restaurant' />
              <Text>Info</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    }
);

export default RestaurantScreen;
