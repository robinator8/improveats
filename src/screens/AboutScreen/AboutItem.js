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
      <Card>
        <CardItem>
          <Text>Hello</Text>
        </CardItem>
      </Card>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, { aboutExpand })(ListItem);
