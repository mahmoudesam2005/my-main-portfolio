import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Project.css";

function Project({img, title, children}) {
    return (
        <div className="project-box">
            <div className="img-container"><img src={img} alt={title}></img></div>
            <div className="project-strings">
                <div className="project-title"><p>{title}</p></div>
                <div className="project-content">
                    <p>
                        {children}
                    </p>
                </div>
            </div>
        </div>
    )
}


Project.propTypes = {
    img: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}
export default Project;