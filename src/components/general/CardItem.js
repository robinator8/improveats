import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { CardItem, Left, Right, Body, Icon, Text, Button } from 'native-base';

class MyCardItem extends Component {
  renderHeader(title, icons) {
    return (
      <CardItem style={nameCardItem}>
        <Left style={nameCardItemLeft}>
          <Text style={nameCardItemLeftText}>{title}</Text>
        </Left>

        <Right style={nameCardItemRight}>
          {
            icons.map(({ style, name, onPress, button, text }) => {
              if (button) {
                return (
                  <Button transparent style={nameCarditemRightButton}>
                    <Icon
                      name={name}
                      style={[nameCardItemRightIcon, style]}
                    />
                  </Button>
                );
              }
              return (
                <View>
                  <Text style={nameCardItemRightText}>{text}</Text>
                  <Icon
                    name={name}
                    style={[nameCardItemRightIcon, style]}
                  />
                </View>
              );
            })
          }
          <Text style={nameCardItemRightText}>{rating}</Text>
          <Icon
            name='md-star'
            style={[nameCardItemRightIcon, star]}
          />
          <Button transparent style={nameCarditemRightButton}>
            <Icon
              name='pin'
              style={nameCardItemRightIcon}
            />
          </Button>
          <Button transparent style={nameCarditemRightButton}>
            <Icon
              name={favorited ? 'md-heart' : 'md-heart-outline'}
              style={nameCardItemRightIcon}
            />
          </Button>
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
});

export { MyCardItem as CardItem };
