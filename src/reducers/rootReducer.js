import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import monthsReducer from './monthsReducer';

const appReducer = combineReducers({
    employees: employeeReducer,
    months: monthsReducer
  })
  
const rootReducer = (state, action) => {

    if (action.type === 'SET_DATABASE') {
        return action.database
    }

    return appReducer(state, action)
  }

export default rootReducer