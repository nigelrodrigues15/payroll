import { connect } from "react-redux";
import { fetchEmployees, createEmployee, showEmployee, removeEmployee } from "../../actions/employee_actions";
import Dashboard from "./dashboard";

const mapStateToProps = (state, ownprops) => {
  return {
    employees: state.employees,
    random: [1,2,3,4,5]
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