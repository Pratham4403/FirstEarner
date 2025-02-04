import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import VerticalGraph from "./VerticalGraph";
// import {holdings} from "../data/data";

export default function Holdings(){
    const [allholdings,setAllHoldings] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:1856/allHoldings").then((res)=>{
        setAllHoldings(res.data);
        });
    },[]);

    const labels = allholdings.map((subArray)=>subArray['name']);
    const data = {
      labels,
      datasets : [{
        label : "Stock Price",
        data : allholdings.map((stock)=>stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
    };

    return(
        <>
            {allholdings.length > 0 ? (
            <>
                <h3 className="title">Holdings({allholdings.length})</h3>
                <div className="order-table">
                    <table className="border">
                        <tr>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. cost</th>
                            <th>LTP</th>
                            <th>Curr. val</th>
                            <th>P&L</th>
                            <th>Net chg.</th>
                            <th>Day chg.</th>
                        </tr>

                        {allholdings.map((stock, index) => {
                             const currValue = stock.price * stock.qty;
                             const isProfit = currValue - stock.avg * stock.qty >= 0.0;
                             const profClass = isProfit ? "profit" : "loss";
                             const dayClass = stock.isLoss ? "loss" : "profit";

                        return (
                            <tr key={index}>
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.avg.toFixed(2)}</td>
                                <td>{stock.price.toFixed(2)}</td>
                                <td>{currValue.toFixed(2)}</td>
                                <td className={profClass}>
                                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                                </td>
                                <td className={profClass}>{stock.net}</td>
                                <td className={dayClass}>{stock.day}</td>
                            </tr>
                            );
                        })}
                    </table>
                </div>

                <div className="row">
                    <div className="col">
                        <h5>
                        {allholdings.reduce((total, stock) => total + stock.price * stock.qty, 0).toFixed(2)}
                        </h5>
                        <p>Total investment</p>
                    </div>
                    <div className="col">
                        <h5>
                        {allholdings.reduce((total, stock) => total + (stock.price * stock.qty - stock.avg * stock.qty), 0).toFixed(2)}
                        </h5>
                        <p>P&L</p>
                    </div>
                    <VerticalGraph data={data}/>
                </div>
        </>
  ) : (
    <>
      <p style={{ textAlign: "center", marginTop: "200px" }}>
        You haven't placed any order!
      </p>
      <Link
        to={"/dashboard"}
        className="btn"
        style={{
          backgroundColor: "#FFB200",
          textAlign: "center",
          marginLeft: "430px",
        }}
      >
        Get Started
      </Link>
    </>
  )}
</>
    )
}