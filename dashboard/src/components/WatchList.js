import React, { useContext, useState } from "react";
import BuyGeneralContext from "./BuyGeneralContext";
import SellGeneralContext from "./SellGeneralContext";
import { watchlist } from "../data/data";
import { Tooltip, Grow } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp, BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import DoughnutChart from "./DoughnutChart";

const labels = watchlist.map((subArray)=> subArray['name']);

export default function Watchlist() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredWatchlist = watchlist.filter((stock) =>
        stock.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const data = {
        labels,
        datasets: [
          {
            label: "Price",
            data: watchlist.map((stock) => stock.price),
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <div className="watchlist-container">
            <div className="search-container">
                <input
                    style={{backgroundColor:"#FFFFF9"}}
                    type="text"
                    name="search"
                    id="search"
                    className="search"
                    placeholder="Search eg: infy, bse, gold mcx"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="counts">{filteredWatchlist.length}/50</span>
            </div>

            <ul className="list">
                {filteredWatchlist.map((stock, index) => (
                    <WatchListItem stock={stock} key={index} />
                ))}
            </ul>
            <DoughnutChart data={data}/>
        </div>
    );
}

const WatchListItem = ({ stock }) => {
    const [showWatclistActions, setShowWatclistActions] = useState(false);

    const handleMouseEnter = () => setShowWatclistActions(true);
    const handleMouseLeave = () => setShowWatclistActions(false);

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className="item-info">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ? <KeyboardArrowDown className="down" /> : <KeyboardArrowUp className="up" />}
                    <span className="price">{stock.price}</span>
                </div>
            </div>
            {showWatclistActions && <WatchListActions stock={stock} />}
        </li>
    );
};

const WatchListActions = ({ stock }) => {
    const buyGeneralContext = useContext(BuyGeneralContext);
    const sellGeneralContext = useContext(SellGeneralContext);
    // console.log(buyGeneralContext);
    // console.log(sellGeneralContext);

    const handleBuyClick = () => {
        buyGeneralContext.openBuyWindow(stock);
    };

    const handleSellClick = ()=>{
        sellGeneralContext.openSellWindow(stock);
    }

    return (
        <span className="actions">
            <span>
                <Tooltip title="Buy (B)" placement="top" arrow slots={{ transition: Grow }}>
                    <button className="buy" onClick={handleBuyClick}>
                        Buy
                    </button>
                </Tooltip>
                <Tooltip title="Sell (S)" placement="top" arrow slots={{ transition: Grow }}>
                    <button className="sell" onClick={handleSellClick}>Sell</button>
                </Tooltip>
                <Tooltip title="Analytics (A)" placement="top" arrow slots={{ transition: Grow }}>
                    <button className="action">
                        <BarChartOutlined className="icon" />
                    </button>
                </Tooltip>
                <Tooltip title="More" placement="top" arrow slots={{ transition: Grow }}>
                    <button className="action">
                        <MoreHoriz className="icon" />
                    </button>
                </Tooltip>
            </span>
        </span>
    );
};
