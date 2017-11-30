import React, { Component } from 'react';
import { Container } from 'native-base';
import RestaurantList from '../../../components/RestaurantList';
import Header from './Header';

class HomeTab extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} />
  });

  render() {
    return (
      <Container>
        <RestaurantList
          navigation={this.props.navigation}
        />
      </Container>
    );
  }
}

export default HomeTab;
