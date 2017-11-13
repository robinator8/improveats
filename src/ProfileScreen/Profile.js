import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
} from 'native-base';
import { logout } from '../actions';

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right />
      </Header>
    )
  });

  renderLoggedInCard(loggedIn) {
    if (!loggedIn) return;

    return (
      <Button
        block
        bordered
        primary
        style={{ marginTop: 10 }}
        onPress={() => this.props.logout()}
      >
        <Text>Logout</Text>
      </Button>
    );
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name='paper-plane' />
              <Text>Show User profiles here</Text>
              <Right>
                <Icon name='close' />
              </Right>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('EditScreenOne')}
          >
            <Text>Goto EditScreen One</Text>
          </Button>
          {this.renderLoggedInCard(this.props.loggedIn)}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => (
  {
    loggedIn: auth.loggedIn
  }
);

export default connect(mapStateToProps, { logout })(Profile);
