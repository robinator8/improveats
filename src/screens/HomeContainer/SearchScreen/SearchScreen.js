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
} from 'native-base';

class SearchScreen extends Component {
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
        </Content>
      </Container>
    );
  }
}

export default SearchScreen;