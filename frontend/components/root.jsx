import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import Header from './header';

const Root = ({ store }) => (
  <Provider store={store}>
    <Header />
    <App />
  </Provider>
);

export default Root;
