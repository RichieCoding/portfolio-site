import React from "react";
import "./okupid-page.styles.scss";
import Okupid from "../../assets/images/oKupid-page.png";
import Timeline from "../../components/Timeline-Okupid/Timeline-Okupid";
import ScrollAnimation from "react-animate-on-scroll";
import ProjectNav from "../../components/ProjectNav/ProjectNav";

const ShoppiePage = () => {
  return (
    <div className='okupid-page'>
      <div className='main-image'>
        <div className='image-container'>
          <img src={Okupid} alt='project' />
        </div>
        <div className='project-buttons'>
          <a
            href='https://www.youtube.com/watch?v=hMX7iptbRaU'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>Video</p>
          </a>
          <a
            href='https://github.com/RichieCoding/oKupid'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>Github</p>
          </a>
        </div>
      </div>
      <div className='okupid-header'>
        <div className='main-header'>
          <h3>oKupid</h3>
          <p>
            A dating app where you can create your profile, browse other users,
            give them a follow, message them. There is also a matching feature
            that matches you with other users based on your profile information.
          </p>
        </div>
        <div className='credentials'>
          <div style={{ margin: "20px 0" }}>
            <h4 className='side-title'>Login</h4>
            <p>Username: batman</p>
            <p>Password: abc123</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2 className='timeline-title'>TechStack</h2>
        <Timeline />
      <hr className='last-hr'/>
      <ScrollAnimation animateIn='fadeInRight' offset='50'>
        <ProjectNav />
      </ScrollAnimation>
    </div>
  );
};

export default ShoppiePage;
