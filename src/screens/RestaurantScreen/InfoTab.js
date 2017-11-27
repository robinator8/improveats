import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Text
} from 'native-base';

class RestaurantTab extends Component {
  render() {
    console.log(this.props.restaurant);
    return (
      <Container>
        <Content padder>
          <Text>{this.props.restaurant.cuisines.main}</Text>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ restaurant }) => (
  { restaurant: restaurant.restaurant }
);

export default connect(mapStateToProps)(RestaurantTab);
