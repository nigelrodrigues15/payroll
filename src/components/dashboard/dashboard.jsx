import React from "react";
import { Link, withRouter } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('component will mount')
    }

    employeeList(employees = this.props.employees) {
        let result = employees.map((employee, i) => {
            return (
                <Link className="Link" to={`/employee/${i}`}>
                    <Button id='button-employee' size="large" className="carouselList" variant="outlined" component="label" color="primary">
                        <div className='listContent'>{employee.name}</div>
                    </Button>
                </Link>
            )
        });
        return result;
    }

    monthList(months = this.props.months) {
        let result = months.map((month, i) => {
            return (
                <Link className="Link" >
                    <Button id='button-month' size="large" className="carouselList" variant="outlined" component="label" color="primary">
                        <div className='listContent'>{month}</div>
                    </Button>
                </Link>
            )
        });
        return result;
    }

    render() {

        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
                partialVisibilityGutter: 40
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                partialVisibilityGutter: 40
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                partialVisibilityGutter: 30
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                partialVisibilityGutter: 30
            },
        };
        var payperiodMonth = 0;

        const handleChange = event => {
            payperiodMonth = (event.target.value);
        };

        return (
            <div className="dashboard">
                <div className='dashboard-image'></div>
                <br /><br /><br />
                <h1 style={{ letterSpacing: 15 }} >DASHBOARD</h1>
                <br /><br /><br />
                <div className="carousel">
                    <h1>EMPLOYEES</h1>
                    <br />
                    <div className='carousel-layout'>
                        <Link className="Link doublespan" to="/newEmployee">
                            <Button id='button-employee' size='large' className="carouselList" variant="outlined" component="label" color="secondary">

                                <div className='listContent'> + New Employee</div>
                            </Button>
                        </Link>
                        {this.employeeList()}
                    </div>

                </div>
                <br /><br /><br />
                <div className="carousel">
                    <h1>SUMMARY</h1>
                    <br/><br/>
                    <div className='carousel-layout'>
                        <Link className="Link doublespan" >
                            <Button id='button-year' size="large" className="carouselList" variant="outlined" component="label" color="secondary">
                                <div className='listContent'>Year to Date</div>
                            </Button>
                        </Link>
                        {this.monthList()}
                    </div>

                </div>
                <br /><br /><br />
                {/* <div className="payperiod">
                    <FormControl id='paypperiodMonth'>
                        <InputLabel id="monthLabel">PayPeriod Month</InputLabel>
                        <Select
                            labelId="monthLabel"
                            id="monthSelect"
                            value={payperiodMonth}
                            onChange={handleChange}
                        >
                            <MenuItem value="month">
                                <em>Month</em>
                            </MenuItem>
                            <MenuItem value={1}>January</MenuItem>
                            <MenuItem value={2}>Feburary</MenuItem>
                            <MenuItem value={3}>March</MenuItem>
                        </Select>
                        <FormHelperText>Select PayPeriod Month</FormHelperText>
                    </FormControl>
                </div> */}
            </div>
        );
    };

};

export default withRouter(Dashboard);