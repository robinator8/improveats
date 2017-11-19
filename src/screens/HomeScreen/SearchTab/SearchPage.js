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

class SearchPage extends Component {
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
          <Text>Search Screend</Text>
          <CardItem
            style={{ padding: 10 }}
          />
        </Content>
      </Container>
    );
  }
}

export default SearchPage;
