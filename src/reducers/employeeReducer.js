import merge from "lodash/merge";
import { UPDATE_EMPLOYEE, CREATE_EMPLOYEE, CREATE_PAYSLIP, SHOW_EMPLOYEE, REMOVE_EMPLOYEE } from "../actions/employee_actions";

const initialState = {};

const employeeReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge([], state);
  switch (action.type) {

    case UPDATE_EMPLOYEE:
      merge(newState[action.employeeID], action.info);
    return newState;

    case CREATE_PAYSLIP:
      debugger
      newState[action.employeeID].payslips.push(action.info);
    return newState;

    case CREATE_EMPLOYEE:
      newState.push(action.employeeInfo)
    return newState;

    case SHOW_EMPLOYEE:
    return action.payload;

    case REMOVE_EMPLOYEE:
    return action.payload;

    default:
      return state;
  }
};

export default employeeReducer;