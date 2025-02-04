import React from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import DataUsageSharpIcon from '@mui/icons-material/DataUsageSharp';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

export default function CreateTicket(){

    return(
        <div className="container">
            <div className="row mt-5" style={{marginLeft:"140px"}}>
                <h2 style={{color:"#666666",fontWeight:"400",fontSize:"22px"}} className="mb-5 text-muted">To create a ticket,select a relevant topic</h2>
                <div className="col-4 p-2">
                    <h4 className="mb-4">
                        <a href="#" style={{color:"#222222",textDecoration:"none",fontSize:"18px"}} id="hoverEffect">
                            <AddCircleOutlineOutlinedIcon style={{marginRight:"8px"}}/>Account Opening
                        </a>
                    </h4>
                    <div>
                        <ul className="list-unstyled" style={{marginLeft:"30px"}}>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Getting started</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Online</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Offline</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Charges</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Company,Partnership and HUF</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Non-resident Indian(NRI)</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-4 p-2">
                    <h4 className="mb-4">
                        <a href="#" style={{color:"#222222",textDecoration:"none",fontSize:"18px"}} id="hoverEffect">
                            <i class="fa-regular fa-user" style={{marginRight:"8px"}}></i>Your FirstEarner Account
                        </a>
                    </h4>
                    <div>
                        <ul className="list-unstyled" style={{marginLeft:"24px"}}>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Login credentials</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Your Profile</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Account modification and segment addition</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>CMR and DP ID</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Nomination</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Transfer and conversion of shares</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-4 p-2">
                    <h4 className="mb-4">
                        <a href="#" style={{color:"#222222",textDecoration:"none",fontSize:"18px"}} id="hoverEffect">
                            <EqualizerRoundedIcon style={{marginRight:"8px"}}/>Trading & Markets
                        </a>
                    </h4>
                    <div>
                        <ul className="list-unstyled" style={{marginLeft:"32px"}}>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Trading FAQs</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Kite</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Margins</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Product and order types</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Corporate actions</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Kite features</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>

            <div className="row mt-5" style={{marginLeft:"140px"}}>
                <div className="col-4 p-2">
                    <h4 className="mb-4">
                        <a href="#" style={{color:"#222222",textDecoration:"none",fontSize:"18px"}} id="hoverEffect">
                            <i class="fa-regular fa-credit-card" style={{marginRight:"8px"}}></i>Funds
                        </a>
                    </h4>
                    <div>
                        <ul className="list-unstyled" style={{marginLeft:"30px"}}>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Fund withdrawal</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Adding funds</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Adding bank accounts</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>eMandates</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-4 p-2">
                    <h4 className="mb-4">
                        <a href="#" style={{color:"#222222",textDecoration:"none",fontSize:"18px"}} id="hoverEffect">
                            <DataUsageSharpIcon style={{marginRight:"8px"}}/>Console
                        </a>
                    </h4>
                    <div>
                        <ul className="list-unstyled" style={{marginLeft:"24px"}}>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>IPO</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Portfolio</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Funds statement</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Profile</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Reports</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Referral programmes</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-4 p-2">
                    <h4 className="mb-4">
                        <a href="#" style={{color:"#222222",textDecoration:"none",fontSize:"18px"}} id="hoverEffect">
                            <PaidOutlinedIcon style={{marginRight:"8px"}}/>Coin
                        </a>
                    </h4>
                    <div>
                        <ul className="list-unstyled" style={{marginLeft:"30px"}}>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Understanding mutual funds and Coin</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Coin app</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Coin web</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>Transactions and report</a></li>
                            <li className="mb-2"><a href="" style={{textDecoration:"none",color:"#FF9800"}}>National Pension Scheme(NPS)</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}