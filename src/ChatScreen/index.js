import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Button, Text, Icon, Footer, FooterTab } from 'native-base';
import LucyChat from './LucyChat';
import JadeChat from './JadeChat';
import NineChat from './NineChat';

export default TabNavigator(
  {
    LucyChat: { screen: LucyChat },
    NineChat: { screen: NineChat },
    JadeChat: { screen: JadeChat },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate('LucyChat')}
            >
              <Icon name='bowtie' />
              <Text>Lucy</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate('NineChat')}
            >
              <Icon name='briefcase' />
              <Text>Nine</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate('JadeChat')}
            >
              <Icon name='headset' />
              <Text>Jade</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    }
);
