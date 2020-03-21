export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
export const fetchEmployees = () => dispatch => dispatch({
    type: FETCH_EMPLOYEES
});


export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const nextEmployeeId = 0;
export const createEmployee = (employeeInfo) => dispatch => {
    dispatch({
        type: CREATE_EMPLOYEE,
        id: nextEmployeeId++,
        employeeInfo
    })
};

export const SHOW_EMPLOYEE = 'SHOW_EMPLOYEE';
export const showEmployee = employeeId => {
    return {
        type: SHOW_EMPLOYEE,
        employeeId
    };
};

export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';
export const removeEmployee = (employeeId) => dispatch => {
    dispatch({
     type: REMOVE_EMPLOYEE,
     employeeId
    })
};
