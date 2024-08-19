import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import InfoSection from "./components/infoSection/InfoSection.jsx";
import Navigator from "./components/navigator/Navigator.jsx";
import SkillsLogos from "./components/skillsLogos/SkillsLogos.jsx";
import Projects from "./components/projects/Projects.jsx";
import MasCompany from "./components/masCompany/MasCompany.jsx";
import Certificates from "./components/certificates/Certificates.jsx";
import ColorOption from "./components/colorsOption/ColorOption.jsx";

let commingIndex = null;

function App() {

  const [currentIndex, updateCurrentIndex] = useState(0);
  const [fadeIn, updateFadeIn] = useState([false, null]);
  const [fadeOut, updateFadeOut] = useState([false, null]);
  const [fading, updateFading] = useState(["", ""]);
  const [isVisible, updateVisibility] = useState(false);
  const [isClosed, updateClosure] = useState(true);

  function modifySelected(index) {
    updateFadeOut([true, currentIndex]);
    updateFadeIn([true, index]);
    updateFading(["fade-in", "fade-out"]);
    commingIndex = index;
    setTimeout(() => {
      updateCurrentIndex(index);
      setTimeout(() => {
        updateFading(["", ""]);
      }, 500);
    }, 500);
  }

  function handleColors() {
    updateVisibility(true);
  }

  function handlePannelOpening(){
    updateClosure(false);
  }

  function handleShow() {
    updateClosure(true);
  }

  return (
    <>
      <Navigator fn={modifySelected} vfn={handleColors} open={handlePannelOpening}></Navigator>
      { currentIndex === 0 ?
        <div className={`${fadeIn[0] && fadeIn[1] === commingIndex ? fading[0] : ""} ${fadeOut[0] && fadeOut[1] === currentIndex ? fading[1] : ""} relative`}>
          <Header className="welcome"></Header>
          <InfoSection title="About Me">
            <div className="info-paragraph">
              <p>
                Hello, I&apos;m Mahmoud Alfalah—a passionate and fast-learning web developer with a strong foundation in HTML, CSS, JavaScript, and Bootstrap. I specialize in creating dynamic and responsive websites that deliver exceptional user experiences.
              </p>
              <p>
              I work with React.js and jQuery But still learning, I use these technologies to build modern web applications. Alongside my web development skills, I have a solid background in Python and C, which enriches my problem-solving capabilities and programming versatility.
              </p>
              <p>
                Additionally, I have experience with Adobe XD and Illustrator, allowing me to design and prototype with a keen eye for detail and creativity.
              </p>
              <p>
                I&apos;m always eager to learn and grow in my field, and my ability to quickly grasp new concepts and technologies drives my enthusiasm for taking on new challenges and opportunities.
                Passionate web developer with a continuous learning mindset. I began exploring coding since 2018
              </p>
            </div>
          </InfoSection>
        </div>
      : ""}
      { currentIndex === 1 ?
        <div className={`relative ${fadeIn[0] && fadeIn[1] === commingIndex ? fading[0] : ""} ${fadeOut[0] && fadeOut[1] === currentIndex ? fading[1] : ""}`}>
          <SkillsLogos></SkillsLogos>
          <Projects></Projects>
        </div>
      : ""}
      { currentIndex === 2 ? 
        <div className={`${fadeIn[0] && fadeIn[1] === commingIndex ? fading[0] : ""} ${fadeOut[0] && fadeOut[1] === currentIndex ? fading[1] : ""} relative`}>
          <MasCompany></MasCompany>
        </div>
      : ""}
      { currentIndex === 3 ?
        <div className={`${fadeIn[0] && fadeIn[1] === commingIndex ? fading[0] : ""} ${fadeOut[0] && fadeOut[1] === currentIndex ? fading[1] : ""} relative`}>
          <Certificates></Certificates>
        </div>
      : ""}
      <ColorOption classN={isVisible  && !isClosed ? "show" : "hide"} fn={handleShow}></ColorOption>
    </>
  )
}

export default App;