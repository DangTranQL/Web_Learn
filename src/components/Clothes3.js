import React from "react";
import ImgBtn from "./ImgBtn";

export default function Clothes3({handleClothes3}) {
    const imgbtns = []
    for (let i = 1; i < 10; i++) {
        const url = `character/clothes/layer_3/${i}.png`;
        imgbtns.push(<ImgBtn url={url} handleChange={() => handleClothes3(url)}/>); 
    }
    return (
        <div class="eachList">
            <h2>LAYER_3</h2>
            <div class="eachPart">{imgbtns}</div>
        </div>
    )
}