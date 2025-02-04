import React from "react";

export default function VarsityMobileSection({imageURL,productName,productDescription,learnMore}){

    return(
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-1"></div>
                <div className="col-5">
                    <h1 className="mx-4" style={{paddingBottom:"10px"}}>{productName}</h1>
                    <p className="mx-4 my-2">{productDescription}</p>
                    <div className="mt-3">
                        <a href={learnMore} className="mx-4 my-2" style={{textDecoration : "none",color:"#FF9800"}}>Learn more{" "}<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="col-6">
                    <img src={imageURL} alt="image" />
                </div>
            </div>
        </div>
    )
}