import React from "react";


export default function Charges(){

    return(
        <div className="container">
            <div class="p-4">
                <h2 class="mb-5">Charges for Account Opening</h2>
                <table class="table table-striped border mb-5">
                    <thead>
                        <tr>
                            <th style={{color:"#424242"}}>Type of Account</th>
                            <th style={{color:"#424242"}}>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{color:"#424242"}}>Online account</td>
                            <td style={{color:"#424242"}}><span class="badge bg-success">FREE</span></td>
                        </tr>
                        <tr>
                            <td style={{color:"#424242"}}>Offline account</td>
                            <td style={{color:"#424242"}}><span class="badge bg-success">FREE</span></td>
                        </tr>
                        <tr>
                            <td style={{color:"#424242"}}>NRI account (offline only)</td>
                            <td style={{color:"#424242"}}>₹ 500</td>
                        </tr>
                        <tr>
                            <td style={{color:"#424242"}}>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td style={{color:"#424242"}}>₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="p-4 mb-5">
                <h2 class="mt-5 mb-5">Charges for Optional Value Added Services</h2>
                <table class="table table-striped border">
                    <thead>
                        <tr>
                            <th style={{color:"#424242"}}>Service</th>
                            <th style={{color:"#424242"}}>Billing Frequency</th>
                            <th style={{color:"#424242"}}>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{color:"#424242"}}>Tickertape</td>
                            <td style={{color:"#424242"}}>Monthly / Annual</td>
                            <td style={{color:"#424242"}}>Free: 0 | Pro: 249/2399</td>
                        </tr>
                        <tr>
                            <td style={{color:"#424242"}}>Smallcase</td>
                            <td style={{color:"#424242"}}>Per transaction</td>
                            <td style={{color:"#424242"}}>Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                            <td style={{color:"#424242"}}>Kite Connect</td>
                            <td style={{color:"#424242"}}>Monthly</td>
                            <td style={{color:"#424242"}}>Connect: 2000 | Historical: 2000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}