import React, { useState } from "react";
import "./Details.css";
import PropTypes from "prop-types";
import Box from "../box/Box.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import ButtonSolid from "../Buttons/ButtonSolid.jsx"
import ButtonTrans from "../Buttons/ButtonTrans.jsx";

function Details({children}) {
    return (
        <div className="holder">
            <div className="box-container">
                <Box logo={<FontAwesomeIcon icon={faCertificate} />} title="Long Life" det="In Coding"></Box>
                <Box logo={<FontAwesomeIcon icon={faCode} />} title="Projects" det="Many Completed Projects"></Box>
                <div className="text-container">
                    <div className="colors">
                        {children}
                    </div>
                    <ButtonSolid margin={true} contact={true}>Let&apos;s talk</ButtonSolid>
                    <div className="recom">
                        <ButtonTrans margin={true} gm={true}>Recommendation Letter By Mas General Manager</ButtonTrans>
                    </div>
                    <div className="recom">
                        <ButtonSolid margin={true} sinbad={true}>Recommendation Letter By The Sinbad Office</ButtonSolid>
                    </div>
                    <div className="recom">
                        <ButtonTrans margin={true}>Recommendation Letter By The Mathmatics Teacher</ButtonTrans>
                    </div>
                </div>
            </div>
        </div>
    )
}

Details.propTypes = {
    children: PropTypes.node.isRequired
}

export default Details;