import React, { Component } from 'react';
import { Image } from 'react-native';
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

class SearchTab extends Component {
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
          <Text>Search Screen</Text>
          <Image source={{ uri: 'http://dummyimage.com/207x235.jpg/ff4444/ffffff' }}style={{ flex: 1, height: 40, width: null, }} />
        </Content>
      </Container>
    );
  }
}

export default SearchTab;
