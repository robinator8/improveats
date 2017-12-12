import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Card } from 'native-base';

const TouchableCard = ({ children, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Card style={styles.cardStyle}>
      {children}
    </Card>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'transparent'
  }
});

export { TouchableCard };
