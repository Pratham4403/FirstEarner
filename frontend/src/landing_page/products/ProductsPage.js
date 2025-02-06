import React from "react";
import Hero from './Hero';
import KiteSection from './KiteSection';
import ConsoleSection from "./ConsoleSection";
import CoinSection from "./CoinSection";
import KiteConnectAPISection from "./KiteConnectAPISection";
import VarsityMobileSection from "./VarsityMobileSection";
import Universe from './Universe';


export default function ProductsPage(){

    return(
        <>
            <Hero/>
            <KiteSection 
                imageURL="media/images/kite.png" 
                productName="Kite" 
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
                tryDemo=""
                learnMore=""
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
                appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
            />
            <ConsoleSection
                imageURL="media/images/console.png"
                productName="Console"
                productDescription="The central dashboard for your FirstEarner account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore=""
            />
            <CoinSection
                imageURL="media/images/coin.png" 
                productName="Coin" 
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
                coin=""
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
                appStore="https://apps.apple.com/in/app/zerodha-coin-mutual-funds/id1392892554"
            />
            <KiteConnectAPISection
                imageURL="media/images/kiteconnect.png"
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                kiteConnect=""
            />
            <VarsityMobileSection
                imageURL="media/images/varsity.png"
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
                appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
            />
            <Universe/>
        </>
    )
}
