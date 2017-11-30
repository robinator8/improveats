import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { CardItem, Left, Right, Body, Icon, Text, Button } from 'native-base';

class MyCardItem extends Component {
  renderHeaderIcons(icons) {
    icons.map(({ style, name, onPress, button, text }) => {
      if (button) {
        return (
          <Button transparent style={iconButtonStyle} onPress={onPress}>
            <Icon
              name={name}
              style={[nameCardItemRightIcon, style]}
            />
          </Button>
        );
      }
      return (
        <View>
          <Text style={iconTextStyle}>{text}</Text>
          <Icon
            name={name}
            style={[iconStyle, style]}
          />
        </View>
      );
    })
  }

  renderHeader(title, icons) {
    const { headerItemStyle, headerTextStyle, headerRightStyle } = styles;
    return (
      <CardItem style={headerItemStyle}>
        <Left>
          <Text style={headerTextStyle}>{title}</Text>
        </Left>

        <Right style={headerRightStyle}>
          {this.renderHeaderIcons(icons)}
        </Right>
      </CardItem>
    );
  }

  renderSubHeader() {

  }

  renderImage(source) {
    return (
      <CardItem cardBody>
        <Image source={source} style={styles.imageStyle} />
      </CardItem>
    );
  }

  render() {
    const { header, subHeader, image, style, source, title, icons } = this.props;
    if (header) return this.renderHeader(title, icons);
    else if (subHeader) return this.renderSubHeader();
    else if (image) return this.renderImage(source);
    return (
      <CardItem style={style}>
        {this.props.children}
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: null,
    flex: 1
  },

  headerItemStyle: {
    backgroundColor: '#ae263d',
  },
  headerTextStyle: {
    color: '#fff',
    fontSize: 18,
  },
  headerRightStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconTextStyle: {
    fontSize: 20,
    color: '#fff',
  },
  iconButtonStyle: {
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: 30,
    color: '#fff',
    paddingHorizontal: 5,
  },
});

export { MyCardItem as CardItem };
