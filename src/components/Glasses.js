import React from "react";
import ImgBtn from "./ImgBtn";

export default function Glasses({handleGlasses}) {
    const imgbtns = []
    for (let i = 1; i < 18; i++) {
        const url = `character/accessories/glasses/${i}.png`;
        imgbtns.push(<ImgBtn url={url} handleChange={() => handleGlasses(url)}/>); 
    }
    return (
        <div class="eachList">
            <h2>GLASSES</h2>
            <div class="eachPart">{imgbtns}</div>
        </div>
    )
}