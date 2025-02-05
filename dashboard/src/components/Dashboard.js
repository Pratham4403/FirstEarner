import React from "react";
import { Routes, Route } from "react-router-dom";
import Summary from './Summary';
import Orders from "./Orders";
import Holdings from './Holdings';
import Positions from "./Positions";
import Funds from "./Funds";
import { BuyGeneralContextProvider } from "./BuyGeneralContext";
import { SellGeneralContextProvider } from "./SellGeneralContext";
import Watchlist from "./WatchList";


export default function Dashboard() {

    return (
        <div className="dashboard-container">
            <BuyGeneralContextProvider>
                <SellGeneralContextProvider>
                    <Watchlist />
                </SellGeneralContextProvider>
            </BuyGeneralContextProvider>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Summary/>} />
                    <Route path="/orders" element={<Orders/>} />
                    <Route path="/holdings" element={<Holdings/>} />
                    <Route path="/positions" element={<Positions/>} />
                    <Route path="/funds" element={<Funds />} />
                </Routes>
            </div>
        </div>
    );
}
