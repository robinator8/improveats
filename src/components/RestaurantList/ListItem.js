import React, { Component } from 'react';
import {
  Card,
  CardItem,
  Text,
} from 'native-base';

class ListItem extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Text>{this.props.restaurant.name}</Text>
        </CardItem>
      </Card>
    );
  }
}

export default ListItem;
