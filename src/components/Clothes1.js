import React from "react";
import ImgBtn from "./ImgBtn";

export default function Clothes1({handleClothes1}) {
    const imgbtns = []
    for (let i = 1; i < 6; i++) {
        const url = `character/clothes/layer_1/${i}.png`;
        imgbtns.push(<ImgBtn url={url} handleChange={() => handleClothes1(url)}/>); 
    }
    return (
        <div class="eachList">
            <h2>LAYER_1</h2>
            <div class="eachPart">{imgbtns}</div>
        </div>
    )
}