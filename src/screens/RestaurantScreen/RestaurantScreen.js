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
  Text
} from 'native-base';

class RestaurantView extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Restaurant</Title>
        </Body>
        <Right />
      </Header>
    )
  });

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Restaurant</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>{this.props.restaurant.name}</Text>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ restaurant }) => (
  { restaurant: restaurant.restaurant }
);

export default connect(mapStateToProps)(RestaurantView);
