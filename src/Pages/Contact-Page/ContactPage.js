import React from 'react'
import './contact-page.styles.scss'
import ContactForm from '../../components/ContactForm/ContactForm'

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <div className="header">
        <h3>Let's work together</h3>
        <ContactForm />
        <hr/>
      </div>
    </div>
  )
}

export default ContactPage
