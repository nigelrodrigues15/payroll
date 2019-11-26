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
// import { calculateTaxes } from "../calculateTaxes";

class PayslipForm extends React.Component {
    constructor(props) {
        super(props);
        let todaysDate = new Date();
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
            otHrs: "OT. Hrs",
            holidayHrs: "Holiday Hrs.",
            incentive: "Performance",
            employerHealth: "Employer Contr.",
            EI: "EI",
            CPP: "CPP",
            Tax: "Tax",
            employeeHealth: "Employee Contr."
        };
        this.state = {
            payendDate: todaysDate.toLocaleString("en-AU").split(",")[0],
            regHrs: "0.00",
            wage: this.props.employee.defaultWage,
            otHrs: "0.00",
            holidayHrs: "0.00",
            incentive: "0.00",
            employerHealth: this.props.employee.defaultERhealth,
            EI: "0.00",
            CPP: "0.00",
            Tax: "0.00",
            employeeHealth: this.props.employee.defaultEEhealth
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.key = ""
    }

    handleInput(event) {
        this.key = event.target.name;
        this.setState({ [event.target.name]: event.currentTarget.value }, () => {
            
            if(this.key != 'CPP' &&  this.key != 'EI' && this.key != 'Tax'){
    
                    this.updateTaxes();
            }
        });
    }
    updateTaxes(){
        let totalEarn = parseFloat(this.results()['totalEarn']);
        let CPP = 0.0525 * (totalEarn - (3500.00 / 24));
        let EI = 0.0158 * totalEarn;
        let fed = ((totalEarn * 24 * 0.15) - (0.15 * 13229) - (0.15 * 24 * (CPP + EI)) - (0.15 * 1245)) / 24;
        let prov = (((totalEarn * 24 * 0.1) - (0.1 * 24 * (CPP + EI)) - (0.1 * 19369)) / 24);
        let Tax = (fed + prov);
        if (CPP < 0){CPP = 0;}
        if (EI < 0){EI = 0;}
        if (Tax < 0){Tax = 0;}
        this.setState({ CPP: CPP.toFixed(2) });
        this.setState({ EI: EI.toFixed(2) });
        this.setState({ Tax: Tax.toFixed(2) });
    }
    handleCreate(event) {
        this.props.createPayslip(this.props.employeeID, this.state)
    }
    handleDateChange (date) {
        this.setState({ payendDate: date.toLocaleString("en-AU").split(",")[0]});
    }

    results() {
        debugger
        var dateParts = this.state.payendDate.split("/");
        var payendDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        let paymentDate = new Date(payendDate.getTime() + (7 * 24 * 60 * 60 * 1000));
        let totalReg = (parseFloat(this.state.wage) * parseFloat(this.state.regHrs));
        let otRate = parseFloat(this.state.wage) * 1.5;
        let totalOT = (otRate * parseFloat(this.state.otHrs));
        let totalHld = (parseFloat(this.state.wage) * 1.5 * parseFloat(this.state.holidayHrs));
        let vacationPay = (totalReg * 0.04);
        let totalEarn = parseFloat(this.state.incentive) + parseFloat(this.state.employerHealth) + totalReg + totalOT + totalHld + vacationPay;
        let totalDeduct = parseFloat(this.state.EI) + parseFloat(this.state.CPP) + parseFloat(this.state.Tax) + parseFloat(this.state.employeeHealth)

        return {
            totalReg,
            totalOT,
            totalHld,
            payendDate,
            paymentDate,
            vacationPay,
            totalEarn,
            totalDeduct,
            otRate
        }
    }

