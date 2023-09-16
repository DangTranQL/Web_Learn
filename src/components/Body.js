import React from "react";
import ImgBtn from "./ImgBtn";

export default function Body({handleBody}) {
    const imgbtns = []
    for (let i = 1; i < 18; i++) {
        const url = `character/body/${i}.png`;
        imgbtns.push(<ImgBtn url={url} handleChange={() => handleBody(url)}/>); 
    }
    return (
        <div class="eachList">
            <h2>BODY</h2>
            <div class="eachPart">{imgbtns}</div>
        </div>
    )
}