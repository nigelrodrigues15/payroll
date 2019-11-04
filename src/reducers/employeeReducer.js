import merge from "lodash/merge";
import { FETCH_EMPLOYEES, CREATE_EMPLOYEE, SHOW_EMPLOYEE, REMOVE_EMPLOYEE } from "../actions/employee_actions";


const employeeReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {

    case FETCH_EMPLOYEES:
    return action.payload;

    case CREATE_EMPLOYEE:
    return action.payload;

    case SHOW_EMPLOYEE:
    return action.payload;

    case REMOVE_EMPLOYEE:
    return action.payload;

    default:
      return state;
  }
};

export default employeeReducer;