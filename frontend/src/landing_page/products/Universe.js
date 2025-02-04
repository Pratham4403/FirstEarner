import React from "react";


export default function Universe(){


    return(
        <>
            <p className="fs-5 my-5 text-center">Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none",color:"#FF9800"}}>FirstEarner.tech</a> blog.</p>
            <div className="container my-5">
                <div className="row text-center">
                    <h1 className="mt-5">The FirstEarner Universe</h1>
                    <p className="p-4">Extend your trading and investment experience even further with our partner platforms</p>
                    <div className="col-4 mt-5 p-4">
                        <img src="media/images/sensibullLogo.svg" alt="Sensibull" style={{width:"65%",cursor:"pointer"}} id="hoverfade"/>
                        <p style={{color:"#9B9B9B",fontSize:"14px",padding:"19px",cursor:"pointer"}}>
                            Options trading platform that lets you <br/>
                            create strategies, analyze positions, and examine <br/>
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className="col-4 mt-5 p-4">
                        <img src="media/images/tijori.svg" alt="Tijori" style={{width:"36%",cursor:"pointer"}} id="hoverfade"/>
                        <p style={{color:"#9B9B9B",fontSize:"14px",padding:"14px",cursor:"pointer"}}>
                            Our asset management venture <br/>
                            that is creating simple and transparent index <br/>
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className="col-4 mt-5 p-4">
                        <img src="media/images/streakLogo.png" alt="Streak" style={{width:"43%",cursor:"pointer"}} id="hoverfade"/>
                        <p style={{color:"#9B9B9B",fontSize:"14px",padding:"13px",cursor:"pointer"}}>
                            Systematic trading platform <br/>
                            that allows you to create and backtest <br/>
                            strategies without coding.
                        </p>
                    </div>
                    <div className="col-4 mt-2 p-4">
                        <img src="media/images/smallcaseLogo.png" alt="Streak" style={{width:"52%",cursor:"pointer"}} id="hoverfade"/>
                        <p style={{color:"#9B9B9B",fontSize:"14px",padding:"17px",cursor:"pointer"}}>
                            Thematic investing platform <br/>
                            that helps you invest in diversified <br/>
                            baskets of stocks on ETFs.
                        </p>
                    </div>
                    <div className="col-4 mt-2 p-4">
                        <img src="media/images/dittoLogo.png" alt="Streak" style={{width:"38%",cursor:"pointer"}} id="hoverfade"/>
                        <p style={{color:"#9B9B9B",fontSize:"14px",padding:"13px",cursor:"pointer"}}>
                            Personalized advice on life <br/>
                            and health insurance. No spam <br/>
                            and no mis-selling.
                        </p>
                    </div>
                    <br/>
                </div>
                <button className="btn mb-5 mt-5" id="btn" style={{width : "16%",marginLeft:"550px",backgroundColor : "#FFB200",color : "white",fontSize : "18px"}}>Sign up for free</button>

            </div>
        </>
    )
}