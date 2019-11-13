import merge from "lodash/merge";
import { UPDATE_EMPLOYEE, CREATE_EMPLOYEE, SHOW_EMPLOYEE, REMOVE_EMPLOYEE } from "../actions/employee_actions";

const initialState = {};

const employeeReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge([], state);
  switch (action.type) {

    case UPDATE_EMPLOYEE:
      console.log('fetching employees')
      console.log(newState)
      console.log(action.info)
      merge(newState[action.employeeID], action.info);
      
    return newState;

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

export default employeeReducer;