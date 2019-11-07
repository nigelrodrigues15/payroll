import { connect } from "react-redux";
import { setDatabase } from "../../actions/database_actions";
import Landing from "./landing";

const mapStateToProps = (state, ownprops) => {
  console.log('mapstate2props')
  console.log(state)
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setDatabase: database => dispatch(setDatabase(database)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);