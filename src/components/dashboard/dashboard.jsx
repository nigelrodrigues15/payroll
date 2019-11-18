import React from "react";
import { Link, withRouter } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('component will mount')
    }

    employeeList(employees=this.props.employees){
        let result = employees.map((employee,i) => {
            return (
                <div key={i} className="carouselList">
                        <Link className="Link" to={`/employee/${i}`}>
                                 <div className='listContent'>{employee.name}</div>
                        </Link>
                </div>
            )
        });
        return result;
    }

    monthList(months=this.props.months){
        let result = months.map((month,i) => {
            return (
                <div key={i} className="carouselList">
                        <Link className="Link" to={`/${month}`}>
                            <div className='listContent'> {month} </div>
                        </Link>
                </div>
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
                <h1 style={{ letterSpacing: 15 + 'px', fontWeight: 400 }} >DASHBOARD</h1>
                <br /><br /><br />
                <div className="carousel">
                    <h1>EMPLOYEES</h1>
                    <Carousel
                        responsive={responsive}
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        partialVisible
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >

                        <div className="carouselList">
                            <Link className="Link" to="/newEmployee">
                                <div className='listContent'> + New Employee</div>
                            </Link>
                        </div>
                        {this.employeeList()}
                        
                    </Carousel>
                </div>
                <br /><br /><br />
                <div className="carousel">
                    <h1>MONTHLY SUMMARY</h1>
                    <Carousel
                        responsive={responsive}
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        partialVisible
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {this.monthList()}

                    </Carousel>
                </div>
                <br /><br /><br />
                <div className="payperiod">
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
                </div>
            </div>
        );
    };

};

export default withRouter(Dashboard);