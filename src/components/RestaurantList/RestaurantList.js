import React, { Component } from 'react';
import {
  Text,
  Container,
  Content,
  Button,
} from 'native-base';

class RestaurantList extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>RestaurantList</Text>
          <Button
            block
            onPress={() => this.props.navigate()}
          >
            <Text>Navigate</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default RestaurantList;
