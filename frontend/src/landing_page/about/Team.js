import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Team() {
  return (
    <div className="container">
        <div className="row pt-2 mb-3 mt-4">
            <h1 className="text-center mb-1" style={{ color: "#424242", fontSize: "30px", lineHeight: "42px" }}>
                People
            </h1>
        </div>
        <div className="row p-45 mt-5" style={{ lineHeight: "1.7", fontSize: "1em", color: "#424242" }}>
            <div className="col-6 p-2 text-center">
                <img src="media/images/Pratham.jpg" style={{ width: "50%", borderRadius: "100%" }} alt="Nithin Kamath"/>
                <div>
                    <h5 className="mt-4" style={{color:"#424242"}}>Prathamesh Mohite</h5>
                    <p style={{color : "#666666"}}>Founder, CEO</p>
                </div>
            </div>
            <div className="col-6 p-4 px-1">
                <p>
                    Prathamesh bootstrapped and founded FirstEarner in 2010 to overcome the
                    hurdles he faced during his decade long stint as a trader. Today,
                    FirstEarner has changed the landscape of the Indian broking industry.
                </p>
                <p>
                    He is a member of the SEBI Secondary Market Advisory Committee
                    (SMAC) and the Market Data Advisory Committee (MDAC).
                </p>
                <p>Playing basketball is his zen.</p>
                <p>
                    Connect on{" "}
                    <a href="#" style={{ textDecoration: "none",color:"#FF9800" }}>Homepage</a>{" "}
                    /{" "}
                    <a href="#" style={{ textDecoration: "none",color:"#FF9800" }}>TradingQnA</a>{" "}
                    /{" "}
                    <a href="#" style={{ textDecoration: "none",color:"#FF9800" }}>Twitter</a>
                </p>
            </div>
        </div>
        <div className="row mt-3 text-ceter">
            <div className="col-4">
                <div className="text-center p-4">
                    <img src="media/images/nikhilKamath.jpg" style={{ width: "65%", borderRadius: "100%" }} alt="Nikhil Kamath"/>
                    <h5 className="mt-4" style={{color:"#424242"}}>Nikhil Kamath</h5>
                    <p style={{marginBottom : "3px",color:"#666666"}}>Co-founder & CFO</p>
                    <Accordion style={{width:"100%",border: 'none', boxShadow: 'none',display: 'flex',flexWrap:"wrap",justifyContent: 'center',alignItems: 'center',backgroundColor:"#FFFFF9"}}>
                        <div style={{color: "#666666"}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header" >
                                <Typography component="span" style={{fontWeight:'500'}}>Bio</Typography>
                            </AccordionSummary>
                        </div>
                        <div>
                            <AccordionDetails style={{width: "100%",color:"#424242"}}>
                                Nikhil is an astute and experienced investor, and he heads financial planning at FirstEarner. 
                                An avid reader, he always appreciates a good game of chess.
                            </AccordionDetails>
                        </div>
                    </Accordion>
                </div>
                <div className="text-center p-4">
                    <img src="media/images/hananDelvi.jpg" style={{ width: "65%", borderRadius: "100%" }} alt="Hanan Delvi"/>
                    <h5 className="mt-4" style={{color:"#424242"}}>Hanan Delvi</h5>
                    <p style={{marginBottom : "3px",color:"#666666"}}>CCO</p>
                    <Accordion style={{width:"100%",border: 'none', boxShadow: 'none',display: 'flex',flexWrap:"wrap",justifyContent: 'center',alignItems: 'center',backgroundColor:"#FFFFF9"}}>
                        <div style={{color: "#666666"}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header" >
                                <Typography component="span" style={{fontWeight:'500'}}>Bio</Typography>
                            </AccordionSummary>
                        </div>
                        <div>
                            <AccordionDetails style={{width: "100%",color:"#424242"}}>
                                We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. 
                                He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, 
                                Hanan can be seen posing as one in his free time.
                            </AccordionDetails>
                        </div>
                    </Accordion>
                </div>
                <div className="text-center p-4">
                    <img src="media/images/austinPrakesh.jpg" style={{ width: "65%", borderRadius: "100%" }} alt="Austin Prakesh"/>
                    <h5 className="mt-4" style={{color:"#424242"}}>Austin Prakesh</h5>
                    <p style={{marginBottom : "3px",color:"#666666"}}>Director Strategy</p>
                    <Accordion style={{width:"100%",border: 'none', boxShadow: 'none',display: 'flex',flexWrap:"wrap",justifyContent: 'center',alignItems: 'center',backgroundColor:"#FFFFF9"}}>
                        <div style={{color: "#666666"}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header" >
                                <Typography component="span" style={{fontWeight:'500'}}>Bio</Typography>
                            </AccordionSummary>
                        </div>
                        <div>
                            <AccordionDetails style={{width: "100%",color:"#424242"}}>
                                Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations 
                                including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves
                                collecting exquisite watches.
                            </AccordionDetails>
                        </div>
                    </Accordion>
                </div>
            </div>
            <div className="col-4">
                <div className="text-center p-4">
                    <img src="media/images/kailashNadh.jpg" style={{ width: "65%", borderRadius: "100%" }} alt="Nikhil Kamath"/>
                    <h5 className="mt-4" style={{color:"#424242"}}>Dr. Kailash Nadh</h5>
                    <p style={{marginBottom : "3px",color:"#666666"}}>CTO</p>
                    <Accordion style={{width:"100%",border: 'none', boxShadow: 'none',display: 'flex',flexWrap:"wrap",justifyContent: 'center',alignItems: 'center',backgroundColor:"#FFFFF9"}}>
                        <div style={{color: "#666666"}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header">
                                <Typography component="span" style={{fontWeight:'500'}}>Bio</Typography>
                            </AccordionSummary>
                        </div>
                        <div>
                            <AccordionDetails style={{width: "100%",color:"#424242"}}>
                                Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. 
                                He has been a developer from his adolescence and continues to write code every day.
                            </AccordionDetails>
                        </div>
                    </Accordion>
                </div>
                <div className="text-center p-4">
                    <img src="media/images/seemaPatil.jpg" style={{ width: "65%", borderRadius: "100%" }} alt="Hanan Delvi"/>
                    <h5 className="mt-4" style={{color:"#424242"}}>Seema Patil</h5>
                    <p style={{marginBottom : "3px",color:"#666666"}}>Director</p>
                    <Accordion style={{width:"100%",border: 'none', boxShadow: 'none',display: 'flex',flexWrap:"wrap",justifyContent: 'center',alignItems: 'center',backgroundColor:"#FFFFF9"}}>
                        <div style={{color: "#666666"}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header" >
                                <Typography component="span" style={{fontWeight:'500'}}>Bio</Typography>
                            </AccordionSummary>
                        </div>
                        <div>
                            <AccordionDetails style={{width: "100%",color:"#424242"}}>
                                Seema who has lead the quality team since the beginning of FirstEarner, is now a director.
                                She is an extremely disciplined fitness enthusiast.
                            </AccordionDetails>
                        </div>
                    </Accordion>
                </div>
            </div>
            <div className="col-4">
            <div className="text-center p-4">
                    <img src="media/images/venuMadhav.jpg" style={{ width: "65%", borderRadius: "100%" }} alt="Nikhil Kamath"/>
                    <h5 className="mt-4" style={{color:"#424242"}}>Venu Madhav</h5>
                    <p style={{marginBottom : "3px",color:"#666666"}}>CCO</p>
                    <Accordion style={{width:"100%",border: 'none', boxShadow: 'none',display: 'flex',flexWrap:"wrap",justifyContent: 'center',alignItems: 'center',backgroundColor:"#FFFFF9"}}>
                        <div style={{color: "#666666"}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header" >
                                <Typography component="span" style={{fontWeight:'500'}}>Bio</Typography>
                            </AccordionSummary>
                        </div>
                        <div>
                            <AccordionDetails style={{width: "100%",color:"#424242"}}>
                                Venu is the backbone of FirstEarner taking care of operations and ensuring that we are compliant to rules and regulations. He has over a 
                                dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he 
                                does outside of FirstEarner.
                            </AccordionDetails>
                        </div>
                    </Accordion>
                </div>
                <div className="text-center p-4">
                    <img src="media/images/karthikRangappa.jpg" style={{ width: "65%", borderRadius: "100%" }} alt="Hanan Delvi"/>
                    <h5 className="mt-4" style={{color:"#424242"}}>Karthik Rangappa</h5>
                    <p style={{marginBottom : "3px",color:"#666666"}}>Chief of Education</p>
                    <Accordion style={{width:"100%",border: 'none', boxShadow: 'none',display: 'flex',flexWrap:"wrap",justifyContent: 'center',alignItems: 'center',backgroundColor:"#FFFFF9"}}>
                        <div style={{color: "#666666"}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content"id="panel1-header" >
                                <Typography component="span" style={{fontWeight:'500'}}>Bio</Typography>
                            </AccordionSummary>
                        </div>
                        <div>
                            <AccordionDetails style={{width: "100%",color:"#424242"}}>
                                Karthik "Guru" Rangappa single handledly wrote Varsity, FirstEarner's massive educational program. He heads investor 
                                education initiatives at FirstEarner and loves stock markets, classic rock, single malts, and photography.
                            </AccordionDetails>
                        </div>
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
  );
}
