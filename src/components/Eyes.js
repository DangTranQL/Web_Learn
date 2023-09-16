import React from "react";
import ImgBtn from "./ImgBtn";

export default function Eyes({handleEyes}) {
    const imgbtns = []
    for (let i = 1; i < 25; i++) {
        const url = `character/eyes/${i}.png`;
        imgbtns.push(<ImgBtn url={url} handleChange={() => handleEyes(url)}/>); 
    }
    return (
        <div class="eachList">
            <h2>EYES</h2>
            <div class="eachPart">{imgbtns}</div>
        </div>
    )
}