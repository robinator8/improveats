import React, { Component } from 'react';
import {
  Text,
  Content,
  Button,
} from 'native-base';

class RestaurantList extends Component {
  render() {
    return (
      <Content padder>
        <Text>RestaurantList</Text>
        <Button
          block
          onPress={() => this.props.navigation.navigate('RestaurantScreen')}
        >
          <Text>Navigate</Text>
        </Button>
      </Content>
    );
  }
}

export default RestaurantList;
