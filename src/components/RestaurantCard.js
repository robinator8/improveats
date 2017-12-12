import React, { Component } from 'react';
import { Image, } from 'react-native';
import { CardItem, Left, Text, Icon, Right, Button } from 'native-base';
import { TouchableCard } from './general';

class RestaurantCard extends Component {
  render() {
    const { onPinPress, onFavorite, onCardPress, restaurant } = this.props;
    const { name, cuisines, time, img, favorited, rating } = restaurant;
    console.log(img);
    return (
      <TouchableCard onPress={() => onCardPress(restaurant)}>

        <CardItem header>
          <Left>
            <Text>{name}</Text>
          </Left>
          <Right>
            <Text>{rating}</Text>
            <Icon name="star" star />
            <Button transparent onPress={() => onPinPress(restaurant)}>
              <Icon name="pin" />
            </Button>
            <Button transparent onPress={() => onFavorite(restaurant)}>
              <Icon name={favorited ? 'md-heart' : 'md-heart-outline'} />
            </Button>
          </Right>
        </CardItem>

        <CardItem subHeader>
          <Left>
            <Text>{cuisines.main}</Text>
          </Left>
          <Right>
            <Text>{time.open} - {time.closed}</Text>
          </Right>
        </CardItem>

        <CardItem image>
          <Image source={{ uri: img, }} style={styles.imageStyle} />
        </CardItem>

      </TouchableCard>
    );
  }
}

const styles = {
  imageStyle: {
    height: 200,
    width: null,
    flex: 1
  }
};

export default RestaurantCard;
