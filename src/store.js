import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// const initialState = {
//     employees: [],
//     months: ['Jan', 'Feb', 'Mar']
// };

export default function configureStore(preloadedState) {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
}