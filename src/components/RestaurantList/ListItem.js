import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Button,
  Icon,
  Right,
} from 'native-base';

class ListItem extends Component {
  render() {
    const { name, cuisine, time, img, favorited } = this.props.restaurant;
    return (
      <Card>
        <CardItem style={{ backgroundColor: '#ae263d' }}>
          <Left style={{ flex: 5 }}>
            <Body>
              <Text style={{ color: '#fff' }}>{name}</Text>
              <Text note style={{ color: '#ccc' }}>{cuisine}</Text>
            </Body>
          </Left>
          <Right style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button transparent>
              <Icon
                name={favorited ? 'ios-heart' : 'ios-heart-outline'}
                style={{ fontSize: 35, color: '#fff' }}
              />
            </Button>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <ImageBackground source={{ uri: img }} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem style={{ backgroundColor: '#333' }}>
          <Body />
          <Right>
            <Text style={{ color: '#fff' }}>{time.open} - {time.closed}</Text>
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
