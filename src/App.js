import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';
import reducers from './reducers';
import MainContainer from './screens/MainContainer';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(commonColor)}>
          <MainContainer />
        </StyleProvider>
      </Provider>
    );
  }
}

export default App;
