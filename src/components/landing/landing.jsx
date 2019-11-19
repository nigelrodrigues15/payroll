import React from "react";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AddIcon from '@material-ui/icons/Add';
import { Link, withRouter } from "react-router-dom";
import Files from 'react-files'
import { setDatabase } from "../../actions/database_actions";


class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.fileReader = new FileReader();

        this.fileReader.onload = (event) => {
            debugger
            this.props.setDatabase(JSON.parse(event.target.result));
            this.props.history.push(`/dashboard`);
        };

    }

    render() {
        return (
            <div className="landing">
                <div className='landing-image'></div>
                <Files
                    className="files-dropzone"
                    onChange={file => {
                        this.fileReader.readAsText(file[0]);
                    }}
                    onError={err => console.log(err)}
                    accepts={['.json']}
                    maxFileSize={10000000}
                    minFileSize={0}
                    clickable
                >
                    <Button id='UIbutton' variant="outlined" component="label" color="default">

                        <h1><CloudUploadIcon style={{ fontSize: 45, marginRight: 45 }} /> Upload Database</h1>
                    </Button>
                </Files>
                <br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        );
    }

}


export default withRouter(Landing);
{/* <input type="file" style={{ display: "none" }} onChange={this.handleFiles}  /> */ }