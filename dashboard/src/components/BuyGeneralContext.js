import React from "react";
import BuyActionWindow from "./BuyActionWindow";
import { useState } from "react";

const BuyGeneralContext = React.createContext({
    openBuyWindow : (stock) => {},
    closeBuyWindow : ()=>{},
});

export const BuyGeneralContextProvider = (props)=>{
    const [isBuyWindowOpen,setIsBuyWindowOpen] = useState(false);
    const [selectedStock,setSelectedStock] = useState(null);

    const handleOpenBuyWindow = (stock)=>{
        setIsBuyWindowOpen(true);
        setSelectedStock(stock);
    }

    const handleCloseBuyWindow = ()=>{
        setIsBuyWindowOpen(false);
        setSelectedStock(null);
    }
    
    return(
        <BuyGeneralContext.Provider value={{openBuyWindow:handleOpenBuyWindow,closeBuyWindow:handleCloseBuyWindow}}>
            {props.children}
            {isBuyWindowOpen && <BuyActionWindow stock={selectedStock}/>}
        </BuyGeneralContext.Provider>
    );
};

export default BuyGeneralContext;