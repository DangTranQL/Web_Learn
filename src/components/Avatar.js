import React from "react";
import "./index.css";

export default function Avatar({srcBody, srcEyes, srcHair, srcClothes1, srcClothes2, srcClothes3, srcMouth, srcNose, srcGlasses}){
    return (
        <div class="avatar">
            <img class="avatarComponent" src={srcBody} style={{zIndex:1}} alt="Body"/>
            <img class="avatarComponent" src={srcClothes1} style={{zIndex:2}} alt="Clothes1"/>
            <img class="avatarComponent" src={srcClothes2} style={{zIndex:3}} alt="Clothes2"/>
            <img class="avatarComponent" src={srcClothes3} style={{zIndex:4}} alt="Clothes3"/>
            <img class="avatarComponent" src={srcMouth} style={{zIndex:5}} alt="Mouth"/>
            <img class="avatarComponent" src={srcNose} style={{zIndex:6}} alt="Nose"/>
            <img class="avatarComponent" src={srcGlasses} style={{zIndex:7}} alt="Glasses"/>
            <img class="avatarComponent" src={srcEyes} style={{zIndex:8}} alt="Eyes"/>
            <img class="avatarComponent" src={srcHair} style={{zIndex:9}} alt="Hair"/>
            <button class="randombtn">RANDOMIZE</button>
        </div>
    )
}