import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'native-base';
import { CardList } from './general';
import { restaurantsFetch, restaurantFetch } from '../actions/';
import RestaurantCard from './RestaurantCard';

class RestaurantList extends Component {
  componentWillMount() {
    if (this.props.restaurants.length === 0) {
      this.props.restaurantsFetch();
    }
  }

  onRefresh() {
    this.props.restaurantsFetch();
  }

  onCardPress = (restaurant) => {
    this.props.restaurantFetch(restaurant);
    this.props.navigation.navigate('Restaurant', { favorited: restaurant.favorited });
  }

  onPinPress = (restaurant) => {

  }

  onFavorite = (restaurant) => {

  }

  renderItem({ item }) {
    return (
      <RestaurantCard
        restaurant={item}
        onCardPress={this.onCardPress}
        onPinPress={this.onPinPress}
        onFavorite={this.onFavorite}
      />
    );
  }

  renderList() {
    const { error, restaurants, loading } = this.props;
    if (error) {
      return <Text>Error</Text>;
    }
    return (
      <CardList
        data={restaurants}
        renderItem={this.renderItem.bind(this)}
        refreshing={loading}
        onRefresh={this.onRefresh.bind(this)}
      />
    );
  }

  render() {
    return this.renderList();
  }
}

const mapStateToProps = ({ restaurant }) => {
  const { restaurants, error, loading, } = restaurant;
  return { restaurants, error, loading };
};

export default connect(mapStateToProps, { restaurantsFetch, restaurantFetch })(RestaurantList);
