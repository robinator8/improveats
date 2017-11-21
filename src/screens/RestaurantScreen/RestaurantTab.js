import React, { Component } from 'react';
import {
  Button,
  Text,
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  Item,
  Label
} from 'native-base';

class RestaurantTab extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => navigate('DrawerOpen')}
            >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Nine Chat</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Nine Chat</Label>
            <Input />
          </Item>
          <Button
            rounded
            info
            style={{ marginTop: 20, alignSelf: 'center' }}
            onPress={() => navigate('Profile')}
          >
            <Text>Goto Nine Profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default RestaurantTab;
