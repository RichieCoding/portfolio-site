import React from 'react'
import './contact-page.styles.scss'

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <div className="header">
        <h3>Let's work together</h3>
        <div className="contact-form">
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Email'/>
        </div>
        <textarea name="text" id="" cols="30" rows="10" placeholder="Message"></textarea>
        <h4>Send</h4>
        <hr/>
      </div>
    </div>
  )
}

export default ContactPage
