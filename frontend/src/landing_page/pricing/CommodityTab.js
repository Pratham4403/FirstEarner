import React from "react";

export default function EquityTab(){
    
    return(
        <div class="container my-3 border-top p-5">
            <h2 className="mt-5 mb-5" style={{color:"#FFB200"}}>Commodity Pricing</h2>
                <table class="table table-striped border mb-5" >
                    <thead>
                        <tr>
                            <th style={{color:"#424242"}}> </th>
                            <th style={{color:"#424242"}}>Commodity futures</th>
                            <th style={{color:"#424242"}}>Commodity options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>Brokerage</td>
                            <td className="py-3" style={{color:"#424242"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                            <td className="py-3" style={{color:"#424242"}}>₹ 20/executed order</td>
                        </tr>
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>STT/CTT</td>
                            <td className="py-3" style={{color:"#424242"}}>0.01% on sell side (Non-Agri)</td>
                            <td className="py-3" style={{color:"#424242"}}>0.05% on sell side</td>  
                        </tr>   
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>Transaction charges</td>
                            <td className="py-3" style={{color:"#424242"}}>    
                                MCX: 0.0021% <br/>
                                NSE: 0.0001%
                            </td>   
                            <td className="py-3" style={{color:"#424242"}}>
                                MCX: 0.0418% <br/>  
                                NSE: 0.001%
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>GST</td>
                            <td className="py-3" style={{color:"#424242"}}>18% on (brokerage + SEBI <br/>charges + transaction charges)</td>
                            <td className="py-3" style={{color:"#424242"}}>18% on (brokerage + SEBI <br/>charges + transaction charges)</td>
                        </tr>
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>SEBI charges</td>
                            <td className="py-3" style={{color:"#424242"}}>
                                Agri: <br/>
                                ₹1 / crore <br/>
                                Non-agri: <br/>
                                ₹10 / crore
                            </td>
                            <td className="py-3" style={{color:"#424242"}}>₹10 / crore</td>
                        </tr>   
                        <tr>
                            <td className="py-3" style={{color:"#666666"}}>Stamp charges</td>
                            <td className="py-3" style={{color:"#424242"}}>0.002% or ₹200 / crore on buy side</td>
                            <td className="py-3" style={{color:"#424242"}}>0.003% or ₹300 / crore on buy side</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}