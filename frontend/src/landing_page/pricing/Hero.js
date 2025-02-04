import React from "react";


export default function Hero(){

    return(
        <div className="container text-center">
            <div className="row mt-5 mb-5 p-5">
                <h1 className="text-center" style={{fontSize:"44px"}}>Charges</h1>
                <p className="text-center p-3" style={{color:"#9B9B9B",fontSize:"20px"}}>List of all charges and taxes</p>
            </div>
            <div className="row p-5">
                <div className="col-4 text-center p-3">
                    <img src="media/images/pricingEquity.svg" alt="Pricing Equity" style={{width:"70%"}}/>
                    <h1 className="fs-2">Free equity delivery</h1>
                    <p className="px-5 py-2" style={{color:"#666666"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 text-center p-3">
                    <img src="media/images/intradayTrades.svg" alt="Intraday Trades" style={{width:"70%"}}/>
                    <h1 className="fs-2">Intraday and F&O trades</h1>
                    <p className="px-5 py-2" style={{color:"#666666"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 text-center p-3">
                    <img src="media/images/pricingEquity.svg" alt="Pricing Equity" style={{width:"70%"}}/>
                    <h1 className="fs-2">Free direct MF</h1>
                    <p className="px-5 py-2" style={{color:"#666666"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}