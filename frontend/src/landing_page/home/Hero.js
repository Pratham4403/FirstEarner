import React from "react";
import {Link} from 'react-router-dom';

export default function Hero(){

    return(
        <div className="container p-5 mb-2">
            <div className="row text-center">
                <img className="mb-4" src="media/images/homeHero.png" alt="hero-image"/>
                <h1 className="mt-4 mb-4">Invest in everything</h1>
                <p className="mb-4">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to="/signup">
                    <button className="btn mb-5" style={{width : "16%",margin : "0 auto",backgroundColor : "#FFB200",color : "white",fontSize : "18px"}}>Sign up for free</button>
                </Link>
            </div>

        </div>
    )
}