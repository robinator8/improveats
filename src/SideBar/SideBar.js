import React, { Component } from 'react';
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
} from 'native-base';

const routes = ['Home', 'Chat', 'Profile', 'Login'];
class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            renderRow={data => (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              )}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
