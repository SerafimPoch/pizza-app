import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import Favicon from 'react-favicon';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './store/reducers';
import './css/main.css';
import './css/reset.css';
import favicon from './img/favicon.ico';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <div>
    <Favicon url={favicon} />
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
