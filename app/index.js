var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./Routes');

// redux
import C from './constants';
import storeFactory from './store';
import { Provider } from 'react-redux';
//import { addError } from './actions'
import sampleData from './initialState';

const data = require('./model/data_mocked');

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) : sampleData;

//console.log(initialState);

const saveState = () =>
    localStorage["redux-store"] = JSON.stringify(store.getState());

const store = storeFactory(initialState);
store.subscribe(saveState);

//debug only
window.React = React;
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('app')
);