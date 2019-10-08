import React from "react";
import "./about-page.styles.scss";

const AboutPage = () => {
  return (
    <div className='about-page'>
      <div className='main-purple-box'></div>
      <div className='text'>
        <h2 className='text-name-intro'>Hi, I'm Richard</h2>
        <div className='header1'>
          <p className='fullstack'>a</p>
          <p className='fullstack'>full</p>
          <p className='fullstack'>stack</p>
          <p className='fullstack'>developer</p>
        </div>
      </div>
      <div className='text2'>
        <p className='header2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          voluptatum pariatur maiores ipsam magnam quae quo adipisci suscipit
          necessitatibus veniam impedit, sint iure ipsum asperiores illum totam
          ad unde laborum?
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
