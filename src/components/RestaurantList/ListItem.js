import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Left,
  Thumbnail,
  Body,
  Button,
  Icon,
  Right,
} from 'native-base';

class ListItem extends Component {
  render() {
    const { name, cuisine, time, img, } = this.props.restaurant;
    return (
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{name}</Text>
              <Text note>{cuisine}</Text>
            </Body>
          </Left>
          <Right>
            <Button transparent>
              <Icon name='ios-heart' />
            </Button>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <ImageBackground source={{ uri: img }} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Body />
          <Right>
            <Text>{time.open} - {time.closed}</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const styles = {

  CardItemStyle: {
    backgroundColor: 'transparent',
  }
};

export default ListItem;
