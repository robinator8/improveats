import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { CardItem, Left, Right, Icon, Text, Button } from 'native-base';

class MyCardItem extends Component {
  renderHeaderIcons(icons) {
    const { iconButtonStyle, iconStyle, iconTextStyle, iconViewStyle } = styles;

    return icons.map(({ style, name, onPress, text }, index) => {
      if (onPress) {
        return (
          <Button transparent style={iconButtonStyle} onPress={onPress} key={index}>
            <Icon
              name={name}
              style={[iconStyle, style]}
            />
          </Button>
        );
      }

      return (
        <View style={iconViewStyle} key={index}>
          <Text style={iconTextStyle}>{text}</Text>
          <Icon
            name={name}
            style={[iconStyle, style]}
          />
        </View>
      );
    });
  }

  renderHeader({ title, icons }) {
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

  renderSubHeader({ leftText, rightText }) {
    const { subHeaderItemStyle, subHeaderLeftTextStyle, subHeaderRightTextStyle } = styles;

    return (
      <CardItem style={subHeaderItemStyle}>
        <Left>
          <Text style={subHeaderLeftTextStyle}>{leftText}</Text>
        </Left>
        <Right>
          <Text style={subHeaderRightTextStyle}>{rightText}</Text>
        </Right>
      </CardItem>
    );
  }

  renderImage({ source }) {
    return (
      <CardItem cardBody>
        <Image source={source} style={styles.imageStyle} />
      </CardItem>
    );
  }

  render() {
    const { header, subHeader, image, style } = this.props;
    if (header) {
      return this.renderHeader(header);
    } else if (subHeader) {
      return this.renderSubHeader(subHeader);
    } else if (image) {
      return this.renderImage(image);
    }
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
  iconViewStyle: {
    flexDirection: 'row',
  },
  subHeaderItemStyle: {
    backgroundColor: '#2a2a2a',
    height: 35,
    flex: 1
  },
  subHeaderLeftTextStyle: {
    color: '#22aeff',
  },
  subHeaderRightTextStyle: {
    color: '#fff',
  },
});

export { MyCardItem as CardItem };
