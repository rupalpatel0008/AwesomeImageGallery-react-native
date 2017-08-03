import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import ImageParent from './pages/ImageParent/ImageParent';

export default class AwesomeImageGallery extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <ImageParent />
      </Provider>
    );
  }
}
