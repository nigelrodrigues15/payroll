import React from "react";
import { Link, withRouter } from "react-router-dom";

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'hello'
        }
    }

    componentWillMount() {
        this.state.name = this.props.match.params.employeeName
    }

    render () {
        return (
            <div className="employee">
                <div className='employee-image'></div>
                <br /><br /><br />
                    <h1 style={{ letterSpacing: 15 + 'px' }} >EMPOLYEE</h1>
                <br /><br /><br />
    
                    <div className='employee-info'>
                        <h1>Form Style Employee Info</h1>
                        <p>Employee Name</p>
                        <p>Employee Sex</p>
                        <p>Employee DOB</p>
                        <p>Employee Province</p>
                        <p>Employee Hourly Wage</p>
                        <p>Employee Start Date</p>
                        <p>Employee End Date</p>
                        <p>Employee End Date</p>
                        <p>{this.state.name}</p>
    
    
                    </div>
            </div>
        );
    }

}


export default withRouter(Employee);