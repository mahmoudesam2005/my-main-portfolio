import React, { useState } from "react"
import "./SkillsLogos.css";
import PropTypes from "prop-types";
import htm from "../../assets/logos/html.png";
import cs from "../../assets/logos/css.png";
import bt from "../../assets/logos/boot.png";
import js from "../../assets/logos/js.png";
import jq from "../../assets/logos/jq.png";
import son from "../../assets/logos/json.png";
import rt from "../../assets/logos/react.svg";
import cm from "../../assets/logos/cmd.png";
import gt from "../../assets/logos/git.png";
import gh from "../../assets/logos/github.png";
import py from "../../assets/logos/python.png";
import c from "../../assets/logos/c.png";
import ps from "../../assets/logos/ps.png";
import ai from "../../assets/logos/ai.png";
import xd from "../../assets/logos/xd.png";

function SkillsLogos() {
    return (
        <>
            <div className="skills-container">
                <div className="container">
                    <div className="html"><img src={htm} alt="" /></div>
                    <div className="cs"><img src={cs} alt="" /></div>
                    <div className="bt"><img src={bt} alt="" /></div>
                    <div className="js"><img src={js} alt="" /></div>
                    <div className="jq"><img src={jq} alt="" /></div>
                    <div className="son"><img src={son} alt="" /></div>
                    <div className="rt"><img src={rt} alt="" /></div>
                    <div className="cm"><img src={cm} alt="" /></div>
                    <div className="gt"><img src={gt} alt="" /></div>
                    <div className="gh"><img src={gh} alt="" /></div>
                    <div className="py"><img src={py} alt="" /></div>
                    <div className="c"><img src={c} alt="" /></div>
                    <div className="ps"><img src={ps} alt="" /></div>
                    <div className="ai"><img src={ai} alt="" /></div>
                    <div className="xd"><img src={xd} alt="" /></div>
                    <div className="skills">Skills</div>
                </div>
            </div>
        </>
    )
}

export default SkillsLogos;