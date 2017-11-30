import React, { Component } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';

class CardList extends Component {
  render() {
    const { data, renderItem, refreshing, onRefresh } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 10, }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#ae263d']}
              tintColor='#ae263d'
            />
         }
        />
      </View>
    );
  }
}

export { CardList };
