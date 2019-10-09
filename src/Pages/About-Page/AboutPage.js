import React, { Component } from "react";
import "./about-page.styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons'


class AboutPage extends Component {
  handleScroll = e => {
    // const bottom = e.target.scrollHeight;
    console.log("hello");
  };

  render() {
    return (
      <div className='about-page' onScroll={this.handleScroll}>
        <div className='main-purple-box'>
          <div className="arrow-icon">
          {/* <FontAwesomeIcon icon={faSortDown} size="2x"/> */}
          <p>S</p>
          <p>C</p>
          <p>R</p>
          <p>O</p>
          <p>L</p>
          <p>L</p>
          </div>
        
        </div>
        <div className='text'>
          <h2 className='text-name-intro'>Hi, I'm Richard</h2>
          <div className='header1'>
            <p className='fullstack'>a</p>
            <p className='fullstack'>full</p>
            <p className='fullstack'>stack</p>
            <p className='fullstack'>developer</p>
          </div>
          <div className='fullstack-alt-height'>
            <p>a full stack developer</p>
          </div>
        </div>
        <div className='text2'>
          <p className='header2'>
            I have experience with JavaScript, React/Redux, HTML/CSS, Ruby on
            Rails. I discovered Software Development through a friend that had
            recommended it to me because of my love for Brazilian Jiu Jitsu and
            how similar they are with problem solving and learning. I gave it
            and a try and I absolutely fell in love with coding. I also enjoy
            meeting and conversing with people so feel free to connect and chat.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutPage;
