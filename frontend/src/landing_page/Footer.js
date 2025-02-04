import React from "react";
import {Link} from "react-router-dom";

export default function Footer(){

    return(
        <footer style={{backgroundColor : "#FFFFF5"}}>
            <div className="container border-top mt-5">
                <div className="row mt-5">
                    <div className="col-2">
                        <Link to="/">
                            <img src="media/images/firstearner-removebg-preview.png" alt="FirstEarner logo" style={{width : "80%"}}/>
                        </Link>
                        <p className= "mt-3 text-muted" style={{fontSize : "10px"}}>&copy; 2014 - 2024, FirstEarner Broking Ltd.<br/> All rights reserved.</p>
                        <div className="mb-2 pt-1">
                            <a className="mx-2" id="hoverEffect" style={{color : "#666666"}} href="#"><i class="fa-brands fa-x-twitter"></i></a>
                            <a className="mx-2" id="hoverEffect" style={{color : "#666666"}} href="#"><i class="fa-brands fa-square-facebook"></i></a>
                            <a className="mx-2" id="hoverEffect" style={{color : "#666666"}} href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a className="mx-2" id="hoverEffect" style={{color : "#666666"}} href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <div className="border-top pt-2">
                            <a className="mx-2 mt-5" id="hoverEffect" style={{color : "#666666",fontSize:"18px"}} href="#"><i class="fa-brands fa-youtube"></i></a>
                            <a className="mx-2" id="hoverEffect" style={{color : "#666666",fontSize:"18px"}} href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a className="mx-2" id="hoverEffect" style={{color : "#666666",fontSize:"18px"}} href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3">
                        <p style={{fontWeight : "600",fontSize : "18px"}}>Company</p>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>About</a>
                        <br/>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>Products</a>
                        <br/>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>Pricing</a>
                        <br/>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>Referral programme</a>
                        <br/>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>Careers</a>
                        <br/>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>Zerodha.tech</a>
                        <br/>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>Press & media</a>
                        <br/>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>Zerodha cares (CSR)</a>
                        <br/>
                    </div>
                    <div className="col-3">
                        <p style={{fontWeight : "600",fontSize : "18px"}}>Support</p>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>Contact</a>
                        <br/>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>Support portal</a>
                        <br/>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>Z-Connect blog</a>
                        <br/>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>List of charges</a>
                        <br/>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>Downloads & resources</a>
                        <br/>
                    </div>
                    <div className="col-3">
                        <p style={{fontWeight : "600",fontSize : "18px"}}>Account</p>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>Open an account</a>
                        <br/>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>Fund transfer</a>
                        <br/>
                        <a href="#" id="hoverEffect" style={{textDecoration : "none",color : "#666666",fontWeight : "400",fontSize : "16px"}}>60 day challenge</a>
                        <br/>
                    </div>
                </div>
                
                <div className="mt-5 text-muted" style={{fontSize : "14px"}}>
                    <p style={{fontSize : "12px",lineHeight : "20px"}} className="text-muted">
                        Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
                        INZ000031633 CDSL: Depository services through Zerodha Securities
                        Pvt. Ltd. - SEBI Registration no.: IN-DP-100-2015 Commodity Trading
                        through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
                        no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
                        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                        J.P Nagar 4th Phase, Bengaluru - 56007,fontSize : "18px"8, Karnataka, India. For any
                        complaints pertaining to securities broking please write to
                        complaints@zerodha.com, for DP related to dp@zerodha.com. Please
                        ensure you carefully read the Risk Disclosure Document as prescribed
                        by SEBI | ICF
                    </p>
                    <p style={{fontSize : "12px",lineHeight : "20px"}} className="text-muted">
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES
                        portal. Mandatory details for filing complaints on SCORES: Name,
                        PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                        Communication, Speedy redressal of the grievances
                    </p>
                    <p style={{fontSize : "12px",lineHeight : "20px"}} className="text-muted">
                        Investments in securities market are subject to market risks; read
                        all the related documents carefully before investing.
                    </p>
                    <p style={{fontSize : "12px",lineHeight : "20px"}} className="text-muted">
                        "Prevent unauthorised transactions in your account. Update your
                        mobile numbers/email IDs with your stock brokers. Receive
                        information of your transactions directly from Exchange on your
                        mobile/email at the end of the day. Issued in the interest of
                        investors. KYC is one time exercise while dealing in securities
                        markets - once KYC is done through a SEBI registered intermediary
                        (broker, DP, Mutual Fund etc.), you need not undergo the same
                        process again when you approach another intermediary." Dear
                        Investor, if you are subscribing to an IPO, there is no need to
                        issue a cheque. Please write the Bank account number and sign the
                        IPO application form to authorize your bank to make payment in case
                        of allotment. In case of non allotment the funds will remain in your
                        bank account. As a business we don't give stock tips, and have not
                        authorized anyone to trade on behalf of others. If you find anyone
                        claiming to be part of Zerodha and offering such services, please
                        create a ticket here.
                    </p>
                </div> 
                <div className="mt-3 mb-3 text-center">
                    <Link to="https://www.nseindia.com/" className="mx-2  text-muted" id="hoverEffect" style={{textDecoration : "none",color : "#9B9B9B",fontWeight : "400",fontSize : "12px"}}>NSE</Link>
                    <Link to="https://www.bseindia.com/" className="mx-2  text-muted" id="hoverEffect" style={{textDecoration : "none",color : "#9B9B9B",fontWeight : "400",fontSize : "12px"}}>BSE</Link>
                    <Link to="https://www.mcxindia.com/" className="mx-2  text-muted" id="hoverEffect" style={{textDecoration : "none",color : "#9B9B9B",fontWeight : "400",fontSize : "12px"}}>MCX</Link>
                    <a href="#" className="mx-2  text-muted" id="hoverEffect" style={{textDecoration : "none",color : "#9B9B9B",fontWeight : "400",fontSize : "12px"}}>Terms & conditions</a>
                    <a href="#" className="mx-2  text-muted" id="hoverEffect" style={{textDecoration : "none",color : "#9B9B9B",fontWeight : "400",fontSize : "12px"}}>Policies & procedures</a>
                    <a href="#" className="mx-2  text-muted" id="hoverEffect" style={{textDecoration : "none",color : "#9B9B9B",fontWeight : "400",fontSize : "12px"}}>Privacy policy</a>
                    <a href="#" className="mx-2  text-muted" id="hoverEffect" style={{textDecoration : "none",color : "#9B9B9B",fontWeight : "400",fontSize : "12px"}}>Disclosure</a>
                    <a href="#" className="mx-2  text-muted" id="hoverEffect" style={{textDecoration : "none",color : "#9B9B9B",fontWeight : "400",fontSize : "12px"}}>For investor's attention</a>
                    <a href="#" className="mx-2  text-muted" id="hoverEffect" style={{textDecoration : "none",color : "#9B9B9B",fontWeight : "400",fontSize : "12px"}}>Investor charter</a>
                </div>
            </div>
        </footer>
    )
}