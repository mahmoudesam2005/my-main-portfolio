import React from "react";
import ProbTypes from "prop-types";
import "./CerSelf.css";

function CerSelf({img, cap}) {
    return (
        <div className="certificate">
            <img src={img} alt={cap} />
            <p>{cap}</p>
        </div>
    )
}

CerSelf.ProbTypes = {
    img: ProbTypes.node.isRequired,
    cap: ProbTypes.string.isRequired
}


export default CerSelf;