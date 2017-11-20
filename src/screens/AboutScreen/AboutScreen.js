import React, { Component } from 'react';
import { View, FlatList, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Fab,
} from 'native-base';
import { DRAWER_OPEN } from '../screens';
import AboutItem from './AboutItem';

UIManager.setLayoutAnimationEnabledExperimental(true);
class AboutScreen extends Component {
  constructor() {
    super();
    this.state = {
      activeFab: false
    };
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderItem({ item }) {
    return <AboutItem item={item} />;
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate(DRAWER_OPEN)}
            >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>About</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.activeFab}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#ae263d' }}
            position="bottomRight"
            onPress={() => this.setState({ activeFab: !this.state.activeFab })}
          >
            <Icon name="share" />
            <Button style={{ backgroundColor: '#58e226' }}>
              <Icon name="md-call" />
            </Button>
            <Button style={{ backgroundColor: '#ffa53c' }}>
              <Icon name="md-mail" />
            </Button>
          </Fab>
          <View>
            <FlatList
              data={this.props.data}
              renderItem={this.renderItem}
            />
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = ({ about }) => (
  { data: about.data }
);

export default connect(mapStateToProps)(AboutScreen);
