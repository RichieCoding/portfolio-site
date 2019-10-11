import React, { Component } from "react";
import "./about-page.styles.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

class AboutPage extends Component {
  state = {
    scroll: false,
    bottom: false,
    secondText: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    // Checks if bottom of page
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      console.log("bottom");
      this.setState({
        bottom: true
      });
    } else {
      this.setState({
        bottom: false
      });
    }

    // Checks if not top of page
    if (window.scrollY !== 0) {
      this.setState({
        scroll: true
      });
    }

    // Checks if top of page
    if (window.scrollY === 0) {
      this.setState({
        scroll: false
      });
    }
    console.log(window.scrollY);
  };

  handleSecondText = () => {
    this.setState(prevState => {
      return { secondText: !prevState.secondText };
    });
    console.log("hello");
  };

  renderBio = () => {
    if (!this.state.secondText) {
      return (
        <p className='main-bio header2'>
          I am a developer based in New York City. I have a passion for web
          design / development and love to bring creative and fun ideas to life.
        </p>
      );
    } else {
      return (
        <p className='second-bio header2'>
          I also train and teach Brazilian Jiu Jitsu and am currently a purple belt. If you want to work together or train together let's chat!
        </p>
      );
    }
  };

  renderArrow = () => {
    if (!this.state.secondText) {
      return (
        <div className='three-arrows' onClick={this.handleSecondText}>
          <FontAwesomeIcon
            className='arrow-right'
            icon={faChevronRight}
            size='md'
          />
          {/* <FontAwesomeIcon
            className='arrow-right'
            icon={faChevronRight}
            size='md'
          />
          <FontAwesomeIcon
            className='arrow-right'
            icon={faChevronRight}
            size='md'
          /> */}
        </div>
      );
    } else {
      return (
        <div className='three-arrows' onClick={this.handleSecondText}>
          <FontAwesomeIcon
            className='arrow-left'
            icon={faChevronLeft}
            size='md'
          />
          {/* <FontAwesomeIcon
            className='arrow-left'
            icon={faChevronLeft}
            size='md'
          />
          <FontAwesomeIcon
            className='arrow-left'
            icon={faChevronLeft}
            size='md'
          /> */}
        </div>
      );
    }
  };

  render() {
    return (
      <div className='about-page'>
        <div className='main-purple-box'>
          {!this.state.scroll ? (
            <h2 className='intro-name'>Hi, I'm Richard</h2>
          ) : null}
          {!this.state.scroll ? (
            <div className='arrow-icon'>
              <p>S</p>
              <p>C</p>
              <p>R</p>
              <p>O</p>
              <p>L</p>
              <p>L</p>
            </div>
          ) : null}
          {this.state.bottom ? this.renderArrow() : null}
          {this.state.bottom ? (
            <Link to='/projects'><div className='view-projects'>
              <p>P</p>
              <p>R</p>
              <p>O</p>
              <p>J</p>
              <p>E</p>
              <p>C</p>
              <p>T</p>
              <p>S</p>
            </div>
            </Link>
          ) : null}
          {this.state.bottom ? (
            <Link to='/contact'><div className='view-contact'>
              <p>C</p>
              <p>O</p>
              <p>N</p>
              <p>T</p>
              <p>A</p>
              <p>C</p>
              <p>T</p>
            </div>
            </Link>
          ) : null}
        </div>
        <div className='text'>
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
        <div className='text2'>{this.renderBio()}</div>
      </div>
    );
  }
}

export default AboutPage;
