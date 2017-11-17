import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Left,
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
      nameCarditemRightButton,
      nameCardItemRightIcon,
      cuisineCardItem,
      cuisineCardItemLeft,
      cuisineCardItemLeftText,
      cuisineCardItemRight,
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
            <Button transparent style={nameCarditemRightButton}>
              <Icon
                name={favorited ? 'ios-heart' : 'ios-heart-outline'}
                style={nameCardItemRightIcon}
              />
            </Button>
          </Right>
        </CardItem>

        <CardItem style={cuisineCardItem}>
          <Left style={cuisineCardItemLeft}>
            <Text style={cuisineCardItemLeftText}>{cuisine}</Text>
          </Left>
          <Right style={cuisineCardItemRight}>
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
    margin: 100,
  },

  nameCardItem: {
    backgroundColor: '#ae263d',
    flex: 1,
  },
  nameCardItemLeft: {
    flex: 5,
  },
  nameCardItemLeftText: {
    color: '#fff',
    fontSize: 18,
  },
  nameCardItemRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 0,
  },
  nameCarditemRightButton: {
    alignItems: 'center',
  },
  nameCardItemRightIcon: {
    fontSize: 35,
    color: '#fff',
    paddingHorizontal: 0,
  },

  cuisineCardItem: {
    backgroundColor: '#2a2a2a',
    height: 35,
    flex: 1
  },
  cuisineCardItemLeft: {
  },
  cuisineCardItemLeftText: {
    color: '#22aeff',
  },
  cuisineCardItemRight: {
  },
  cuisineCardItemRightText: {
    color: '#fff',
  },

  imageCardItem: {
    height: 200,
    width: null,
    flex: 1
  }
});

export default ListItem;
