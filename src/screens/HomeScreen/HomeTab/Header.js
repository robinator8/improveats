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
import { DRAWER_OPEN, SEARCH_TAB, } from '../../screens';

const MyHeader = (props) => (
  <Header>
    <Left>
      <Button
        transparent
        onPress={() => props.navigation.navigate(DRAWER_OPEN)}
      >
        <Icon name='menu' />
      </Button>
    </Left>
    <Body>
      <Title>Home</Title>
    </Body>
    <Right>
      <Button
        transparent
        onPress={() => props.navigation.navigate(SEARCH_TAB)}
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
