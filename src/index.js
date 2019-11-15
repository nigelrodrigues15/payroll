import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const preloadedState = require('./database.json')
// export const preloadedState = {}
const persistedState = loadFromLocalStorage()

function save2localStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        console.log(error);
    }
}
function loadFromLocalStorage(state) {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return preloadedState;
        return JSON.parse(serializedState);
    } catch (error) {
        console.log(error);
        return preloadedState;
    }
}

let store = configureStore(persistedState)

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);

store.subscribe(() => save2localStorage(store.getState()))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
