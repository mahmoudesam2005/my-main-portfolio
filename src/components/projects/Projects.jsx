import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Projects.css";
import MainHeading from "../mainHeading/MainHeading.jsx";
import Project from "../project/Project.jsx";
import Leon from "../../assets/web_imgs/leon.jpg";
import Kasper from "../../assets/web_imgs/kasper.png";
import Dash from "../../assets/web_imgs/dash.png";
import Joy from "../../assets/web_imgs/joy.png";
import dog from "../../assets/web_imgs/dog.png";
import Pink from "../../assets/web_imgs/pink.png";
import Bondi from "../../assets/web_imgs/bondi.png";
import Lis from "../../assets/web_imgs/list.png";
import mas from "../../assets/web_imgs/mas.png";
import todo from "../../assets/web_imgs/todo.png";
import prt from "../../assets/web_imgs/port.png";
import oldport from "../../assets/web_imgs/oldport.png";
import nat from "../../assets/web_imgs/nat.png";
import rees from "../../assets/web_imgs/reees.png";
import py from "../../assets/logos/python.png";
import card from "../../assets/web_imgs/cards.png";

function Projects() {
    return (
        <>
            <MainHeading smTitle="Explore" title="My Web Projects"></MainHeading>
            <div className="projects-container container">
                <Project img={prt} title="Portfolio Project">
                    Welcome to my portfolio, where you can explore my skills and projects crafted with React.js, HTML, CSS, and JavaScript.
                    <div className="project-button">
                        <button>See Online</button>
                    </div>
                </Project>
                <Project img={nat} title="National Parks Project">
                    Explore the National Parks Project, crafted with React.js and styled with Bootstrap. It seamlessly integrates HTML, CSS, and JavaScript to deliver a dynamic and engaging user experience.
                    I&apos;m still working on this website until now, improving the responsive content and adding other features
                    <div className="project-button">
                    <a href="https://mahmoudesam2005.github.io/national-parks/" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={todo} title="The ToDo List Project">
                    This is a To-Do List Application built with React.js, HTML, CSS, and JavaScript. It allows you to easily add, edit, remove, and delete tasks.
                    <div className="project-button">
                        <a href="https://mahmoudesam2005.github.io/list-todo/" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={py} title="Python Code For Consumption" className="rat">
                    I wrote this code as a part of a project where it calculate the internet consumption on the device for the user
                    of course in order to use it it should be used with the prject
                    this consumption was triggered by a thread in the main app so it works synchronensly with the other functions
                    <div className="project-button">
                        <a href="https://github.com/mahmoudesam2005/consumption" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={rees} title="React Essentils Project">
                    This is a project built to show the react essentials, built with React JS, HTMl, CSS and JavaScript.
                    <div className="project-button">
                        <a href="https://mahmoudesam2005.github.io/essentials-re/" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={mas} title="Mas Engineering Consultancy">
                    This is the MAS Consultancy Services Company website, developed using HTML, CSS, JavaScript, and jQuery.
                    currently working on a new version for the project page that is not done yet but you can explore it from <a href="https://mahmoudesam2005.github.io/mas_projects/" target="_blank" className="special">By clicking on these colored words</a> or see the current website by clicking the button below
                    <div className="project-button">
                        <a href="https://mas-ecs.ly" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={oldport} title="My old portfolio">
                    This is My Old portfolio built with HTML, CSS and JavaScript
                    <div className="project-button">
                        <a href="https://mahmoudesam2005.github.io/Capstone-002-Portfolio/" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={Bondi} title="Bondi Bootstrap Project">
                    This is Bondi Bootstrap design where it was used with HTML and CSS.
                    <div className="project-button">
                        <a href="https://mahmoudesam2005.github.io/bondiBootstrap/" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={Lis} title="List Race Project">
                    This is the ListRace Project, developed using HTML, CSS, and JavaScript.
                    <div className="project-button">
                        <a href="https://mahmoudesam2005.github.io/ListRace/" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={Joy} title="Move With Joy Project">
                    This is Move With Joy a website built with HTML, CSS and Bootstrap.
                    <div className="project-button">
                        <a href="https://mahmoudesam2005.github.io/MoveWithJoyB/" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={dog} title="Dog Store Project">
                    This is dogs store website built with HTML, CSS and Bootstrap.
                    <div className="project-button">
                        <a href="https://mahmoudesam2005.github.io/DogStoreUpdate/" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={Pink} title="The Pink Template">
                    This is a pink template built with HTML and CSS.
                    <div className="project-button">
                        <a href="https://mahmoudesam2005.github.io/pinkTemplate/" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={Kasper} title="Kasper Project">
                    This is Kasper website built with HTML and CSS.
                    <div className="project-button">
                        <a href="https://mahmoudesam2005.github.io/HTML_And_CSS_Template_Two/" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={card} title="Product Cards">
                    These are product cards built with HTML and CSS.
                    <div className="project-button">
                        <a href="https://mahmoudesam2005.github.io/cards/" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={Dash} title="A Dash Board Project">
                    This is a dash board website built with HTML and CSS.
                    <div className="project-button">
                        <a href="https://mahmoudesam2005.github.io/HTML_And_CSS_Template_Four/" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
                <Project img={Leon} title="Leon Project">
                    This is Leon website built with HTML and CSS.
                    <div className="project-button">
                        <a href="https://github.com/mahmoudesam2005/HTML_And_CSS_Template_One" target="_blank"><button>See Online</button></a>
                    </div>
                </Project>
            </div>
        </>
    )
}

export default Projects;