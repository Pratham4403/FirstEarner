import React from "react";


export default function Hero(){

    return(
        <section className="container-fluid" id="supportHero" style={{backgroundColor:"#FFB200"}}>
            <div className="row px-5" style={{marginLeft:"140px",paddingBottom:"10px"}}>
                <div className="col-4 mt-5 mb-4" style={{padding: "12px 30px 5px 10px"}}>
                    <h4 style={{color:"white"}}>Support Portal</h4>
                </div>
                <div className="col-5"></div>
                <div className="col-2 p-4">
                    <a href="#" id="hoverfade" style={{color:"white",textDecoration:"none"}} className="border-bottom p-2">Track tickets</a>
                </div>
            </div>

            <div className="row p-1 mb-5" style={{marginLeft:"180px"}}>
                <div className="col-6 mb-5">
                    <h4 style={{color:"white"}} className="mb-5">Search for an answer or browse help topics to create a ticket</h4>
                    <input placeholder="Eg: how to i activate F&O, why is my order getting rejected..." className="p-3 mb-2 w-100 rounded" style={{border:"none"}}/>
                    <br/>
                    
                    <div className="mt-3 mb-5">
                        <a href="#" style={{color:"white",textDecoration:"none",padding:"5px 3px 5px 0px",marginRight:"40px",fontSize:"16px"}} className="border-bottom">Track account opening</a>
                        <a href="#" style={{color:"white",textDecoration:"none",padding:"0px 3px 5px 0px",marginRight:"40px",fontSize:"16px"}} className="border-bottom">Track segment activation</a>
                        <a href="#" style={{color:"white",textDecoration:"none",padding:"0px 3px 5px 0px",marginRight:"40px",fontSize:"16px"}} className="border-bottom">Intraday margins</a>
                        <br/><br/>
                        <a href="#" style={{color:"white",textDecoration:"none",padding:"0px 3px 5px 0px",fontSize:"16px"}} className="border-bottom">Kite user manual</a>
                    </div>
                </div>

                <div className="col-6 mt-5">
                    <h5 style={{color:"white"}} className="mb-5 mx-5">Featured</h5>
                    <div>
                        <ol style={{color:"white"}} className="mx-5">
                            <li className="mb-3"><a href="#" style={{color:"white"}}>Latest Intraday leverages and Square-off timings</a></li>
                            <li><a href="#" style={{color:"white"}}>Surveillance measure on scrips - December 2024</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}