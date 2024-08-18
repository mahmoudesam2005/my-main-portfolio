import React, { useState } from "react";
import PropTypes from "prop-types";
import "../projects/Projects.css";
import MainHeading from "../mainHeading/MainHeading.jsx";
import Project from "../project/Project.jsx";
import py from "../../assets/logos/python.png";
import c from "../../assets/logos/c.png";

function Projects() {
    return (
        <div className="move-top">
            <MainHeading smTitle="Explore" title="My Courses Projects"></MainHeading>
            <div className="projects-container container">
                <Project img={c} title="CS50 Runoff" className="rat">
                I developed a runoff voting simulation as part of the CS50 course, which models a ranked-choice voting system. The project involved creating a system where voters rank candidates in order of preference. The program then simulates the elimination process, redistributing votes from the lowest-ranked candidates until one candidate secures a majority. This project honed my skills in algorithm design and reinforced my understanding of data structures and control flow in C.
                    <div className="project-button">
                        <a href="https://github.com/mahmoudesam2005/runoff.git" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={py} title="Data Collection And Processing with Python Project" className="rat">
                I developed a Python program that creates a movie recommender by fetching data from the OMDB and TasteDive Movies websites. Although the TasteDive API is no longer functional, the program continues to operate within the Runestone environment using the requests_with_caching.get() function. This project enhanced my skills in API integration and data handling in Python
                    <div className="project-button">
                        <a href="https://github.com/mahmoudesam2005/MovieRecommender.git" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={c} title="CS50 Plurality" className="rat">
                I created a C program that simulates the plurality election system. This project involved designing an election process where each voter casts a vote for one candidate, and the candidate with the most votes wins. The program solidified my understanding of basic algorithms and data management in C.
                    <div className="project-button">
                        <a href="https://github.com/mahmoudesam2005/Plurality.git" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={py} title="Python Classes And Inheritences Wheel Of Fortune" className="rat">
                I developed a Python project where I implemented the classes WOFPlayer, WOFHumanPlayer, and WOFComputerPlayer for a Wheel of Fortune game. This project allowed me to practice object-oriented programming, focusing on class design, inheritance, and encapsulation.
                    <div className="project-button">
                        <a href="https://github.com/mahmoudesam2005/WheelOfFortune.git" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
            </div>
        </div>
    )
}

export default Projects;