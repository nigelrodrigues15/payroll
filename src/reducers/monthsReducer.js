import merge from "lodash/merge";
// import { UPDATE_EMPLOYEE, CREATE_EMPLOYEE, SHOW_EMPLOYEE, REMOVE_EMPLOYEE } from "../actions/employee_actions";


const monthsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  console.log(state);
  switch (action.type) {

    case 'UPDATE_EMPLOYEE':
      console.log('fetching employees')
      console.log(newState)
      // merge(newState,{[action.company.id]: action.company});

      return state;

    case 'CREATE_EMPLOYEE':
      return state

    case 'SHOW_EMPLOYEE':
      return state;

    case 'REMOVE_EMPLOYEE':
      return state;

    default:
      return state;
  }
};

export default monthsReducer;