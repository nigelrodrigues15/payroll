import merge from "lodash/merge";
import { SET_DATABASE } from "../actions/database_actions";

const initialState = {};

const employeeReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {

    case SET_DATABASE:
      console.log('setting database')
      console.log(newState)
      merge(newState, action.database);
      debugger

    return action.database;

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