    textarea(key, value) {
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
    dateselect(key, value) {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label={this.payslipParam[key]}
                    name={key}
                    value={value}
                    onChange={this.handleDateChange}
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
        console.log('render')
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
                                    <TableCell align="center" colSpan={2}><h4 style={{ letterSpacing: 5 }}>{this.dateselect("payendDate", results.payendDate )}</h4></TableCell>
                                    <TableCell align="center" colSpan={2}></TableCell>
                                    <TableCell ><h4 style={{ letterSpacing: 5 }}>Payment Date</h4></TableCell>
                                    <TableCell align="center" colSpan={2}><h4 style={{ letterSpacing: 5 }}>{results.paymentDate.toLocaleDateString("en-AU").split(",")[0]}</h4></TableCell>
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
                                    <TableCell align="right"><h4>{this.textarea('wage', this.state.wage)}</h4></TableCell>
                                    <TableCell align="right"><h4>{results.totalReg.toFixed(2)}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell><h4>Employment Insurance</h4></TableCell>
                                    <TableCell align="right"><h4>{this.textarea("EI", this.state.EI)}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                </TableRow>
                                <TableRow key='{row.name}'>
                                    <TableCell><h4>Overtime</h4></TableCell>
                                    <TableCell align="right"><h4>{this.textarea('otHrs', this.state.otHrs)}</h4></TableCell>
                                    <TableCell align="right"><h4>{results.otRate.toFixed(2)}</h4></TableCell>
                                    <TableCell align="right"><h4>{results.totalOT.toFixed(2)}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell><h4>Canada Pension Plan</h4></TableCell>
                                    <TableCell align="right"><h4>{this.textarea("CPP", this.state.CPP)}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                </TableRow>
                                <TableRow key='{row.name}'>
                                    <TableCell><h4>Holiday Pay</h4></TableCell>
                                    <TableCell align="right"><h4>{this.textarea('holidayHrs', this.state.holidayHrs)}</h4></TableCell>
                                    <TableCell align="right"><h4>{results.otRate.toFixed(2)}</h4></TableCell>
                                    <TableCell align="right"><h4>{results.totalHld.toFixed(2)}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell><h4>Total Tax Deductions</h4></TableCell>
                                    <TableCell align="right"><h4>{this.textarea("Tax", this.state.Tax)}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                </TableRow>
                                <TableRow key='{row.name}'>
                                    <TableCell><h4>Performance Incentive</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4>{this.textarea("incentive", this.state.incentive)}</h4></TableCell>
                                    <TableCell align="right"><h4>{this.state.incentive}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell><h4>Employee Health Benefit Contribution</h4></TableCell>
                                    <TableCell align="right"><h4>{this.state.employeeHealth}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                </TableRow>
                                <TableRow key='{row.name}'>
                                    <TableCell><h4>Vacation Pay</h4></TableCell>
                                    <TableCell align="right"><h4> </h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4>{results.vacationPay.toFixed(2)}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell><h4></h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                </TableRow>
                                <TableRow key='{row.name}'>
                                    <TableCell><h4>Employer Health Benefit Contribution</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4>{this.state.employerHealth}</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell><h4></h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                </TableRow>
                                <TableRow key='{row.name}'>
                                    <TableCell><h4>Total Earnings</h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4></h4></TableCell>
                                    <TableCell align="right"><h4>{results.totalEarn.toFixed(2)}</h4></TableCell>
                                    <TableCell align="right"><h4>$$$</h4></TableCell>
                                    <TableCell><h4>Total Deductions</h4></TableCell>
                                    <TableCell align="right"><h4>{"$$$"}</h4></TableCell>
                                    <TableCell align="right"><h4>$$$</h4></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right" colSpan={2}><h4 style={{ letterSpacing: 5 }}>Net Pay</h4></TableCell>
                                    <TableCell align="left" colSpan={2}><h4 >{"$$$"}</h4></TableCell>
                                    <TableCell align="right" colSpan={2}><h4 style={{ letterSpacing: 5 }}>YTD Net Pay</h4></TableCell>
                                    <TableCell align="left" colSpan={2}><h4>$$$</h4></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br/>
                    <div className="payslipformActions">
                        <Button id='button-create' onClick={this.handleCreate} variant="outlined" component="label" color="secondary">
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