import React, { useState } from "react";
import "./InfoSection"
import PropTypes from "prop-types";
import MainHeading from "../mainHeading/MainHeading.jsx";
import "./InfoSection.css";
import Section from "../section/Section.jsx";

function InfoSection({title, children}) {
    return (
        <>
            <MainHeading smTitle="Get to know" title={title}></MainHeading>
            <Section>{children}</Section>
        </>
    );
}

InfoSection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default InfoSection;