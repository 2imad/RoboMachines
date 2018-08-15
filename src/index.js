import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { searchRobots } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './containers/App'
import './index.css';
import 'tachyons'
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger()
const store = createStore(searchRobots , composeWithDevTools( applyMiddleware(logger),
))

ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider> 
     
     ,document.getElementById('root'));
registerServiceWorker();
