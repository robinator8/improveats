import React, { Component } from 'react';
import { View, FlatList, LayoutAnimation, UIManager } from 'react-native';
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
  Fab,
} from 'native-base';
import { phonecall, email, } from 'react-native-communications';
import { DRAWER_OPEN } from '../screens';
import AboutItem from './AboutItem';

UIManager.setLayoutAnimationEnabledExperimental(true);
class AboutScreen extends Component {
  constructor() {
    super();
    this.state = {
      activeFab: true
    };
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderItem({ item }) {
    return <AboutItem item={item} />;
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate(DRAWER_OPEN)}
            >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>About</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => phonecall('17807108472', true)}
            >
              <Icon name="md-call" />
            </Button>
            <Button
              transparent
              onPress={() => email(['info@improveats.com'], null, null, null, null)}
            >
              <Icon name="md-mail" />
            </Button>
          </Right>
        </Header>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.props.data}
            renderItem={this.renderItem}
          />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = ({ about }) => (
  { data: about.data }
);

export default connect(mapStateToProps)(AboutScreen);
