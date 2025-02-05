import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";

const Summary = () => {

    const[holdings,setHoldings] = useState([]);

    useEffect(()=>{
        axios.get("https://firstearner.onrender.com/summaryHoldings").then((res)=>{
        setHoldings(res.data);
    });
},[]);

const investmentTotal = holdings.reduce((total, stock) => total + stock.price * stock.qty, 0).toFixed(2);
const profitGained = holdings.reduce((total, stock) => total + (stock.price * stock.qty - stock.avg * stock.qty), 0).toFixed(2);
const OverallMargin = (parseFloat(investmentTotal) + parseFloat(profitGained)).toFixed(2);
const profitPercent = investmentTotal > 0? ((parseFloat(profitGained) / parseFloat(investmentTotal)) * 100).toFixed(2): 0;
    return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              {profitGained} <small>{profitPercent}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{OverallMargin}</span>{" "}
            </p>
            <p>
              Investment <span>{investmentTotal}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
