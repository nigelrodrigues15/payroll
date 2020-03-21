import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import monthsReducer from './monthsReducer';

export default combineReducers({
    employees: employeeReducer,
    months: monthsReducer
});