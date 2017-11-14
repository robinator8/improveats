// TODO Maybe make this a stack navigator that leads to a
// RestaurantList that displays the users Favorites
// If the user isn't logged in, it could redirect to a login page

import React, { Component } from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base';

class FavoritesScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>FavoritesScreen</Text>
        </Content>
      </Container>
    );
  }
}

export default FavoritesScreen;
