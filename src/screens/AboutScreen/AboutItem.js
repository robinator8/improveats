import React, { Component } from 'react';
import {
  LayoutAnimation,
  UIManager
} from 'react-native';
import { connect } from 'react-redux';
import {
  Card,
  CardItem,
  Text,
} from 'native-base';
import { aboutExpand } from '../../actions';

UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  render() {
    return (
      <CardItem>
        <Text>{this.props.item.title}</Text>
      </CardItem>
    );
  }
}

const styles = {

};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.item.key;

  return { expanded };
};

export default connect(mapStateToProps, { aboutExpand })(ListItem);
