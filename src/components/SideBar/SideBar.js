import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
  Left,
  Body,
  Icon,
} from 'native-base';
import {
  HOME_SCREEN,
  LOGIN_SCREEN,
  ABOUT_SCREEN,
  CONTACT_SCREEN
} from '../../screens/screens';

const routes = [
  { name: 'HOME', route: HOME_SCREEN, icon: 'md-home' },
  { name: 'LOGIN', route: LOGIN_SCREEN, icon: 'md-key' },
  { name: 'ABOUT', route: ABOUT_SCREEN, icon: 'md-information-circle' },
  { name: 'CONTACT', route: CONTACT_SCREEN, icon: 'md-key' },
];
class SideBar extends Component {
  render() {
    const {
      content,
      imageView,
      image,
      list,
      listContent,
      listItem,
      listItemLeft,
      listItemIcon,
      listItemBody,
      listItemText,
    } = styles;
    return (
      <Container>
        <Content style={content}>
          <View style={imageView}>
            <Image
              source={require('../../testdata/img/logo.png')}
              style={image}
            />
          </View>

          <List
            style={list}
            contentContainerStyle={listContent}
            dataArray={routes}
            renderRow={({ name, route, icon }) => (
                <ListItem
                  icon
                  style={listItem}
                  button
                  onPress={() => this.props.navigation.navigate(route)}
                >
                  <Left style={listItemLeft}>
                    <Icon name={icon} style={listItemIcon} />
                  </Left>
                  <Body style={listItemBody}>
                    <Text style={listItemText}>{name}</Text>
                  </Body>
                </ListItem>
              )}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#111',
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 79,
    backgroundColor: '#fff',
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
  },
  list: {
    padding: 0,
    paddingLeft: 0,
  },
  listContent: {
    padding: 0,
    paddingLeft: 0,
  },
  listItem: {
    padding: 0,
    paddingLeft: 0,
    margin: 0,
    marginLeft: 0,
    height: 60,
    backgroundColor: '#262626',
    borderLeftWidth: 5,
    borderLeftColor: '#ae263d',
    borderBottomWidth: 2,
    borderBottomColor: '#222',
    borderTopWidth: 2,
    borderTopColor: '#333',
  },
  listItemLeft: {
    padding: 10,
  },
  listItemIcon: {
    color: '#fff'
  },
  listItemBody: {
    borderBottomWidth: 0,
  },
  listItemText: {
    fontSize: 20,
    color: '#fff'
  },
});

// const stylesLight = StyleSheet.create({
//   content: {
//     backgroundColor: '#eee',
//   },
//   imageView: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//     height: 79,
//     backgroundColor: '#fff',
//   },
//   image: {
//     resizeMode: 'contain',
//     flex: 1,
//   },
//   list: {
//     padding: 0,
//     paddingLeft: 0,
//   },
//   listContent: {
//     padding: 0,
//     paddingLeft: 0,
//   },
//   listItem: {
//     padding: 0,
//     paddingLeft: 0,
//     margin: 0,
//     marginLeft: 0,
//     height: 60,
//     backgroundColor: '#e6e6e6',
//     borderLeftWidth: 5,
//     borderLeftColor: '#ae263d',
//     borderBottomWidth: 2,
//     borderBottomColor: '#eee',
//     borderTopWidth: 2,
//     borderTopColor: '#fff',
//   },
//   listItemLeft: {
//     padding: 10,
//   },
//   listItemIcon: {
//   },
//   listItemBody: {
//     borderBottomWidth: 0,
//   },
//   listItemText: {
//     fontSize: 20,
//   },
// });

export default SideBar;
