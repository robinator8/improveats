import React, { Component } from 'react';
import {
  LayoutAnimation,
  UIManager,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import {
  ListItem,
  Text,
} from 'native-base';
import { aboutExpand } from '../../actions';

UIManager.setLayoutAnimationEnabledExperimental(true);

class AboutItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription({ item }) {
    return (
      <ListItem>
        <Text>{item.text}</Text>
      </ListItem>
    );
  }

  renderPoints() {
    const { pointsTitle, points } = this.props.item;
    if (!pointsTitle) {
      return;
    }
    return (
      <View>
        <ListItem>
          <Text>{pointsTitle}</Text>
        </ListItem>
        <FlatList
          data={points}
          renderItem={this.renderPoint.bind(this)}
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
    );
  }

  renderPoint({ item }) {
    return (
      <ListItem>
        <Text>{item.text}</Text>
      </ListItem>
    );
  }

  renderContent() {
    const { item, expanded } = this.props;
    if (!expanded) {
      return;
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={item.description}
          renderItem={this.renderDescription.bind(this)}
          contentContainerStyle={{ padding: 10 }}
        />
        {this.renderPoints()}
      </View>
    );
  }

  render() {
    const { titleItem, titleItemActive, titleText } = styles;
    const { title, key } = this.props.item;
    return (
      <View>
        <ListItem
          style={(this.props.expanded) ? [titleItem, titleItemActive] : titleItem}
          button
          onPress={() => this.props.aboutExpand(key)}
        >
          <Text style={titleText}>{title}</Text>
        </ListItem>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleItem: {
    borderLeftWidth: 5,
    borderLeftColor: '#ae263d',
    height: 50,
    paddingLeft: 10,
  },
  titleItemActive: {
    borderLeftColor: '#212121',
  },
  titleText: {
    fontSize: 20,
  },
  descriptionList: {

  },
  descriptionItem: {

  },
  descriptionText: {

  },
  pointsList: {

  },
  pointsTitle: {

  },
  pointsText: {

  },
});

const mapStateToProps = ({ about }, ownProps) => {
  const expanded = about.selected === ownProps.item.key;

  return { expanded };
};

export default connect(mapStateToProps, { aboutExpand })(AboutItem);
