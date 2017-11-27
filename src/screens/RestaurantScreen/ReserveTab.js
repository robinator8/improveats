import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Text,
  Form,
  Picker,
  Item,
  Card,
  CardItem,
} from 'native-base';

class RestaurantTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: undefined
    };
  }
  onValueChange(value) {
    this.setState({
      selected1: value
    });
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Text>{this.props.restaurant.name}</Text>
            </CardItem>
            <Form>
              <Picker
                iosHeader='Select one'
                mode='dropdown'
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Item label='Wallet' value='key0' />
                <Item label='ATM Card' value='key1' />
                <Item label='Debit Card' value='key2' />
                <Item label='Credit Card' value='key3' />
                <Item label='Net Banking' value='key4' />
              </Picker>
            </Form>
            <Form>
              <Picker
                iosHeader='Select one'
                mode='dropdown'
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Item label='Wallet' value='key0' />
                <Item label='ATM Card' value='key1' />
                <Item label='Debit Card' value='key2' />
                <Item label='Credit Card' value='key3' />
                <Item label='Net Banking' value='key4' />
              </Picker>
            </Form>
            <Form>
              <Picker
                iosHeader='Select one'
                mode='dropdown'
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Item label='1 guest' value='key0' />
                <Item label='2 guest' value='key1' />
                <Item label='3 guest' value='key2' />
                <Item label='4 guest' value='key3' />
                <Item label='5 guest' value='key4' />
                <Item label='6 guest' value='key5' />
                <Item label='7 guest' value='key6' />
                <Item label='8 guest' value='key7' />
                <Item label='+ guest' value='key8' />
              </Picker>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ restaurant }) => (
  { restaurant: restaurant.restaurant }
);

export default connect(mapStateToProps)(RestaurantTab);
