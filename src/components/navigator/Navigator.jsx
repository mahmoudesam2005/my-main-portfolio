import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Navigator.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCode, faFileCode, faBuilding, faGem, faPalette } from '@fortawesome/free-solid-svg-icons';


const iconNames = {
    faHouse: 'house',
    faCode: 'code',
    faFileCode: 'courses',
    faBuilding: 'user',
    faGem: 'gem'
};

<FontAwesomeIcon icon={faFileCode} />

function Navigator({fn, vfn, open}) {

    const [links, updateLinks] = useState([
        [faHouse, true, iconNames.faHouse],
        [faCode, false, iconNames.faCode],
        [faFileCode, false, iconNames.faCode],
        [faBuilding, false, iconNames.faBuilding],
        [faGem, false, iconNames.faGem]
    ]);

    function changeActive(index, fnCall) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
        updateLinks(prev =>
            prev.map(([icon, _, name], i) => ([icon, i === index, name]))
        );
        fnCall(index);
    }

    function handleClick() {
        vfn();
        open();
    }

    return (
        <ul className="container navigator">
            {links.map(([icon, isActive, name], index) => (
                <li className={isActive ? "active" : ""} key={name} onClick={() => changeActive(index, fn)}><FontAwesomeIcon icon={icon}></FontAwesomeIcon></li>
            ))}
            <li onClick={handleClick} ><FontAwesomeIcon icon={faPalette}/></li>
        </ul>
    )
}

Navigator.propTypes = {
    fn: PropTypes.func,
    vfn: PropTypes.func,
    open: PropTypes.func
}


export default Navigator;