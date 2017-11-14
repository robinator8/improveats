import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
} from 'native-base';
import RestaurantList from '../../components/RestaurantList/RestaurantList';

class HomeScreen extends Component {
  renderHeader() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
          >
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Improveats</Title>
        </Body>
        <Right />
      </Header>
    );
  }

  render() {
    return (
      <Container>
        {this.renderHeader()}
        <Content padder>
          <Text>TODO</Text>
          <RestaurantList />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, null)(HomeScreen);
