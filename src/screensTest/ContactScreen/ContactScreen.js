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

class ContactScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Contact</Title>
          </Body>
          <Right />
        </Header>

        <Content
          padder
          keyboardShouldPersistTaps='always'
          keyboardDismissMode='on-drag'
        >
          <Text>Contact</Text>
        </Content>
      </Container>
    );
  }
}

export default ContactScreen;
