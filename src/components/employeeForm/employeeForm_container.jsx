import { connect } from "react-redux";
import { createEmployee, showEmployee, removeEmployee } from "../../actions/employee_actions";
import EmployeeForm from "./employeeForm";

const mapStateToProps = (state, ownprops) => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEmployee: employeeInfo => dispatch(createEmployee(employeeInfo)),
    showEmployee: () => dispatch(showEmployee()),
    removeEmployee: employeeId => dispatch(removeEmployee(employeeId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeForm);