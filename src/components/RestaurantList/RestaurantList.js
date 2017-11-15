// TODO, Implement ListItem, add bottom padding to content

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
  Text,
  Content,
  Button,
} from 'native-base';
import { restaurantsFetch } from '../../actions/';

class RestaurantList extends Component {
  renderList() {
    if (this.props.loading) {
      return <Text>Loading...</Text>;
    }
    return (
      <FlatList
        data={this.props.restaurants}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    );
  }

  render() {
    console.log(this.props);
    return (
      <Content padder>
        <Text>RestaurantList</Text>
        <Button
          block
          onPress={() => this.props.navigation.navigate('RestaurantScreen')}
        >
          <Text>Navigate</Text>
        </Button>
        <Button
          block
          onPress={() => this.props.restaurantsFetch()}
        >
          <Text>Load</Text>
        </Button>
        {this.renderList()}
      </Content>
    );
  }
}

const mapStateToProps = ({ restaurant }) => {
  const { restaurants, error, loading, } = restaurant;
  return { restaurants, error, loading };
};

export default connect(mapStateToProps, { restaurantsFetch })(RestaurantList);
