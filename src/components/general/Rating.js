import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Icon,
} from 'native-base';

class Rating extends Component {
  calculateStars() {
    const { rating } = this.props;
    const full = Math.floor(rating / 2);
    const half = Math.round((rating / 2) - full);
    const empty = Math.floor(5 - half - full);
    const arr = [];
    for (let i = 0; i < full; i++) { arr.push('md-star'); }
    for (let i = 0; i < half; i++) { arr.push('md-star-half'); }
    for (let i = 0; i < empty; i++) { arr.push('md-star-outline'); }
    return arr;
  }

  renderItems(arr) {
    return arr.map(type => (
      <Icon
        key={0}
        name={type}
        style={{
          color: '#fcbd58',
          padding: 0,
          borderWidth: 1,
        }}
      />
    ));
  }

  render() {
    const arr = this.calculateStars();
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {this.renderItems(arr)}
      </View>
    );
  }
}

export default Rating;
