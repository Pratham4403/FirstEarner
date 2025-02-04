import React from "react";

export default function EquityTab(){
    
    return(
        <div class="container my-3 border-top p-5">
            <h2 className="mt-5 mb-5" style={{color:"#FFB200"}}>Currency Pricing</h2>
                <table class="table table-striped border mb-5" >
                    <thead>
                        <tr>
                            <th style={{color:"#424242"}}> </th>
                            <th style={{color:"#424242"}}>Currency futures</th>
                            <th style={{color:"#424242"}}>Currency options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>Brokerage</td>
                            <td className="py-3" style={{color:"#424242"}}>0.03% or ₹ 20/executed order whichever is lower</td>
                            <td className="py-3" style={{color:"#424242"}}>₹ 20/executed order</td>
                        </tr>
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>STT/CTT</td>
                            <td className="py-3" style={{color:"#424242"}}>No STT</td>
                            <td className="py-3" style={{color:"#424242"}}>No STT</td>  
                        </tr>   
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>Transaction charges</td>
                            <td className="py-3" style={{color:"#424242"}}>    
                                NSE: 0.00035%<br/>
                                BSE: 0.00045%
                            </td>   
                            <td className="py-3" style={{color:"#424242"}}>
                                NSE: 0.0311%<br/>
                                BSE: 0.001%
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>GST</td>
                            <td className="py-3" style={{color:"#424242"}}>18% on (brokerage + SEBI <br/>charges + transaction charges)</td>
                            <td className="py-3" style={{color:"#424242"}}>18% on (brokerage + SEBI <br/>charges + transaction charges)</td>
                        </tr>
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>SEBI charges</td>
                            <td className="py-3" style={{color:"#424242"}}>₹10 / crore</td>
                            <td className="py-3" style={{color:"#424242"}}>₹10 / crore</td>
                        </tr>   
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>Stamp charges</td>
                            <td className="py-3" style={{color:"#424242"}}>0.0001% or ₹10 / crore on buy side</td>
                            <td className="py-3" style={{color:"#424242"}}>0.0001% or ₹10 / crore on buy side</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}