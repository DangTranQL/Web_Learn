import React from "react";
import ImgBtn from "./ImgBtn";

export default function Mouth({handleMouth}) {
    const imgbtns = []
    for (let i = 1; i < 25; i++) {
        const url = `character/mouths/${i}.png`;
        imgbtns.push(<ImgBtn url={url} handleChange={() => handleMouth(url)}/>); 
    }
    return (
        <div class="eachList">
            <h2>MOUTH</h2>
            <div class="eachPart">{imgbtns}</div>
        </div>
    )
}