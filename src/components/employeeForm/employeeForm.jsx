import React from "react";
import { Link, withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import merge from "lodash/merge";

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.parameters = {
            "name": "Full Name",
            "DOB": "Date of Birth",
            "startDate": "Start Date",
            "defaultWage": "Default Wage",
            "defaultEEhealth": "Employee Health Contr.",
            "defaultERhealth": "Employer Health Contr."
        }
        this.state = {
                name: "",
                DOB: "",
                startDate: "",
                defaultWage: "15.00",
                defaultEEhealth: "55.00",
                defaultERhealth: "55.00",
                payslips:[]
            };
        this.handleInput = this.handleInput.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        
    }

    handleInput(event) {
        this.setState({ [event.target.name]: event.currentTarget.value });
    }
    handleCreate() {
        this.props.createEmployee(this.state);
        this.props.history.push(`/dashboard`); 
    }
    employeeList(employee = merge({}, this.state)) {
        delete employee.payslips
        let data = Object.keys(employee);
        let i = 0;
        let place;
        let result = data.map((key, i) => {
            if (this.parameters[key].includes("Date")){
                place = "DD/MM/YYYY"
            }else{
                place=""
            }
            return (
                <div key={i} className={"info-" + key}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label={this.parameters[key]}
                        name={key}
                        multiline
                        rowsMax="4"
                        value={this.state[key]}
                        placeholder={place}
                        onChange={this.handleInput}
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
                        <Button id='button-func' onClick={this.handleCreate} variant="outlined" component="label" color="secondary">
                            Create
                        </Button>
                    </div>
                </div>
                
            </div>
        );
    }

}


export default withRouter(EmployeeForm);