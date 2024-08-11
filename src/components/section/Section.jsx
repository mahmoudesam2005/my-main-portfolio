import React, { useState } from "react";
import "./Section.css";
import PropTypes from "prop-types";
import Image from "../personalImage/Image";
import Details from "../details/Details";


function Section({children}) {
    return (
        <section className="container info-section">
            <Image></Image>
            <Details>{children}</Details>
        </section>
    )
}

Section.propTypes = {
    children: PropTypes.node.isRequired
}

export default Section;