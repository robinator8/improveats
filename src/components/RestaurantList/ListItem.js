import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import {
  Card,
  CardItem,
  Text,
} from 'native-base';

class ListItem extends Component {
  render() {
    const { name, cuisine, time, img, } = this.props.restaurant;
    return (
      <Card>
        <ImageBackground
          source={{ uri: img }}
          style={{ flex: 1 }}
        >
          <CardItem style={styles.CardItemStyle}>
            <Text>{name}</Text>
          </CardItem>
          <CardItem style={styles.CardItemStyle}>
            <Text>{cuisine}</Text>
          </CardItem>
          <CardItem style={styles.CardItemStyle}>
            <Text>{time.open}</Text>
          </CardItem>
          <CardItem style={styles.CardItemStyle}>
            <Text>{time.closed}</Text>
          </CardItem>
        </ImageBackground>
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
