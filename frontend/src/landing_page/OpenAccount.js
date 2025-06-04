import React from "react";
import {Link} from 'react-router-dom';

export default function OpenAccount(){

    return(
        <div className="container p-5 mb-2">
            <div className="row text-center">
                <img className="mb-4" src="media/images/homeHero.png" alt="hero-image"/>
                <h1 className="mt-4 mb-4">Open a FirstEarner account</h1>
                <p className="mb-4 text-muted"> Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to="/signup">
                    <button className="p-1 btn mb-3" style={{width : "16%",margin : "0 auto",backgroundColor : "#FFB200",color : "white",fontSize : "18px"}}>Sign up for free</button>
                </Link>
            </div>

        </div>
    )
}
