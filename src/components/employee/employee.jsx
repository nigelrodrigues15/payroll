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
import PayslipForm from "./payslipForm"
import Button from '@material-ui/core/Button';

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.parameters = {
            "name": "Name",
            "DOB": "Date of Birth",
            "startDate": "Start Date",
            "defaultWage": "Wage",
            "defaultEEhealth": "Employee Health Contr.",
            "defaultERhealth": "Employer Health Contr."
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
    payslipList(payslip, employee) {
        var dateParts = payslip.payendDate.split("/");
        var payendDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
        let paymentDate = new Date(payendDate.getTime() + (7 * 24 * 60 * 60 * 1000));
        let totalReg = (parseFloat(payslip.wage) * parseFloat(payslip.regHrs));
        let totalOT = (parseFloat(payslip.wage)* 1.5 * parseFloat(payslip.otHrs));
        let totalHld = (parseFloat(payslip.wage) * 1.5 * parseFloat(payslip.holidayHrs));
        let vacationPay = (totalReg * 0.04);
        let totalEarn = totalReg + totalOT + totalHld + vacationPay;
        let totalDeduct = parseFloat(payslip.EI) + parseFloat(payslip.CPP) + parseFloat(payslip.Tax) + parseFloat(payslip.employeeHealth)
        return (
            <div key={"i"} id="pay" className={"paycheck"}>
                <br/><br/>
                <TableContainer component={Paper}>
                    <Table className={"classes.table"} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><h2 style={{ letterSpacing: 5}}>EDO JAPAN</h2></TableCell>
                                <TableCell align="center" colSpan={7}><h2 style={{ letterSpacing: 5}}>{employee.name.toUpperCase()}</h2></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><h4 style={{ letterSpacing: 5}}>Pay End Date</h4></TableCell>
                                <TableCell align="center" colSpan={2}><h4 style={{ letterSpacing: 5 }}>{payendDate.toLocaleString("en-AU").split(",")[0]}</h4></TableCell>
                                <TableCell align="center" colSpan={2}></TableCell>
                                <TableCell ><h4 style={{ letterSpacing: 5}}>Payment Date</h4></TableCell>
                                <TableCell align="center" colSpan={2}><h4 style={{ letterSpacing: 5 }}>{paymentDate.toLocaleDateString("en-AU").split(",")[0]}</h4></TableCell>
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
                                <TableCell align="right"><h4>{payslip.regHrs}</h4></TableCell>
                                <TableCell align="right"><h4>{payslip.wage}</h4></TableCell>
                                <TableCell align="right"><h4>{totalReg.toFixed(2)}</h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell><h4>Employment Insurance</h4></TableCell>
                                <TableCell align="right"><h4>{payslip.EI}</h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                            </TableRow>
                            <TableRow key='{row.name}'>
                                <TableCell><h4>Overtime</h4></TableCell>
                                <TableCell align="right"><h4>{payslip.otHrs}</h4></TableCell>
                                <TableCell align="right"><h4>{String((parseFloat(payslip.wage) * 1.5).toFixed(2))}</h4></TableCell>
                                <TableCell align="right"><h4>{totalOT.toFixed(2)}</h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell><h4>Canada Pension Plan</h4></TableCell>
                                <TableCell align="right"><h4>{payslip.CPP}</h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                            </TableRow>
                            <TableRow key='{row.name}'>
                                <TableCell><h4>Holiday Pay</h4></TableCell>
                                <TableCell align="right"><h4>{payslip.holidayHrs}</h4></TableCell>
                                <TableCell align="right"><h4>{String((parseFloat(payslip.wage) * 1.5).toFixed(2))}</h4></TableCell>
                                <TableCell align="right"><h4>{totalHld.toFixed(2)}</h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell><h4>Total Tax Deductions</h4></TableCell>
                                <TableCell align="right"><h4>{payslip.Tax}</h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                            </TableRow>
                            <TableRow key='{row.name}'>
                                <TableCell><h4>Performance Incentive</h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell align="right"><h4>{payslip.incentive}</h4></TableCell>
                                <TableCell align="right"><h4>{payslip.incentive}</h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell><h4>Employee Health Benefit Contribution</h4></TableCell>
                                <TableCell align="right"><h4>{payslip.employeeHealth}</h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                            </TableRow>
                            <TableRow key='{row.name}'>
                                <TableCell><h4>Vacation Pay</h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell align="right"><h4>{vacationPay.toFixed(2)}</h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell><h4></h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                            </TableRow>
                            <TableRow key='{row.name}'>
                                <TableCell><h4>Employer Health Benefit Contribution</h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell align="right"><h4>{payslip.employerHealth}</h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell><h4></h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                            </TableRow>
                            <TableRow key='{row.name}'>
                                <TableCell><h4>Total Earnings</h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell align="right"><h4></h4></TableCell>
                                <TableCell align="right"><h4>{totalEarn.toFixed(2)}</h4></TableCell>
                                <TableCell align="right"><h4>YTD amount</h4></TableCell>
                                <TableCell><h4>Total Deductions</h4></TableCell>
                                <TableCell align="right"><h4>{totalDeduct.toFixed(2)}</h4></TableCell>
                                <TableCell align="right"><h4>YTD amount</h4></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right" colSpan={2}><h4 style={{ letterSpacing: 5 }}>Net Pay</h4></TableCell>
                                <TableCell align="left" colSpan={2}><h4 >{(totalEarn - totalDeduct).toFixed(2)}</h4></TableCell>
                                <TableCell align="right" colSpan={2}><h4 style={{ letterSpacing: 5 }}>YTD Net Pay</h4></TableCell>
                                <TableCell align="left" colSpan={2}><h4 style={{ letterSpacing: 5 }}>ToBeFilled</h4></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>
                <div className="payslipActions">
                    <Button id='button-task' variant="outlined" component="label" color="secondary">
                        CRA Check
                    </Button>
                    <Button id='button-task' variant="outlined" component="label" color="secondary">
                        Print
                    </Button>
                </div>
                <br/><br/>
            </div>
        );
    }
    payslipsList(payslips = this.props.payslips){
        let result = payslips.map((payslip, i) => {
            return (
                this.payslipList(payslip, this.props.employee)
            )
        });
        return result;
    }

    printIframe() {
        debugger
        const iframe = document.frames ? document.frames["pay"] : document.getElementById("pay");
        const iframeWindow = iframe.contentWindow || iframe;

        iframe.focus();
        iframeWindow.print();

        return false;
    };

    render() {

        return (
            <div className="employee">
                <div className='employee-image'></div>
                <br /><br /><br />
                <h1 style={{ letterSpacing: 15 + 'px', fontWeight: 350 }} >{this.props.employee.name.toUpperCase()}</h1>
                <br /><br /><br />
                <div className='employee-info'>
                    <h2 style={{ letterSpacing: 5 + 'px' }}>INFO</h2>
                    <br />
                    <div className="basic-info">
                        {this.employeeList()}
                    </div>
                </div>
                <h2 style={{ letterSpacing: 5 + 'px' }}>PAYSLIPS</h2>
                <div className="payslips">
                    <PayslipForm employee={this.props.employee}/>
                    {this.payslipsList().reverse()}
                    <br /><br /><br />
                    <br /><br /><br />
                    <br /><br /><br />
                </div>
            </div>
        );
    }

}


export default withRouter(Employee);