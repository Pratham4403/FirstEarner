import React from "react";
import EquityTab from "./EquityTab";
import CommodityTab from "./CommodityTab";
import CurrencyTab from "./CurrencyTab";

export default function BrokerageDistribution(){

    return(

        <>
            <EquityTab/>
            <CurrencyTab/>
            <CommodityTab/>
            <p className="text-center p-3" style={{fontSize:"24px"}}><a href="#" style={{textDecoration:"none",color:"#FF9800"}}>Calculate your costs upfront</a> using our brokerage calculator</p>
        </>
    )
}