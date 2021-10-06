import React from 'react'
import './contact-page.styles.scss'
import ContactForm from '../../components/ContactForm/ContactForm'
import Linkedin from '../../assets/icons/linkedin.png'
import Medium from '../../assets/icons/Monogram.png'
import Github from '../../assets/icons/github.png'

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <div className="test">
        <p className='contact-text'>CONTACT</p>
      </div>
      <div className="header">
        <ContactForm />
        <hr/>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/richard-li-ny/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="linkedin" style={{width: '35px'}}/></a>
          <a href="https://github.com/RichieCoding" target="_blank" rel="noopener noreferrer"><img src={Github} alt="linkedin" style={{width: '30px', height: '30px'}}/></a>
          <a href="https://medium.com/@richardli125" target="_blank" rel="noopener noreferrer"><img src={Medium} alt="linkedin" style={{width: '30px', height: '30px'}}/></a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
