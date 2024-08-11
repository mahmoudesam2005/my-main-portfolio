import React from "react";
import PropTypes from "prop-types";
import "./ButtonTrans.css"


function ButtonTrans({margin = false, cv = false, gm = false ,children}) {
    if (cv) {
        return (
            <a href="https://raw.githubusercontent.com/mahmoudesam2005/my-main-portfolio/main/src/assets/files//mcv.docx" download="cv.docx" className={`trans ${margin ? "no-margin" : ""}`}>
                {children}
            </a>
        )
    }
    if (gm) {
        return (
            <a href="https://raw.githubusercontent.com/mahmoudesam2005/my-main-portfolio/main/src/assets/files/gm.png" download="mas_gm_recommendation.png" className={`trans ${margin ? "no-margin" : ""}`}>
                {children}
            </a>
        )
    }
    return (
        <a href="https://raw.githubusercontent.com/mahmoudesam2005/my-main-portfolio/main/src/assets/files/files/mre.png" download="math_recommendation_letter.png" className={`trans ${margin ? "no-margin" : ""}`}>
            {children}
        </a>
    )
}

ButtonTrans.propTypes = {
    children: PropTypes.node,
}

export default ButtonTrans;