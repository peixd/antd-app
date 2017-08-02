import storeFactory from './store';
const React = require('react');
const ReactDOM = require('react-dom');
const Routes = require('./Routes');
const Provider = require('react-redux').Provider;
const initialState = require('./initialState');

if(localStorage["favorites"])
    initialState.favorites = JSON.parse(localStorage["favorites"]);

const store = storeFactory(initialState);

const saveState = () =>
    localStorage["favorites"] = JSON.stringify(store.getState().favorites);
store.subscribe(saveState);

//debug only
/*window.React = React;
window.store = store;*/



ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('app')
);