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
  Card,
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

          <Card style={{ backgroundColor: 'transparent' }}>
            <CardItem header>
              <Left>
                <Text>Title</Text>
              </Left>
              <Right>
                <Text>1.5</Text>
                <Icon
                  name="star"
                  star
                />
                <Button transparent>
                  <Icon name="md-pin" />
                </Button>
              </Right>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}

export default SearchTab;
