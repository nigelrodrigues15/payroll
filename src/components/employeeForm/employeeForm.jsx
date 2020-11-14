import React from "react";
import { Link, withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class EmployeeForm extends React.Component {
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
        this.sampleEmployee ={
            "name": "Person 1",
            "DOB": "15/10/1995",
            "startDate": "5/10/2005",
            "defaultWage": "15.00",
        }
    }

    employeeList(employee = this.sampleEmployee) {
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
                <h1 style={{ letterSpacing: 15 + 'px', fontWeight: 350 }} >NEW EMPLOYEE</h1>
                <br /><br /><br />
                <div className='employee-info'>
                    <div className="basic-info">
                        {this.employeeList()}
                        <Button id='button-create' variant="outlined" component="label" color="secondary">
                            Create
                        </Button>
                    </div>
                </div>
                
            </div>
        );
    }

}


export default withRouter(EmployeeForm);