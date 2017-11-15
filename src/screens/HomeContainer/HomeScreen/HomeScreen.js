import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
} from 'native-base';
import RestaurantList from '../../../components/RestaurantList/RestaurantList';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => navigation.navigate('DrawerOpen')}
          >
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Improveats</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => navigation.navigate('SearchScreen')}
          >
            <Icon name='search' />
          </Button>
        </Right>
      </Header>
    )
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

export default HomeScreen;
