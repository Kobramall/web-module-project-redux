import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import reducer from './reducers';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
  <Router>
         <App />
    </Router>
    </Provider> ,
  document.getElementById('root')
);
