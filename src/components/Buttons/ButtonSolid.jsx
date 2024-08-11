import React from "react";
import PropTypes from "prop-types";
import "./ButtonSolid.css";

function ButtonSolid({ margin = false, contact = false, sinbad = false, children }) {
    if (sinbad) {
        return (
            <a href="https://raw.githubusercontent.com/mahmoudesam2005/my-main-portfolio/main/src/assets/files//sn.png" download="sinbad_recommendation.png" className={`solid ${margin ? "no-margin" : ""}`}>
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
