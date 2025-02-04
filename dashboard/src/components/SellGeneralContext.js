import React, { useState } from "react";
import SellActionWindow from "./SellActionWindow";  // Import the SellActionWindow component
import "./BuyActionWindow.css";

const SellGeneralContext = React.createContext({
    openSellWindow: (stock) => {},
    closeSellWindow: () => {}
});

export const SellGeneralContextProvider = (props) => {
    const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
    const [selectedStock, setSelectedStock] = useState(null);

    const handleOpenSellWindow = (stock) => {
        setIsSellWindowOpen(true);
        setSelectedStock(stock);
    }

    const handleCloseSellWindow = () => {
        setIsSellWindowOpen(false);
        setSelectedStock(null);
    }
    
    return (
        <SellGeneralContext.Provider value={{ openSellWindow: handleOpenSellWindow, closeSellWindow: handleCloseSellWindow }}>
            {props.children}
            {isSellWindowOpen && <SellActionWindow stock={selectedStock} />}
        </SellGeneralContext.Provider>
    );
}

export default SellGeneralContext;
