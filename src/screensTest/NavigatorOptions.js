import React from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Header,
  Title,
  Left,
  Right,
  Body,
} from 'native-base';

export const restaurantOptions = {
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
};

export const restaurantHeader = {
  navigationOptions: ({ navigation, favorited }) => ({
    header: (
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>The Restaurant</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='call' />
            </Button>
            <Button transparent>
              <Icon name='pin' />
            </Button>
            <Button transparent>
              <Icon
                name={favorited ? 'md-heart' : 'md-heart-outline'}
              />
            </Button>
          </Right>
        </Header>
    )
  })
};

export const homeOptions = {
  lazy: true,
  swipeEnabled: false,
  tabBarPosition: 'bottom',
  tabBarComponent: props => (
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate('Home')}
          >
            <Icon name='home' />
            <Text>Home</Text>
          </Button>
          <Button
            vertical
            active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate('Search')}
          >
            <Icon name='search' />
            <Text>Search</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
};
