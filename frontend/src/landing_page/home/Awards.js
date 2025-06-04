import React from "react";

export default function Awards(){
    return(
        <div className="container mt-2">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="Largest Broker"/>
                </div>
                <div className="col-6 p-3 mt-5">
                    <h1 className="mb-3">Largest stock broker in India</h1>
                    <p className="mb-4">2+ million FirstEarner clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Direct Mutual Funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="/media/images/pressLogos.png" alt="Press Logos" style={{width : "90%",marginLeft : "10px"}} />
                </div>
            </div>
        </div>
    )
}
