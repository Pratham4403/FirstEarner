import React from "react";

export default function Hero(){

    return(
        <div className="container mt-5 border-bottom mb-5">
            <div className="text-center mt-5 p-3 mb-4">
                <h1 className="mb-3">FirstEarner Products</h1>
                <h3 className="text-muted fs-4 mt-3 mb-3 p-2">
                    Sleek, modern, and intuitive trading platforms
                </h3>
                <p className="mt-3 mb-5">
                Check out our{" "} 
                    <a href="" style={{textDecoration: "none",color:"#FF9800" }}>investment offerings{" "}<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </p>
            </div>
        </div>
    )
}