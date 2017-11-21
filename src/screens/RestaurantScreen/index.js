import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
  Footer,
  FooterTab,
  Icon,
  Text,
  Button,
} from 'native-base';
import RestaurantTab from './RestaurantScreen';
import { RESTAURANT_TAB, CUISINE_TAB, SERVICES_TAB } from '../screens';

const RestaurantScreen = TabNavigator(
  {
    RestaurantTab: { screen: RestaurantTab },
    // CuisineTab: { screen: CuisineTab },
    // ServicesTab: { screen: ServicesTab },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate(RESTAURANT_TAB)}
            >
              <Icon name='md-home' />
              <Text>Reserve</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate(CUISINE_TAB)}
            >
              <Icon name='md-search' />
              <Text>Cuisine</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate(SERVICES_TAB)}
            >
              <Icon name='md-search' />
              <Text>Services</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    }
);

export default RestaurantScreen;
