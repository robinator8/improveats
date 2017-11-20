import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
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
  Card,
  CardItem,
} from 'native-base';
import { DRAWER_OPEN } from '../screens';

class AboutScreen extends Component {
  renderItem({ item }) {
    console.log('item', item);
    return <Text>Hello</Text>;
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
          <Right />
        </Header>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.props.data}
            renderItem={this.renderItem}
            contentContainerStyle={{ padding: 10 }}
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
