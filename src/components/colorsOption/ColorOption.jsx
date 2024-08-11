import React, { useState } from "react";
import "./ColorOption.css";
import PropTypes from "prop-types";

let colorsMembers = [["default", "#4db5ff"], ["terquas", "#00bcd4"], ["magenta", "#e91e63"], ["green", "#009688"]]


let localIndex = localStorage.getItem("c-index");
let stateIndex;
if (localIndex === null) {
    stateIndex = 0;
}
else {
    stateIndex = localIndex;
}

function ColorOption({classN, fn}) {
    const [activeColor, updateColor] = useState(stateIndex);

    let currentColor = localStorage.getItem("color-opt");

    if (currentColor !== null) {
        document.documentElement.style.setProperty("--main-color", currentColor);
    }

    function handleColors(hex, index) {
        document.documentElement.style.setProperty("--main-color", hex);
        localStorage.setItem("color-opt", hex);
        localStorage.setItem("c-index", index);
        updateColor(index);
        fn(true);
    }
    return (
        <>
            <div className={`colors-box ${classN}`}>
                <h1>Choose your prefered color !</h1>
                <ul className="colors">
                    {colorsMembers.map(([aClass, hex], index) => (
                        <li className={`${aClass} ${activeColor === index ? "active-color" : ""}`} key={hex} data-color={hex} onClick={() => handleColors(hex, index)}></li>
                    ))}
                </ul>
            </div>
        </>
    )
}

ColorOption.propTypes = {
    classN: PropTypes.string.isRequired,
    fn: PropTypes.func.isRequired
}

export default ColorOption;