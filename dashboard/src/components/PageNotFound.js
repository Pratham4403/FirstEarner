import React from "react";
import Alert from '@mui/material/Alert';


export default function PageNotFound(){

    return(
        <div className="container mt-5 d-flex justify-content-center">
            <Alert severity="error" variant="filled" style={{width : "70%"}} className="d-flex">
                <div><b>404 Not Found</b></div>
                Sorry, the page you are looking for does not exist.
            </Alert>
        </div>
    )
}
