import React from "react";
import "./Certificate.css";
import MainHeading from "../mainHeading/MainHeading.jsx";
import csx from "../../assets/certificates/cs50edx.jpg";
import cs from "../../assets/certificates/cs50x.jpg";
import py1 from "../../assets/certificates/py1.jpg";
import py2 from "../../assets/certificates/py2.jpg";
import py3 from "../../assets/certificates/py3.jpg";
import py4 from "../../assets/certificates/py4.jpg";
import pye from "../../assets/certificates/pye.jpg";
import sc from "../../assets/certificates/sc.jpg";
import ht from "../../assets/certificates/ht.jpg";
import com from "../../assets/certificates/com.jpg";
import int from "../../assets/certificates/in.jpg";
import CerSelf from "../cerSelf/CerSelf.jsx";

export default function Certificates() {
    return (
        <>
            <div className="certificates-title">
                <MainHeading smTitle={"Take a look at"} title="My Certificates"></MainHeading>
                <p className="container note">While these certificates represent a significant portion of my learning journey, they are not the sole evidence of my skills. I have also completed numerous other courses on various platforms, such as YouTube, which do not provide formal certificates but have contributed greatly to my expertise
                </p>
                <div className="container certificates-container">
                    <CerSelf img={csx} cap="CS50X By Harvard University"></CerSelf>
                    <CerSelf img={cs} cap="CS50X By Harvard University"></CerSelf>
                    <CerSelf img={py1} cap="Python Basics By Michigan University"></CerSelf>
                    <CerSelf img={py2} cap="Python Functions, File And Dictioneries By Michigan University"></CerSelf>
                    <CerSelf img={py3} cap="Data Collection And Processing With Python By Michigan University"></CerSelf>
                    <CerSelf img={py4} cap="Python Classes And Inheritence By Michigan University"></CerSelf>
                    <CerSelf img={pye} cap="Python Programming Langauge On Edrak.org"></CerSelf>
                    <CerSelf img={sc} cap="Scratch Guided Project By Coursera Project Network"></CerSelf>
                    <CerSelf img={ht} cap="HTML 5 By Mihcigan University"></CerSelf>
                    <CerSelf img={com} cap="ICDL Computer Essentials On Edrak.org"></CerSelf>
                    <CerSelf img={com} cap="ICDL Internet And Email Essentials On Edrak.org"></CerSelf>
                </div>
            </div>
        </>
    )
}