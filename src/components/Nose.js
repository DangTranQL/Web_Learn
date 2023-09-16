import React from "react";
import ImgBtn from "./ImgBtn";

export default function Nose({handleNose}) {
    const imgbtns = []
    for (let i = 1; i < 2; i++) {
        const url = `character/noses/${i}.png`;
        imgbtns.push(<ImgBtn url={url} handleChange={() => handleNose(url)}/>); 
    }
    return (
        <div class="eachList">
            <h2>NOSE</h2>
            <div class="eachPart">{imgbtns}</div>
        </div>
    )
}