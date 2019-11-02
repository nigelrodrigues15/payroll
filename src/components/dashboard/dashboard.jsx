import React from "react";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";

const dashboard = () => {
    return (
        <div className="dashboard">
            <div className='dashboard-image'></div>
            <div className="newData">
                <Link className="Link" to="/dashboard">
                    <Button id='UIbutton' variant="contained" color="primary" startIcon={<AddIcon />}>
                        Dashboard
                    </Button>
                </Link>
            </div>
            <br /><br /><br /><br />
            <div className="oldData">
                <Link className="Link" to="/dashboard">
                    <Button id='UIbutton' variant="contained" color="primary" startIcon={<CloudUploadIcon />}>
                        Dashboard
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default dashboard;