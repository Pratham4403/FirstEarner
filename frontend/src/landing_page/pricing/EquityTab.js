import React from "react";

export default function EquityTab(){
    
    return(
        <div class="container my-3 border-top p-5">
            <h2 className="mt-5 mb-5" style={{color:"#FFB200"}}>Equity Pricing</h2>
                <table class="table table-striped border mb-5" >
                    <thead>
                        <tr>
                            <th style={{color:"#424242"}}> </th>
                            <th style={{color:"#424242"}}>Equity Delivery</th>
                            <th style={{color:"#424242"}}>Equity Intraday</th>
                            <th style={{color:"#424242"}}>F&O - Futures</th>
                            <th style={{color:"#424242"}}>F&O - Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>Brokerage</td>
                            <td className="py-3" style={{color:"#424242"}}>Zero Brokerage</td>
                            <td className="py-3" style={{color:"#424242"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                            <td className="py-3" style={{color:"#424242"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                            <td className="py-3" style={{color:"#424242"}}>Flat Rs. 20 per executed order</td>
                        </tr>
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>STT/CTT</td>
                            <td className="py-3" style={{color:"#424242"}}>0.1% on buy & sell</td>
                            <td className="py-3" style={{color:"#424242"}}>0.025% on the sell side</td>
                            <td className="py-3" style={{color:"#424242"}}>0.02% on the sell side</td>
                            <td className="py-3" style={{color:"#424242"}}>
                                <ul class="mb-0">
                                    <li style={{color:"#424242"}}>0.125% of the intrinsic value on options that are bought and exercised</li>
                                    <li style={{color:"#424242"}}>0.1% on sell side (on premium)</li>
                                </ul>   
                            </td>   
                        </tr>   
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>Transaction charges</td>
                            <td className="py-3" style={{color:"#424242"}}>    
                                NSE: 0.00297%<br/>
                                BSE: 0.00375%
                            </td>   
                            <td className="py-3" style={{color:"#424242"}}>
                                NSE: 0.00297%<br/>
                                BSE: 0.00375%
                            </td>
                            <td className="py-3" style={{color:"#424242"}}>
                                NSE: 0.00173%<br/>
                                BSE: 0
                            </td>
                            <td className="py-3" style={{color:"#424242"}}>
                                NSE: 0.03503% (on premium)<br/>
                                BSE: 0.0325% (on premium)
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>GST</td>
                            <td className="py-3" style={{color:"#424242"}}>18% on (brokerage + SEBI <br/>charges + transaction charges)</td>
                            <td className="py-3" style={{color:"#424242"}}>18% on (brokerage + SEBI <br/>charges + transaction charges)</td>
                            <td className="py-3" style={{color:"#424242"}}>18% on (brokerage + SEBI <br/>charges + transaction charges)</td>
                            <td className="py-3" style={{color:"#424242"}}>18% on (brokerage + SEBI <br/>charges + transaction charges)</td>
                        </tr>
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>SEBI charges</td>
                            <td className="py-3" style={{color:"#424242"}}>₹10 / crore</td>
                            <td className="py-3" style={{color:"#424242"}}>₹10 / crore</td>
                            <td className="py-3" style={{color:"#424242"}}>₹10 / crore</td>
                            <td className="py-3" style={{color:"#424242"}}>₹10 / crore</td>
                        </tr>   
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>Stamp charges</td>
                            <td className="py-3" style={{color:"#424242"}}>0.015% or ₹1500 / crore on buy side</td>
                            <td className="py-3" style={{color:"#424242"}}>0.003% or ₹300 / crore on buy side</td>
                            <td className="py-3" style={{color:"#424242"}}>0.002% or ₹200 / crore on buy side</td>
                            <td className="py-3" style={{color:"#424242"}}>0.003% or ₹300 / crore on buy side</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}