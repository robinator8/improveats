import React, { Component } from 'react';
import {
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
  Label,
  Button,
  Text,
  Form
} from 'native-base';

export default class LucyChat extends Component {
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
            <Title>Lucy Chat</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Form>
            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Lucy Chat</Label>
              <Input />
            </Item>
          </Form>
          <Button
            bordered
            rounded
            danger
            style={{ marginTop: 20, alignSelf: 'center' }}
            onPress={() => navigate('Profile')}
          >
            <Text>Goto Lucy Profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
