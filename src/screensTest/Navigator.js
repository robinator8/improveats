import React from 'react';
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import { Footer, FooterTab, Icon, Text, Button, } from 'native-base';
import SideBar from './../components/SideBar';
import HomeScreen from './HomeScreen/HomeScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import ContactScreen from './ContactScreen/ContactScreen';
import SearchScreen from './SearchScreen/SearchScreen';
import ReserveScreen from './ReserveScreen/ReserveScreen';
import InfoScreen from './InfoScreen/InfoScreen';
import AboutScreen from './AboutScreen/AboutScreen.js';

const Navigator = DrawerNavigator({
  Home: {
    screen: StackNavigator({
      Home: {
        screen: TabNavigator({
          Home: { screen: HomeScreen },
          Search: { screen: SearchScreen },
        })
      },
      Restaurant: {
        screen: TabNavigator({
          Reserve: { screen: ReserveScreen },
          Info: { screen: InfoScreen },
        }, {
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
                    onPress={() => props.navigation.navigate('Reserve')}
                  >
                    <Icon name='time' />
                    <Text>Reserve</Text>
                  </Button>
                  <Button
                    vertical
                    active={props.navigationState.index === 1}
                    onPress={() => props.navigation.navigate('Info')}
                  >
                    <Icon name='restaurant' />
                    <Text>Info</Text>
                  </Button>
                </FooterTab>
              </Footer>
            )
          }),
      },
    })
  },
  About: { screen: AboutScreen },
  Login: { screen: LoginScreen },
  Contact: { screen: ContactScreen }
}, {
  contentComponent: props => <SideBar {...props} />
});

export default Navigator;
