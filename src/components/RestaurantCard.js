import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { Card, CardItem } from './general';

class RestaurantCard extends Component {
  render() {
    const { onPressPin, onFavorite, onCardPress, restaurant } = this.props;
    const { name, cuisines, time, img, favorited, rating } = restaurant;
    const headerIcons = [
      {
        name: 'md-star',
        text: rating,
        style: styles.star
      },
      {
        name: 'md-pin',
        onPress: () => onPressPin(restaurant)
      },
      {
        name: favorited ? 'md-heart' : 'md-heart-outline',
        onPress: () => onFavorite(restaurant)
      }
    ];

    return (
      <Card onPress={() => onCardPress(restaurant)}>
        <CardItem
          header={{ title: name, icons: headerIcons }}
        />
        <CardItem
          subHeader={{ leftText: cuisines.main, rightText: `${time.open} - ${time.closed}` }}
        />
        <CardItem
          image={{ source: { uri: img } }}
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  star: {
    color: '#fcbd58',
    paddingLeft: 2,
  },
});

export default RestaurantCard;
