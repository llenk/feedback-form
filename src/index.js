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
    // adds new piece of feedback to state
    // this code works for all pieces of feedback (understanding, comments, etc)
    if (action.type === 'STEP') {
        return {...state, ...action.payload};
    }
    // sends feedback to server, then clears state
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
    // reducer is a function that runs every time an action is dispatched
    // combineReducers isn't really needed here, but if I scale this up, it'll be there
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
