import React, { useContext } from "react";
import { useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./BuyActionWindow.css";
import BuyGeneralContext from "./BuyGeneralContext";


export default function BuyActionWindow({stock}){
    const [stockQuantity,setStockQuantity]= useState(1);    

    const generalContext = useContext(BuyGeneralContext);
    const handleBuyClick = ()=>{
        // const totalCost = stockQuantity*stockPrice;
        axios.post("http://localhost:1856/newOrders",{
            name: stock.name,
            qty : stockQuantity,
            price : stock.price * stockQuantity,
            mode : "BUY"
        });
        generalContext.closeBuyWindow();
    }

    const handleCancelClick = ()=>{
        generalContext.closeBuyWindow();
    }


    return(
        <div className="container" id="buy-window" draggable="true">
            <div style={{backgroundColor:"#F8EDED"}}>
                <h3 className="stroked-shadowed-text">{stock.name}</h3>
                <hr style={{color:"#aaa"}}/>
            </div>
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend style={{color:"black",marginLeft:"25px",marginTop:"5px"}}>Qty.</legend>
                        <input type="number" name="qty" id="qty" style={{backgroundColor:"#f9f9f9",width:"90%",textAlign:"center"}} min="1" onChange={(e)=>setStockQuantity(e.target.value)} value={stockQuantity}/>
                    </fieldset>
                    <fieldset>
                        <legend style={{color:"black",marginLeft:"25px",marginTop:"5px"}}>Price</legend>
                        <p style={{width: "90px",textAlign:"center"}}>{(stock.price * stockQuantity).toFixed(2)}</p>
                    </fieldset>
                </div>
            </div>
            <span>Margin required : {(stock.price * stockQuantity).toFixed(2)}</span>
            <div className="buttons">
                
                <div>
                    <Link className="btn btn-green" onClick={handleBuyClick} to="/orders">
                        Buy
                    </Link>
                    <Link className="btn btn-grey" onClick={handleCancelClick} to="/orders">
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

