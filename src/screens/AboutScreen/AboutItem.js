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
  Icon
} from 'native-base';
import { aboutExpand } from '../../actions';

UIManager.setLayoutAnimationEnabledExperimental(true);

class AboutItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderPoint({ item }) {
    const { pointsTextItem, pointsText, pointsIcon } = styles;
    return (
      <ListItem style={pointsTextItem} icon>
        <Icon name='md-checkmark-circle-outline' style={pointsIcon} />
        <Text style={pointsText}>{item.text}</Text>
      </ListItem>
    );
  }

  renderPoints() {
    const { pointsView, pointsList, pointsTitleItem } = styles;
    const { pointsTitle, points } = this.props.item;
    if (!pointsTitle) {
      return;
    }
    return (
      <View style={pointsView}>
        <ListItem style={pointsTitleItem}>
          <Text style={styles.pointsTitle}>{pointsTitle}</Text>
        </ListItem>
        <FlatList
          style={pointsList}
          data={points}
          renderItem={this.renderPoint.bind(this)}
        />
      </View>
    );
  }

  renderDescription({ item }) {
    const { descriptionItem, descriptionText } = styles;
    return (
      <ListItem style={descriptionItem}>
        <Text style={descriptionText}>{item.text}</Text>
      </ListItem>
    );
  }

  renderContent() {
    const { item, expanded } = this.props;
    const { descriptionView, descriptionList } = styles;
    if (!expanded) {
      return;
    }
    return (
      <View style={descriptionView}>
        <FlatList
          data={item.description}
          renderItem={this.renderDescription.bind(this)}
          contentContainerStyle={descriptionList}
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
  descriptionView: {
    backgroundColor: '#fff',
    flex: 1,
    marginLeft: 10,
  },
  descriptionList: {
    padding: 10,
  },
  descriptionItem: {
    borderBottomWidth: 0,
  },
  descriptionText: {

  },
  pointsView: {
  },
  pointsList: {
    paddingLeft: 10,
    flex: 1,
  },
  pointsTitleItem: {
    paddingLeft: 10,
  },
  pointsTitle: {
    fontSize: 20,
  },
  pointsTextItem: {
    flex: 1,
    paddingLeft: 10,
    borderBottomWidth: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pointsIcon: {
    fontSize: 20,
    color: '#ae263d',
  },
  pointsText: {
    paddingLeft: 10,
  },
});

const mapStateToProps = ({ about }, ownProps) => {
  const expanded = about.selected === ownProps.item.key;

  return { expanded };
};

export default connect(mapStateToProps, { aboutExpand })(AboutItem);
