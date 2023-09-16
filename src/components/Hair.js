import React from "react";
import ImgBtn from "./ImgBtn";

export default function Hair({handleHair}) {
    const imgbtns = []
    for (let i = 1; i < 74; i++) {
        const url = `character/hair/${i}.png`;
        imgbtns.push(<ImgBtn url={url} handleChange={() => handleHair(url)}/>); 
    }
    return (
        <div class="eachList">
            <h2>HAIR</h2>
            <div class="eachPart">{imgbtns}</div>
        </div>
    )
}