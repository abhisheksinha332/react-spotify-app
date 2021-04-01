import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/store';
import Routess from './Router/Route';
import './index.css';



ReactDOM.render(
  <Provider store={store}>
    <Routess />
  </Provider>,
document.getElementById('root'));