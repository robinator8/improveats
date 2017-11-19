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
import Rating from '../general/Rating';

class ListItem extends Component {
  render() {
    const { name, cuisine, time, img, favorited, rating } = this.props.restaurant;
    const {
      mainCard,
      nameCardItem,
      nameCardItemLeft,
      nameCardItemLeftText,
      nameCardItemRight,
      nameCardItemRightText,
      star,
      nameCarditemRightButton,
      nameCardItemRightIcon,
      cuisineCardItem,
      cuisineCardItemLeft,
      cuisineCardItemLeftText,
      cuisineCardItemRight,
      cuisineCardItemRightText,
      imageCardItem,
    } = styles;
    return (
      <Card style={mainCard}>

        <CardItem style={nameCardItem}>
          <Left style={nameCardItemLeft}>
            <Text style={nameCardItemLeftText}>{name}</Text>
          </Left>

          <Right style={nameCardItemRight}>
            <Text style={nameCardItemRightText}>{rating}</Text>
            <Icon
              name='md-star'
              style={[nameCardItemRightIcon, star]}
            />
            <Button transparent style={nameCarditemRightButton}>
              <Icon
                name='pin'
                style={nameCardItemRightIcon}
              />
            </Button>
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
  },
  nameCardItem: {
    backgroundColor: '#ae263d',
    height: 45,
  },
  nameCardItemLeft: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  nameCardItemLeftText: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    color: '#fff',
    fontSize: 18,
  },
  nameCardItemRight: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameCardItemRightText: {
    fontSize: 18,
    color: '#fff',
  },
  nameCarditemRightButton: {
    alignItems: 'center',
  },
  star: {
    color: '#fcbd58',
    paddingLeft: 2,
  },
  nameCardItemRightIcon: {
    fontSize: 30,
    color: '#fff',
    paddingHorizontal: 5,
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
  },
});

export default ListItem;
