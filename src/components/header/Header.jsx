import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import ButtonTrans from "../Buttons/ButtonTrans.jsx";
import ButtonSolid from "../Buttons/ButtonSolid.jsx";

function Header({...proxy}) {
    return (
        <header {...proxy}>
            <div className="container">
                <div className="left-icons">
                    <div><a href="https://www.linkedin.com/in/mahmoud-alfalah-6997252b2/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></div>
                    <div><a href="https://github.com/mahmoudesam2005" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></div>
                    <div><a href="https://www.youtube.com/channel/UCyfrndeAPYefhdqIIRDRgiQ" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></div>
                    <div><a href="https://www.facebook.com/profile.php?id=61555051913431" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></div>
                    <div className="line"></div>
                </div>
                <div className="info">
                    <p className="mini-text">Hello I&apos;m</p>
                    <h1 className="name">Mahmoud Alfalah</h1>
                    <p className="job-title">Front-end Developer</p>
                    <div className="buttons-container">
                        <div>
                            <ButtonTrans cv={true}>Download CV</ButtonTrans>
                            <ButtonSolid contact={true}>Let&apos;s talk</ButtonSolid>
                        </div>
                    </div>
                </div>
                <div className="right-title">
                    <p>Developer</p>
                </div>
            </div>
        </header>
    )
}

export default Header;