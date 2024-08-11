import React, { useState } from "react";
import "./Box.css";
import PropTypes from "prop-types";


function Box({logo, title, det}) {
    return (
        <div className={`box`}>
            <div className="logo">{logo}</div>
            <div className="title">{title}</div>
            <div className="det">{det}</div>
        </div>
    )
}

Box.propTypes = {
    logo: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    det: PropTypes.string.isRequired
}

export default Box;