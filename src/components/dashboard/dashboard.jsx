import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

const dashboard = () => {
    return (
        <div className="dashboard">
            <div className='dashboard-image'></div>
            <h1>DASHBOARD</h1>
            <br /><br />
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
                        <div className='listContent'> + New Employee</div>
                    </div>
                    <div className="carouselList">
                        <div className='listContent'>Nigel Rodrigues</div>
                    </div>
                    <div className="carouselList">
                        <div className='listContent'>Employee Name</div>
                    </div>
                    <div className="carouselList">
                        <div className='listContent'>Employee Name</div>
                    </div>
                    <div className="carouselList">
                        <div className='listContent'>Employee Name</div>
                    </div>


                </Carousel>
            </div>
            <br/><br/><br/>
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

export default dashboard;