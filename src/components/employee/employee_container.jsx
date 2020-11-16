import { connect } from "react-redux";
import { fetchEmployees, createEmployee, showEmployee, removeEmployee } from "../../actions/employee_actions";
import Employee from "./employee";

const mapStateToProps = (state, ownprops) => {
  console.log('mapstate2props')
  console.log(state)
  let employeeData = state.employees[ownprops.match.params.employeeID]
  return {
    employee: employeeData,
    payslips: employeeData.payslips
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEmployees: () => dispatch(fetchEmployees()),
    createEmployee: employeeInfo => dispatch(createEmployee(employeeInfo)),
    showEmployee: () => dispatch(showEmployee()),
    removeEmployee: employeeId => dispatch(removeEmployee(employeeId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employee);