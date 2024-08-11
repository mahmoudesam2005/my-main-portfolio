import React, { useState } from "react";
import "./Image.css";
import Mahmoud from "../../assets/mahmoud_white.png";


function Image() {
    return (
        <section className="personal-image">
            <div>
                <img src={Mahmoud} alt="" />
            </div>
        </section>
    )
}


export default Image;