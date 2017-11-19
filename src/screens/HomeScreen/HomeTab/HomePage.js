import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import RestaurantList from '../../../components/RestaurantList/RestaurantList';
import { restaurantsFetch } from '../../../actions/';
import Header from './Header';

class HomePage extends Component {
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

export default connect(null, { restaurantsFetch })(HomePage);
