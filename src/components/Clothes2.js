import React from "react";
import ImgBtn from "./ImgBtn";

export default function Clothes2({handleClothes2}) {
    const imgbtns = []
    for (let i = 1; i < 6; i++) {
        const url = `character/clothes/layer_2/${i}.png`;
        imgbtns.push(<ImgBtn url={url} handleChange={() => handleClothes2(url)}/>); 
    }
    return (
        <div class="eachList">
            <h2>LAYER_2</h2>
            <div class="eachPart">{imgbtns}</div>
        </div>
    )
}