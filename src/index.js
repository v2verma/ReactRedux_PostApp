import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from './routes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);
const store = createStoreWithMiddleware(reducers);

render(<Provider store={store}>
        <Routes />
      </Provider>, document.getElementById('root'));
