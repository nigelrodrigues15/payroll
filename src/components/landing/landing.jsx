import React from "react";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";

const landing = () => {
    return (
        <div className="landing">
            <div className='landing-image'></div>
            <div className="newData">
                <Link className="Link" to="/dashboard">
                    <Button id='UIbutton' variant="outlined" color="default" startIcon={<AddIcon />}>
                        Create New Data
                    </Button>
                </Link>
            </div>
            <br /><br /><br /><br />
            <div className="oldData">
                <Link className="Link" to="/dashboard">
                    <Button id='UIbutton' variant="outlined" color="default" startIcon={<CloudUploadIcon />}>
                        Upload Existing Data
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default landing;