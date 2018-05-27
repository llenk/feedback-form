import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'; // add 'compose' in if needed?
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = {}, action) => {
    if (action.type === 'STEP') {
        return {...state, ...action.payload};
    }
    else if (action.type === 'SUBMIT_FEEDBACK') {
        return {};
    }
    return state;
};

const storeInstance = createStore(
    // This function is our first reducer
    // reducer is a function that runs every time an action is dispatched
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
