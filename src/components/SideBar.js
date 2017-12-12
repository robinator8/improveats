import React, { Component } from 'react';
import { Image, View, StyleSheet, FlatList } from 'react-native';
import {
  Text,
  Container,
  ListItem,
  Content,
  Left,
  Body,
  Icon,
} from 'native-base';

const routes = [
  { name: 'HOME', key: 'Home', icon: 'md-home' },
  { name: 'LOGIN', key: 'Login', icon: 'md-key' },
  { name: 'ABOUT', key: 'About', icon: 'md-information-circle' },
  { name: 'CONTACT', key: 'Contact', icon: 'md-megaphone' },
];

class SideBar extends Component {
  itemActiveHelper(route) {
    if (route === this.props.activeItemKey) {
      return [styles.listItem, styles.listItemActive];
    }
    return styles.listItem;
  }

  renderItem({ item }) {
    const { key, icon, name } = item;
    const {
      listItem,
      listItemActive,
      listItemLeft,
      listItemIcon,
      listItemBody,
      listItemText,
    } = styles;

    return (
      <ListItem
        icon
        style={(key === this.props.activeItemKey) ? [listItem, listItemActive] : listItem}
        button
        onPress={() => this.props.navigation.navigate(key)}
      >
        <Left style={listItemLeft}>
          <Icon name={icon} style={listItemIcon} />
        </Left>
        <Body style={listItemBody}>
          <Text style={listItemText}>{name}</Text>
        </Body>
      </ListItem>
    );
  }

  render() {
    const {
      content,
      imageView,
      image,
      list,
      listContent,
    } = styles;
    return (
      <Container>
        <Content style={content}>
          <View style={imageView}>
            <Image
              source={require('../resources/img/logo.png')}
              style={image}
            />
          </View>
          <FlatList
            style={list}
            contentContainerStyle={listContent}
            data={routes}
            extraData={this.props.activeItemKey}
            renderItem={this.renderItem.bind(this)}
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
    marginTop: 24,
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
  listItemActive: {
    borderLeftColor: '#fff',
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

export default SideBar;
