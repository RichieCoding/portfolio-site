import React from "react";
import "./chello-page.styles.scss";
import Shoppie from "../../assets/images/main-chello-02.png";
import TimelineChello from "../../components/Timeline-Chello/TimelineChello";
import ScrollAnimation from "react-animate-on-scroll";
import ProjectNav from '../../components/ProjectNav/ProjectNav'

const ChelloPage = () => {
  return (
    <div className='chello-page'>
      <div className='main-image'>
        <div className='image-container'>
          <img src={Shoppie} alt='project' />
        </div>
        <div className='project-buttons'>
          <a
            href='https://github.com/RichieCoding/Ecommerce-Front-End'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>Video</p>
          </a>
          <a
            href='https://github.com/RichieCoding/tGRAH-front-end'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>Github</p>
          </a>
        </div>
      </div>
      <div className='chello-header'>
        <div className='main-header'>
          <h3>Chello</h3>
          <p>
            A Trello clone where we implemented the basic functionality of the
            Trello app. You can create a project, add tasks to that project.
            Delete a task from a project, etc.
          </p>
        </div>
        <div className='credentials'>
          <div style={{ margin: "20px 0" }}>
            <h4 className='side-title'>Login</h4>
            <p>Username: richie</p>
            <p>Password: abc123</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2 className='timeline-title'>TechStack</h2>
        <TimelineChello />
      <hr className='last-hr'/>
      <ScrollAnimation animateIn='fadeInRight' offset='50'>
        <ProjectNav />
      </ScrollAnimation>
    </div>
  );
};

export default ChelloPage;
