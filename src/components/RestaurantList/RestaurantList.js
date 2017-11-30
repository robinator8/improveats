import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'native-base';
import { CardList } from '../general';
import { restaurantsFetch } from '../../actions/';
import ListItem from './ListItem';

class RestaurantList extends Component {
  componentWillMount() {
    if (this.props.restaurants.length === 0) {
      this.props.restaurantsFetch();
    }
  }

  onRefresh() {
    this.props.restaurantsFetch();
  }

  renderItem({ item }) {
    return (
      <ListItem
        restaurant={item}
        navigation={this.props.navigation}
      />
    );
  }

  renderList() {
    if (this.props.error) {
      return <Text>Error</Text>;
    }
    return (
      <CardList
        data={this.props.restaurants}
        renderItem={this.renderItem.bind(this)}
        refreshing={this.props.loading}
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

export default connect(mapStateToProps, { restaurantsFetch })(RestaurantList);
