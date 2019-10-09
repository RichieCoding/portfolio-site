import React from "react";
import "./critter-page.styles.scss";
import Critter from "../../assets/images/Critter05-01.png";
import Logo from "../../assets/images/CritterTest.png";
import TimelineCritter from "../../components/Timeline-Critter/TimelineCritter";
import ScrollAnimation from "react-animate-on-scroll";

const CritterPage = () => {
  return (
    <div className='critter-page'>
      <div className='main-image'>
        <div className='image-container'>
          <img src={Critter} alt='project' />
        </div>
        <div className='project-buttons'>
          <a
            href='https://github.com/RichieCoding/Ecommerce-Front-End'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>Demo</p>
          </a>
          <a
            href='https://github.com/RichieCoding/Critter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>Github</p>
          </a>
        </div>
      </div>
      <div className='critter-header'>
        <div className='main-header'>
          <img className='critter-logo' src={Logo} alt='logo' />
          <p>
            A twitter feed clone where the critters of NYC can post their
            thoughts and have other critters respond to it. Search for other
            critters and view their profile and thoughts.
          </p>
        </div>
      </div>
      <hr></hr>
      <h2 className='timeline-title'>TechStack</h2>
      <ScrollAnimation animateIn='fadeIn'>
        <TimelineCritter />
      </ScrollAnimation>
    </div>
  );
};

export default CritterPage;
