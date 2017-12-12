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

export default TabNavigator(
  {
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
  },
  {
    lazy: true,
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    tabBarComponent: props => (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate('HomeTab')}
            >
              <Icon name='md-home' />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate('SearchTab')}
            >
              <Icon name='md-search' />
              <Text>Search</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    }
);
