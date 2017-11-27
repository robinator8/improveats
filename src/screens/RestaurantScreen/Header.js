// navigation.GoBack() function wasn't working, so this
// component is put into place in the HomeScreen StackNavigator

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

const MyHeader = ({ navigation, name, favorited }) => (
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
      <Title>{
        // name
        'The Restaurant'
      }</Title>
    </Body>
    <Right>
      <Button transparent>
        <Icon name='md-call' />
      </Button>
      <Button transparent>
        <Icon name='md-pin' />
      </Button>
      <Button transparent>
        <Icon
          name={favorited ? 'md-heart' : 'md-heart-outline'}
        />
      </Button>
    </Right>
  </Header>
);

const mapStateToProps = ({ restaurant }) => {
  const { name, favorited, } = restaurant.restaurant;
  return { name, favorited, };
};

export default connect(mapStateToProps)(MyHeader);
