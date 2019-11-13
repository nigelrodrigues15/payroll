import { connect } from "react-redux";
import { updateEmployee, createEmployee, showEmployee, removeEmployee } from "../../actions/employee_actions";
import Employee from "./employee";

const mapStateToProps = (state, ownprops) => {
  console.log('mapstate2props')
  console.log(state)
  let employeeData = state.employees[ownprops.match.params.employeeID]
  return {
    employee: employeeData,
    payslips: employeeData.payslips,
    employeeID: ownprops.match.params.employeeID
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateEmployee: (id, info) => dispatch(updateEmployee(id, info)),
    createEmployee: employeeInfo => dispatch(createEmployee(employeeInfo)),
    showEmployee: () => dispatch(showEmployee()),
    removeEmployee: employeeId => dispatch(removeEmployee(employeeId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employee);