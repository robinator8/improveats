import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { connect } from 'react-redux';
import {
  CardItem,
  Text,
  Left,
  Button,
  Icon,
  Right,
} from 'native-base';
import { Card, Carditem as MyCardItem } from './general';
import { restaurantFetch } from '../actions';

class ListItem extends Component {
  onCardPress() {
    const { navigation, restaurant } = this.props;
    this.props.restaurantFetch(restaurant);
    navigation.navigate('RestaurantScreen');
  }

  render() {
    const { name, cuisines, time, img, favorited, rating } = this.props.restaurant;
    const {
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
    } = styles;
    return (
      <Card onPress={this.onCardPress.bind(this)}>
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
                name={favorited ? 'md-heart' : 'md-heart-outline'}
                style={nameCardItemRightIcon}
              />
            </Button>
          </Right>
        </CardItem>

        <CardItem style={cuisineCardItem}>
          <Left style={cuisineCardItemLeft}>
            <Text style={cuisineCardItemLeftText}>{cuisines.main}</Text>
          </Left>
          <Right style={cuisineCardItemRight}>
            <Text style={cuisineCardItemRightText}>{time.open} - {time.closed}</Text>
          </Right>
        </CardItem>

        <MyCardItem image source={{ uri: img }} />
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

  },
  nameCardItemLeftText: {
    color: '#fff',
    fontSize: 18,
  },
  nameCardItemRight: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameCardItemRightText: {
    fontSize: 20,
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
});

export default connect(null, { restaurantFetch })(ListItem);