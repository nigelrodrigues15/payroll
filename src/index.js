import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// export const preloadedState = {}
export const preloadedState = {
    employees: ['Person 1', 'Person 2', 'Person 3', 'Person 4'],
    months: ['January', 'Feburary', 'March', 'April']
}

console.log(preloadedState);

ReactDOM.render(
    <Provider store={configureStore(preloadedState)}>
         <HashRouter>
            <App />
        </HashRouter>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
