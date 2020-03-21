import merge from "lodash/merge";
import { FETCH_EMPLOYEES, CREATE_EMPLOYEE, SHOW_EMPLOYEE, REMOVE_EMPLOYEE } from "../actions/employee_actions";


const monthsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  console.log(state);
  switch (action.type) {

    case FETCH_EMPLOYEES:
      console.log('fetching employees')
      console.log(newState)
      // merge(newState,{[action.company.id]: action.company});

    return action.payload;

    case CREATE_EMPLOYEE:
    return [
        ...state,
        {
            id: action.id,
            info: action.employeeInfo
        }
    ]

    case SHOW_EMPLOYEE:
    return action.payload;

    case REMOVE_EMPLOYEE:
    return action.payload;

    default:
      return state;
  }
};

export default monthsReducer;