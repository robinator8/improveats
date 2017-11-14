import React, { Component } from 'react';
import {
  Text,
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
} from 'native-base';

class RestaurantList extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Restaurant List</Title>
        </Body>
        <Right />
      </Header>
    )
  });

  render() {
    return (
      <Container>
        <Content>
          <Text>RestaurantList</Text>
        </Content>
      </Container>
    );
  }
}

export default RestaurantList;
