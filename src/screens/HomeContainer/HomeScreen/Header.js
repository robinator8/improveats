import React from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
} from 'native-base';
import { restaurantsFetch } from '../../../actions/';

const MyHeader = (props) => (
  <Header>
    <Left>
      <Button
        transparent
        onPress={() => props.navigation.navigate('DrawerOpen')}
      >
        <Icon name='menu' />
      </Button>
    </Left>
    <Body>
      <Title>Improveats</Title>
    </Body>
    <Right>
      <Button
        transparent
        onPress={() => props.navigation.navigate('SearchScreen')}
      >
        <Icon name='search' />
      </Button>
      <Button
        transparent
        onPress={() => props.restaurantsFetch()}
      >
        <Icon name='refresh' />
      </Button>
    </Right>
  </Header>
);

export default connect(null, { restaurantsFetch })(MyHeader);
