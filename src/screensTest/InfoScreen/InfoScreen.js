import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Text,
  Card,
  CardItem,
  ListItem,
  Left,
  Body,
  Icon,
} from 'native-base';

class InfoTab extends Component {
  renderOtherCuisines(arr) {
    return arr.map((item) => (
      <ListItem icon style={styles.infoItem} key={item.key}>
        <Left>
          <Icon style={styles.itemIcon} name="md-restaurant" />
        </Left>
        <Body>
          <Text>{item.cuisine}</Text>
        </Body>
      </ListItem>
    ));
  }

  renderAtmosphere(arr) {
    return arr.map((item) => (
      <ListItem icon style={styles.infoItem} key={item.key}>
        <Left>
          <Icon style={styles.itemIcon} name="md-checkmark" />
        </Left>
        <Body>
          <Text>{item.atmosphere}</Text>
        </Body>
      </ListItem>
    ));
  }

  renderServices(arr) {
    return arr.map((item) => (
      <ListItem icon style={styles.infoItem} key={item.key}>
        <Left>
          <Icon style={styles.itemIcon} name="md-checkmark" />
        </Left>
        <Body>
          <Text>{item.service}</Text>
        </Body>
      </ListItem>
    ));
  }

  render() {
    const {
      name,
      cuisines,
      address,
      city,
      phone,
      description,
      time,
      atmosphere,
      services
    } = this.props.restaurant;
    const {
      infoItem,
      headerItem,
      headerText,
      itemIcon,
      itemDivider,
    } = styles;
    console.log(this.props.restaurant);
    return (
      <Container>
        <ScrollView contentContainerStyle={{ padding: 10, }}>
          <Card>
            <CardItem style={headerItem}>
              <Text style={headerText}>{name}</Text>
            </CardItem>
            <ListItem icon style={infoItem}>
              <Left>
                <Icon style={itemIcon} name="md-text" />
              </Left>
              <Body>
                <Text>{description}</Text>
              </Body>
            </ListItem>
            <ListItem icon style={infoItem}>
              <Left>
                <Icon style={itemIcon} name="md-navigate" />
              </Left>
              <Body>
                <Text>{address}, {city}</Text>
              </Body>
            </ListItem>
            <ListItem icon style={infoItem}>
              <Left>
                <Icon style={itemIcon} name="md-time" />
              </Left>
              <Body>
                <Text>{time.open} : {time.closed}</Text>
              </Body>
            </ListItem>
            <ListItem icon style={infoItem}>
              <Left>
                <Icon style={itemIcon} name="md-call" />
              </Left>
              <Body>
                <Text>{phone}</Text>
              </Body>
            </ListItem>
            <ListItem itemDivider icon style={itemDivider}>
              <Left />
              <Body>
                <Text style={itemIcon}>Main Cuisine</Text>
              </Body>
            </ListItem>
            <ListItem icon style={infoItem}>
              <Left>
                <Icon style={itemIcon} name="md-restaurant" />
              </Left>
              <Body>
                <Text>{cuisines.main}</Text>
              </Body>
            </ListItem>
            <ListItem itemDivider icon style={itemDivider}>
              <Left />
              <Body>
                <Text style={itemIcon}>Other Cuisines</Text>
              </Body>
            </ListItem>
            {this.renderOtherCuisines(cuisines.other)}
            <ListItem itemDivider icon style={itemDivider}>
              <Left />
              <Body>
                <Text style={itemIcon}>Atmosphere</Text>
              </Body>
            </ListItem>
            {this.renderAtmosphere(atmosphere)}
            <ListItem itemDivider icon style={itemDivider}>
              <Left />
              <Body>
                <Text style={itemIcon}>Services</Text>
              </Body>
            </ListItem>
            {this.renderServices(services)}
          </Card>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  infoItem: {
    height: 'auto',
  },
  headerItem: {
    backgroundColor: '#ae263d',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  itemIcon: {
    color: '#ae263d',
  },
  itemDivider: {
    backgroundColor: '#fff',
  },
});

const mapStateToProps = ({ restaurant }) => (
  { restaurant: restaurant.restaurant }
);

export default connect(mapStateToProps)(InfoTab);
