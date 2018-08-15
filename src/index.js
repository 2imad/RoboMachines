import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware , combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { searchRobots , requestRobots } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './containers/App'
import './index.css';
import 'tachyons'
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger()
const rootReducer = combineReducers({ searchRobots , requestRobots })
const store = createStore(rootReducer , composeWithDevTools( applyMiddleware(
    thunkMiddleware,
    logger,
    
),
))

ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider> 
     
     ,document.getElementById('root'));
registerServiceWorker();
