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
  Content,
  Text,
  CardItem,
} from 'native-base';
import { DRAWER_OPEN } from '../../screens';

class SearchTab extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => navigation.navigate(DRAWER_OPEN)}
          >
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Search</Title>
        </Body>
        <Right />
      </Header>
    )
  });

  render() {
    return (
      <Container>
        <Content padder>
          <Text>Search Screen</Text>
          <CardItem test>
            <Text>Test</Text>
          </CardItem>
        </Content>
      </Container>
    );
  }
}

export default SearchTab;
