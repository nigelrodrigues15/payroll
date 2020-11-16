import React from "react";
import { Link, withRouter } from "react-router-dom";
import employee_container from "./employee_container";
import TextField from '@material-ui/core/TextField';

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.parameters = {
            "name": "Name",
            "DOB": "Date of Birth",
            "startDate": "Start Date",
            "defaultWage": "Default Wage",
            "ytdEarnings": "YTD Earnings",
            "ytdEI": "YTD EI",
            "ytdCPP": "YTD CPP",
            "ytdTax": "YTD Tax",
            "ytdDeductions": "YTD Deductions"
        }
    }

    employeeList(employee = this.props.employee) {
        delete employee.payslips
        let data = Object.keys(employee);
        let i = 0;

        let result = data.map((key, i) => {
            return (
                <div key={i} className={"info-" + key}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label={this.parameters[key]}
                        multiline
                        rowsMax="4"
                        value={employee[key]}
                        onChange='{handleChange}'
                        variant="outlined"
                    />
                </div>
            )
        });
        return result;
    }

    render() {

        return (
            <div className="employee">
                <div className='employee-image'></div>
                <br /><br /><br />
                <h1 style={{ letterSpacing: 15 + 'px' }} >{this.props.employee.name.toUpperCase()}</h1>
                <br /><br /><br />
                <div className='employee-info'>
                    <h2 style={{ letterSpacing: 5 + 'px' }}>INFO</h2>
                    <br/>
                    <div className="basic-info">
                        {this.employeeList()}
                    </div>
                </div>
                    <h2 style={{ letterSpacing: 5 + 'px' }}>PAYSLIPS</h2>
                    <div className="payslips">
                        <br/>
                        stuff
                    </div>
            </div>
        );
    }

}


export default withRouter(Employee);