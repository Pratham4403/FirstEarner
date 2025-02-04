import React from "react";
import Hero from './Hero';
import BrokerageDistribution from "./BrokerageDistribution";
import Brokerage from "./Brokerage";
import Charges from "./Charges";


export default function PricingPage(){

    return(
        <>
            <Hero/>
            <BrokerageDistribution/>
            <Brokerage/>
            <Charges/>
        </>
    )
}