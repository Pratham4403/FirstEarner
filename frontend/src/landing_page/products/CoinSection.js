import React from "react";


export default function CoinSection({imageURL,productName,productDescription,coin,googlePlay,appStore}){

    return(
        <div className="container">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                    <img src={imageURL} alt="image" />
                </div>
                <div className="col-1"></div>
                <div className="col-5 p-5 mt-2">
                    <h1 className="mx-4" style={{paddingBottom:"10px"}}>{productName}</h1>
                    <p className="mx-4">{productDescription}</p>
                    <div className="py-2">
                        <a href={coin} className="mx-4" style={{textDecoration : "none",color:"#FF9800"}}>Coin{" "}<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay} id="hoverfade" className="mx-4" style={{textDecoration : "none"}}><img src="media/images/googlePlayBadge.svg"/></a>
                        <a href={appStore} id="hoverfade" className="mx-1" style={{textDecoration : "none"}}><img src="media/images/appstoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}