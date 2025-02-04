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
                    <Route path="/dashboard" element={<Summary/>} />
                    <Route path="/dashboard/orders" element={<Orders/>} />
                    <Route path="/dashboard/holdings" element={<Holdings/>} />
                    <Route path="/dashboard/positions" element={<Positions/>} />
                    <Route path="/dashboard/funds" element={<Funds />} />
                </Routes>
            </div>
        </div>
    );
}
