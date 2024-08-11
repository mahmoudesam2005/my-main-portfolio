import React from "react";
import "./MasCompany.css";
import MainHeading from "../mainHeading/MainHeading.jsx";
import mas from "../../assets/mas.png";
import sinbad from "../../assets/sinbad.png";

export default function MasCompany() {
    return (
        <>
            <div className="mas-heading">
            <MainHeading smTitle="Get to know" title="My Work Experience"></MainHeading>
            </div>
            <div className="mas container">
                <div className="mas-img">
                    <img src={sinbad} alt="" />
                </div>
                <div className="mas-description-title">
                    <h1>Sinbad Office For Tourisim Services</h1>
                </div>
                <div className="mas-description">
                    <p>
                        2022
                    </p>
                    <div>
                        <p>
                            <p>
                                Provided comprehensive technical support for a range of hardware and software issues, ensuring minimal downtime and efficient resolution of problems.
                            </p>
                            <p>
                                Assisted with the setup, configuration, and maintenance of office equipment and technology, including computers, printers, and network systems.
                            </p>
                        </p>
                    </div>
                </div>
            </div>
            <div className="mas container">
                <div className="mas-img">
                    <img src={mas} alt="" />
                </div>
                <div className="mas-description-title">
                    <h1>Technical And Administrative Support</h1>
                </div>
                <div className="mas-description">
                    <p>
                        2024 - Present
                    </p>
                    <div>
                        <p>
                            At MAS Engineering Consultancy Services, I have been responsible for a variety of technical and administrative tasks. My primary duties include designing offer covers and various other design materials to enhance the company&apos;s presentation and branding. I manage the archiving and sorting of company files, ensuring that all documents are well-organized and easily accessible. Additionally, I troubleshoot and resolve technical issues within the company, providing timely and effective solutions to maintain smooth operations. 
                        </p>
                        <p>
                            One of my significant contributions is the development of the company&apos;s website and profile, which involved both the design and implementation phases. This project showcased my skills in web development and my ability to create user-friendly and visually appealing digital interfaces. Through this role, I have honed my skills in problem-solving, technical support, and design, making me a valuable asset to the team.
                        </p>
                        <p>
                            Working at MAS Engineering Consultancy Services has provided me with a diverse set of challenges and learning opportunities, enabling me to grow professionally and expand my skill set in a dynamic environment.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}