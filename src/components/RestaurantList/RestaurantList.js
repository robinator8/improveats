import React, { Component } from 'react';
import { FlatList, View, RefreshControl, } from 'react-native';
import { connect } from 'react-redux';
import {
  Text,
} from 'native-base';
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
      />
    );
  }

  renderList() {
    if (this.props.error) {
      return <Text>Error</Text>;
    }
    return (
      <FlatList
        data={this.props.restaurants}
        renderItem={this.renderItem}
        style={{ padding: 10, left: 10, right: 10 }}
        refreshControl={
          <RefreshControl
            refreshing={this.props.loading}
            onRefresh={this.onRefresh.bind(this)}
            colors={['#ae263d']}
            tintColor='#ae263d'
          />
       }
      />
    );
  }

  render() {
    return (
        <View style={{ flex: 1 }}>
          {/*this.props.navigation.navigate('RestaurantScreen')*/}
          {this.renderList()}
        </View>
    );
  }
}

const mapStateToProps = ({ restaurant }) => {
  const { restaurants, error, loading, } = restaurant;
  return { restaurants, error, loading };
};

export default connect(mapStateToProps, { restaurantsFetch })(RestaurantList);
