import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@redux/store';
import 'normalize.css';
import './styles/global.scss';
import './assets/fonts/Raleway/Raleway-Black.ttf';
import MainRoutes from './routes/MainRoutes';

ReactDOM.render(
  <Provider store={store}>
    <MainRoutes />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
