import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";


export default function Orders(){
    const[orders,setOrders] = useState([]);

    useEffect(()=>{
        axios.get("https://firstearner.onrender.com/allOrders").then((res)=>{
        setOrders(res.data);
    });
},[]);
    return(
        <div className="orders">
            {orders.length > 0 ? (
            <div className="order-table">
                <table className="border">
                    <tr>
                        <th>Name</th>
                        <th>Qty.</th>
                        <th>Price</th>
                        <th>Mode</th>
                    </tr>
                    {orders.map((order,index)=>{
            
                        return(
                                <tr key={index}>
                                    <td>{order.name}</td>
                                    <td>{order.qty}</td>
                                    <td>{order.price.toFixed(2)}</td>
                                    <td style={order.mode === "BUY"? {color:"#118B50"}:{color:"#F93827"}}><b>{order.mode}</b></td>
                                </tr>
                            )
                        })}
                </table>
            </div>
            ) : (
                <>
                    <p style={{textAlign:"center",marginTop:"200px"}}>You haven't placed any order!</p>
                    <Link to={"/dashboard"} className="btn" style={{backgroundColor:"#FFB200",textAlign:"center",marginLeft:"430px"}}>
                    Get Started
                    </Link>
                </>
            )}
        </div>
    )
}


