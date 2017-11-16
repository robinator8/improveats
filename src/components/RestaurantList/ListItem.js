import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
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
    const {
      mainCard,
      nameCardItem,
      nameCardItemLeft,
      nameCardItemLeftText,
      nameCardItemRight,
      nameCardItemRightIcon,
      cuisineCardItem,
      cuisineCardItemLeftText,
      cuisineCardItemRightText,
      imageCardItem
    } = styles;
    return (
      <Card style={mainCard}>

        <CardItem style={nameCardItem}>
          <Left style={nameCardItemLeft}>
            <Text style={nameCardItemLeftText}>{name}</Text>
          </Left>

          <Right style={nameCardItemRight}>
            <Button transparent>
              <Icon
                name={favorited ? 'ios-heart' : 'ios-heart-outline'}
                style={nameCardItemRightIcon}
              />
            </Button>
          </Right>
        </CardItem>

        <CardItem style={cuisineCardItem}>
          <Left>
            <Text style={cuisineCardItemLeftText}>{cuisine}</Text>
          </Left>
          <Right>
            <Text style={cuisineCardItemRightText}>{time.open} - {time.closed}</Text>
          </Right>
        </CardItem>

        <CardItem cardBody>
          <ImageBackground source={{ uri: img }} style={imageCardItem} />
        </CardItem>

      </Card>
    );
  }
}

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: 'transparent',
  },

  nameCardItem: {
    backgroundColor: '#ae263d',
  },
  nameCardItemLeft: {
    flex: 5,
  },
  nameCardItemLeftText: {
    color: '#fff', fontSize: 18,
  },
  nameCardItemRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 0
  },
  nameCardItemRightIcon: {
    fontSize: 35,
    color: '#fff',
    paddingHorizontal: 10
  },

  cuisineCardItem: {
    backgroundColor: '#333',
  },
  cuisineCardItemLeftText: {
    color: '#7bf'
  },
  cuisineCardItemRightText: {
    color: '#fff'
  },

  imageCardItem: {
    height: 200,
    width: null,
    flex: 1
  }
});

export default ListItem;
