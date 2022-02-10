import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'Router';

import store from 'redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'),
);
