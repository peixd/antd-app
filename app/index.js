const React = require('react');
const ReactDOM = require('react-dom');
const Routes = require('./Routes');

const Provider = require('react-redux');
const initialState = require('./initialState');

if(localStorage["favorites"])
    initialState.favorites = JSON.parse(localStorage["favorites"]);

const storeFactory = require('./store');
const store = storeFactory(initialState);
store.subscribe(saveState);

const saveState = () =>
    localStorage["favorites"] = JSON.stringify(store.getState().favorites);

//debug only
/*window.React = React;
window.store = store;*/

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('app')
);