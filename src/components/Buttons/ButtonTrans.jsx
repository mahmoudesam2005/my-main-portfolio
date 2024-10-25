import React from "react";
import PropTypes from "prop-types";
import "./ButtonTrans.css"


function ButtonTrans({margin = false, cv = false, gm = false ,children}) {
    if (cv) {
        return (
            <a href="https://drive.google.com/file/d/1akAL2UTg6Vhh6kV1xT2Ba2J35W-pFVak/view?usp=drive_link" target="_blank" className={`trans ${margin ? "no-margin" : ""}`}>
                {children}
            </a>
        )
    }
    if (gm) {
        return (
            <a href="https://drive.google.com/file/d/1HaR5nl8MsfMIAx0LrKdaMxRfiLwcnshA/view" target="_blank" className={`trans ${margin ? "no-margin" : ""}`}>
                {children}
            </a>
        )
    }
    return (
        <a href="https://drive.google.com/open?id=1x4NOrbs6rFPRdm4S8j56krzdA3irNhjF&authuser=0" target="_blank" className={`trans ${margin ? "no-margin" : ""}`}>
            {children}
        </a>
    )
}

ButtonTrans.propTypes = {
    children: PropTypes.node,
}

export default ButtonTrans;
