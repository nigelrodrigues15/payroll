import React from "react";
import { Link, withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';

class PayslipForm extends React.Component {
    constructor(props) {
        super(props);
        this.employeeParam = {
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
        this.payslipParam = {
            payendDate: "Pay End Date",
            regHrs: "Reg. Hrs.",
            wage: "Wage",
            otHrs: "0.00",
            holidayHrs: "0.00",
            incentive: "0.00",
            employerHealth: "13.00",
            EI: "0.00",
            CPP: "0.00",
            Tax: "0.00",
            employeeHealth: "105.00"
        };
        this.state = {
            payendDate: "1/10/2010",
            regHrs: "0.00",
            wage: "15.00",
            otHrs: "0.00",
            holidayHrs: "0.00",
            incentive: "0.00",
            employerHealth: "13.00",
            EI: "0.00",
            CPP: "0.00",
            Tax: "0.00",
            employeeHealth: "105.00"
        };
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event) {
        debugger
        this.setState({ [event.target.name]: event.currentTarget.value });
    }

    results() {
        var dateParts = this.state.payendDate.split("/");
        var payendDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        let paymentDate = new Date(payendDate.getTime() + (7 * 24 * 60 * 60 * 1000));
        let totalReg = (parseFloat(this.state.wage) * parseFloat(this.state.regHrs));
        let totalOT = (parseFloat(this.state.wage) * 1.5 * parseFloat(this.state.otHrs));
        let totalHld = (parseFloat(this.state.wage) * 1.5 * parseFloat(this.state.holidayHrs));
        let vacationPay = (totalReg * 0.04);
        let totalEarn = totalReg + totalOT + totalHld + vacationPay;
        let totalDeduct = parseFloat(this.state.EI) + parseFloat(this.state.CPP) + parseFloat(this.state.Tax) + parseFloat(this.state.employeeHealth)
        return {
            totalReg: totalReg,
            totalOT: totalOT,
            totalHld
        }
    }

    textarea(key, value = "--") {

        return (
            <TextField
                id="outlined-multiline-flexible"
                label={this.payslipParam[key]}
                name={key}
                multiline
                rowsMax="4"
                value={value}
                onChange={this.handleInput}
                variant="outlined"
            />
        );
    }
    dateselect(label, value) {
        
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label={label}
                    value={value}
                    onChange={this.handleInput}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        );
    }

    render() {
        let todaysDate = new Date();
        let results = this.results()
        console.log(todaysDate)
        return (
            <div className="newpayslip">
                <div key={"i"} id="pay" className={"paycheck"}>
                    <br /><br />
                    <TableContainer component={Paper}>
                        <Table className={"classes.table"} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell colSpan={4}><h2 style={{ letterSpacing: 5 }}>Create a new Payslip</h2></TableCell>
                                    <TableCell align="center" colSpan={4}><h2 style={{ letterSpacing: 5 }}>{this.props.employee.name.toUpperCase()}</h2></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell ><h4 style={{ letterSpacing: 5 }}>Pay End Date</h4></TableCell>
                                    <TableCell align="center" colSpan={2}><h4 style={{ letterSpacing: 5 }}>{this.dateselect("Pay End Date", todaysDate)}</h4></TableCell>
                                    <TableCell align="center" colSpan={2}></TableCell>
                                    <TableCell ><h4 style={{ letterSpacing: 5 }}>Payment Date</h4></TableCell>
                                    <TableCell align="center" colSpan={2}><h4 style={{ letterSpacing: 5 }}>{this.dateselect("Payment Date", todaysDate)}</h4></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><h3>Earnings</h3></TableCell>
                                    <TableCell align="right"><h3>Hours</h3></TableCell>
                                    <TableCell align="right"><h3>Rate</h3></TableCell>
                                    <TableCell align="right"><h3>Total</h3></TableCell>
                                    <TableCell align="right"><h3>YTD</h3></TableCell>
                                    <TableCell><h3>Deductions</h3></TableCell>
                                    <TableCell align="right"><h3>Total</h3></TableCell>
                                    <TableCell align="right"><h3>YTD</h3></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key='{row.name}'>
                                    <TableCell><h4>Regular</h4></TableCell>
                                    <TableCell align="right"><h4>{this.textarea('regHrs', this.state.regHrs)}</h4></TableCell>
                                    <TableCell align="right"><h4>{this.textarea('wage', this.props.employee.defaultWage)}</h4></TableCell>
                                    <TableCell align="right"><h4>{results.totalReg.toFixed(2)}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell><h4>Employment Insurance</h4></TableCell>
                                    <TableCell align="right"><h4>{"EI"}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                </TableRow>
                                <TableRow key='{row.name}'>
                                    <TableCell><h4>Overtime</h4></TableCell>
                                    <TableCell align="right"><h4>{this.textarea("Overtime. Hrs.")}</h4></TableCell>
                                    <TableCell align="right"><h4>{"1.5xwage"}</h4></TableCell>
                                    <TableCell align="right"><h4>{"totalOT"}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell><h4>Canada Pension Plan</h4></TableCell>
                                    <TableCell align="right"><h4>{"CPP"}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                </TableRow>
                                <TableRow key='{row.name}'>
                                    <TableCell><h4>Holiday Pay</h4></TableCell>
                                    <TableCell align="right"><h4>{this.textarea("Holiday Hrs.")}</h4></TableCell>
                                    <TableCell align="right"><h4>{"1.5xwage"}</h4></TableCell>
                                    <TableCell align="right"><h4>{"totalHld"}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell><h4>Total Tax Deductions</h4></TableCell>
                                    <TableCell align="right"><h4>{"Total Tax"}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                </TableRow>
                                <TableRow key='{row.name}'>
                                    <TableCell><h4>Performance Incentive</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4>{this.textarea("Performance")}</h4></TableCell>
                                    <TableCell align="right"><h4>{"incentive"}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell><h4>Employee Health Benefit Contribution</h4></TableCell>
                                    <TableCell align="right"><h4>{this.textarea("Health", this.props.employee.defaultEEhealth)}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                </TableRow>
                                <TableRow key='{row.name}'>
                                    <TableCell><h4>Vacation Pay</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4>{"vacatioon"}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell><h4></h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                </TableRow>
                                <TableRow key='{row.name}'>
                                    <TableCell><h4>Employer Health Benefit Contribution</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4>{this.textarea("Health", this.props.employee.defaultERhealth)}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell><h4></h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                </TableRow>
                                <TableRow key='{row.name}'>
                                    <TableCell><h4>Total Earnings</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4>{"totalEarn"}</h4></TableCell>
                                    <TableCell align="right"><h4>YTD amount</h4></TableCell>
                                    <TableCell><h4>Total Deductions</h4></TableCell>
                                    <TableCell align="right"><h4>{"totalDeduct"}</h4></TableCell>
                                    <TableCell align="right"><h4>YTD amount</h4></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right" colSpan={2}><h4 style={{ letterSpacing: 5 }}>Net Pay</h4></TableCell>
                                    <TableCell align="left" colSpan={2}><h4 >{"(totalEarn - totalDeduct)"}</h4></TableCell>
                                    <TableCell align="right" colSpan={2}><h4 style={{ letterSpacing: 5 }}>YTD Net Pay</h4></TableCell>
                                    <TableCell align="left" colSpan={2}><h4>ToBeFilled</h4></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br/>
                    <div className="payslipformActions">
                        <Button id='button-create' variant="outlined" component="label" color="secondary">
                            Create
                        </Button>
                    </div>
                    <br /><br />
                </div>


            </div>
        );
    }

}


export default withRouter(PayslipForm);