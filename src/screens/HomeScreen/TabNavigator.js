import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
  Footer,
  FooterTab,
  Icon,
  Text,
  Button,
} from 'native-base';
import HomeScreen from './HomeScreen';
import SearchScreen from '../SearchScreen/SearchScreen';

export default TabNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    SearchScreen: { screen: SearchScreen },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate('HomeScreen')}
            >
              <Icon name='bowtie' />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate('SearchScreen')}
            >
              <Icon name='briefcase' />
              <Text>Search</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    }
);
