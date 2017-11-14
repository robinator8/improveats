import React, { Component } from 'react';
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
} from 'native-base';

const routes = [
  { name: 'Home', route: 'HomeScreen' },
  { name: 'Profile', route: 'ProfileScreen' },
  { name: 'Login', route: 'LoginScreen' },
];
class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            renderRow={({ name, route }) => (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(route)}
                >
                  <Text>{name}</Text>
                </ListItem>
              )}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
