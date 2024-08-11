import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MainHeading.css";

function MainHeading({smTitle, title}) {
    return (
        <div className="container main-heading">
            <div>
                <p>{smTitle}</p>
                <p>{title}</p>
            </div>
        </div>
    )
}

MainHeading.propTypes = {
    title: PropTypes.string.isRequired
}

export default MainHeading;