export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const updateEmployee = (id, info) => dispatch => dispatch({
    type: UPDATE_EMPLOYEE,
    employeeID: id,
    info
});

export const CREATE_PAYSLIP = 'CREATE_PAYSLIP';
export const createPayslip = (id, info) => dispatch => dispatch({
    type: CREATE_PAYSLIP,
    employeeID: id,
    info
});


export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const nextEmployeeId = 0;
export const createEmployee = (employeeInfo) => dispatch => {
    dispatch({
        type: CREATE_EMPLOYEE,
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
