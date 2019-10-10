import React, { Component } from "react";
import "./about-page.styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons'


class AboutPage extends Component {
  state = {
    scroll: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    const bottom = e.target.scrollHeight;
    if (window.scrollY !== 0) {
      console.log('yay')
      this.setState({
        scroll: true
      })
    }
    if (window.scrollY === 0) {
      this.setState({
        scroll: false
      })
    }
    console.log(window.scrollY);
  };

  render() {
    return (
      <div className='about-page'>
        <div className='main-purple-box'>
          { !this.state.scroll ?
            <h2 className='intro-name'>Hi, I'm Richard</h2>
          : null
          }
          { !this.state.scroll ?
          <div className="arrow-icon">
          {/* <FontAwesomeIcon icon={faSortDown} size="2x"/> */}
          <p>S</p>
          <p>C</p>
          <p>R</p>
          <p>O</p>
          <p>L</p>
          <p>L</p>
          </div>
          :
          null
          }
        
        </div>
        <div className='text'>
          {/* <h2 className='text-name-intro'>Hi, I'm Richard</h2> */}
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
            Rails. I discovered Software Development through my love for Brazilian Jiu Jitsu and how similar they are with problem solving and learning. I gave it
            and a try and I absolutely fell in love with coding. I also enjoy
            meeting and conversing with people so feel free to connect and chat.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutPage;
