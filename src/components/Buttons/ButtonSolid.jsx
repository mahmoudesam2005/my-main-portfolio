import React from "react";
import PropTypes from "prop-types";
import "./ButtonSolid.css";

function ButtonSolid({ margin = false, contact = false, sinbad = false, children }) {
    if (sinbad) {
        return (
            <a href="https://drive.google.com/open?id=1x4NOrbs6rFPRdm4S8j56krzdA3irNhjF&authuser=0" target="_blank" className={`solid ${margin ? "no-margin" : ""}`}>
                {children}
            </a>
        );
    }

    if (contact) {
        return (
            <a href="mailto:mahmoud.esam.alfalah102005@gmail.com" target="_blank" className={`solid ${margin ? "no-margin" : ""}`}>
                {children}
            </a>
        );
    }

    return (
        <a href="" className={`solid ${margin ? "no-margin" : ""}`}>
            {children}
        </a>
    );
}

ButtonSolid.propTypes = {
    margin: PropTypes.bool,
    contact: PropTypes.bool,
    sinbad: PropTypes.bool,
    children: PropTypes.node
};

export default ButtonSolid;
