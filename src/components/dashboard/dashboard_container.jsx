import { connect } from "react-redux";
import { fetchEmployees, createEmployee, showEmployee, removeEmployee } from "../../actions/employee_actions";
import Dashboard from "./dashboard";

const mapStateToProps = (state, ownprops) => {
  console.log('mapstate2props')
  console.log(state)
  return {
    employees: state.employees,
    months: state.months
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
)(Dashboard);