import React from "react";

export default function ImgBtn({url, handleChange}){
    return (
        <div class="imgbtn">
            <img class="partbtn" src={url} alt={url} onClick={() => handleChange()}></img>
        </div>
    )
}