import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
  Text,
  Content,
  Button,
} from 'native-base';
import { restaurantsFetch } from '../../actions/';
import ListItem from './ListItem';

class RestaurantList extends Component {
  componentWillMount() {
    if (this.props.restaurants.length === 0) {
      this.props.restaurantsFetch();
    }
  }

  renderItem({ item }) {
    return (
      <ListItem
        restaurant={item}
      />
    );
  }

  renderList() {
    if (this.props.loading) {
      return <Text>Loading...</Text>;
    }
    if (this.props.error) {
      return <Text>Error</Text>;
    }
    return (
      <FlatList
        data={this.props.restaurants}
        renderItem={this.renderItem}
        style={{ marginBottom: 15 }}
      />
    );
  }

  render() {
    return (
      <Content padder>
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
