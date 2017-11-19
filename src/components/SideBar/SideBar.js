import React, { Component } from 'react';
import { Image, View } from 'react-native';
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
} from 'native-base';
import { HOME_SCREEN, LOGIN_SCREEN } from '../../screens/screens';

const routes = [
  { name: 'Home', route: HOME_SCREEN },
  { name: 'Login', route: LOGIN_SCREEN },
];
class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View
            style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height: 90,
          }}
          >
            <Image
              source={require('../../testdata/img/logo.png')}
              style={{
                resizeMode: 'contain',
                flex: 1,
              }}
            />
          </View>

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
