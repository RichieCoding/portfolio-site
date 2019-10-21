import React from "react";
import "./shoppie-page.styles.scss";
import Shoppie from "../../assets/images/main-shoppie.png";
import Timeline from "../../components/Timeline/Timeline";
import ScrollAnimation from "react-animate-on-scroll";
import ProjectNav from '../../components/ProjectNav/ProjectNav'

const ShoppiePage = () => {
  return (
    <div className='shoppie-page'>
      <div className='main-image'>
        <div className='image-container'>
          <img src={Shoppie} alt='project' />
        </div>
        <div className='project-buttons'>
          <a
            href='http://shoppie-front-end.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>Demo</p>
          </a>
          <a
            href='https://github.com/RichieCoding/Ecommerce-Front-End'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>Github</p>
          </a>
        </div>
      </div>
      <div className='shoppie-header'>
        <div className='main-header'>
          <h3>Shoppie</h3>
          <p>
            An ecommerce site where an admin can sign in and manage their
            ecommerce site. They can track, add, and edit their inventory and
            view orders that were created by customers. A customer can view
            products, log in and view orders they've placed.
          </p>
        </div>
        <div className='credentials'>
          <div style={{ margin: "20px 0" }}>
            <h4 className='side-title'>Admin</h4>
            <p>Username: richie</p>
            <p>Password: abc123</p>
          </div>
          <div style={{ margin: "20px 0" }}>
            <h4 className='side-title'>Customer</h4>
            <p>Username: test</p>
            <p>Password: test</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2 className='timeline-title'>TechStack</h2>
        <Timeline />
      <hr className='last-hr'/>
      <ScrollAnimation animateIn='fadeInRight' offset='105'>
        <ProjectNav />
      </ScrollAnimation>
      
    </div>
  );
};

export default ShoppiePage;
