import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
  Footer,
  FooterTab,
  Icon,
  Text,
  Button,
} from 'native-base';
import HomeTab from './HomeTab/HomeTab';
import SearchTab from './SearchTab/SearchTab';
import { HOME_TAB, SEARCH_TAB } from '../screens';

export default TabNavigator(
  {
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarComponent: props => (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate(HOME_TAB)}
            >
              <Icon name='md-home' />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate(SEARCH_TAB)}
            >
              <Icon name='md-search' />
              <Text>Search</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    }
);
