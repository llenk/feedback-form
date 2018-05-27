import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'; // add 'compose' in if needed?
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';

const feedbackReducer = (state = {}, action) => {
    if (action.type === 'STEP') {
        return {...state, ...action.payload};
    }
    else if (action.type === 'SUBMIT_FEEDBACK') {
        axios({
            method: 'POST',
            url: '/api/feedback',
            data: state,
        }).then(response => console.log(response.status))
        .catch(error=> console.log(error));
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
