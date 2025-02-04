import React from "react";
import { Link } from 'react-router-dom';


export default function Funds(){

    return(
        <>
            <div className="funds">
                <p style={{margin:"12px 18px 0px 0px"}}>Instant,zero-cost fund transfers with UPI</p>
                <Link className="btn btn-green" style={{backgroundColor:"#FFB200"}}>Add funds</Link>
                <Link className="btn btn-blue" style={{backgroundColor:"#FFB200"}}>Withdraw</Link>
            </div>

            <div className="row">
                <div className="column">
                    <h4>Equity</h4>
                    <div className="table">
                        <div className="data">
                            <p>Available margin</p>
                            <p className="imp colored" style={{color:"#FFB200"}}>4,013.10</p>
                        </div>
                        <div className="data">
                            <p>Used margin</p>
                            <p className="imp">3,757.30</p>
                        </div>
                        <div className="data">
                            <p>Available cash</p>
                            <p className="imp">4,043.10</p>
                        </div>
                        <div className="data">
                            <p>Opening balance</p>
                            <p className="imp">4,043.10</p>
                        </div>
                        <div className="data">
                            <p>Opening balance</p>
                            <p className="imp">3736.40</p>
                        </div>
                        <div className="data">
                            <p>Payin</p>
                            <p>4064.00</p>
                        </div>
                        <div className="data">
                            <p>SPAN</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Delivery margin</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Exposure</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Options premium</p>
                            <p>0.00</p>
                        </div>
                        <hr/>
                        <div className="data">
                            <p>Collateral (Liquid funds)</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Collateral (Equity)</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Total Collateral</p>
                            <p>0.00</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="commodity">
                        <p>You don't have a commodity account</p>
                        <Link className="btn btn-blue" style={{backgroundColor:"#FFB200"}}>Open Account</Link>
                    </div>
                </div>
            </div>
        </>
    )
}