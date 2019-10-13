import React, { Component } from "react";
import "./contact-form.styles.scss";

export class ContactForm extends Component {
  state = {
    email: "",
    message: "",
    name: "",
    sent: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const {name, email, message} = this.state;
    if (name === '' || email === '' || message === '') {
      this.setState({
        submittedEmpty: true
      })
      setTimeout(() => {
        this.setState({
          submittedEmpty: false
        })
      }, 2000)
    } else {
      const templateId = 'template_n0z3Ipt3'
      this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
    }
  }

  sendFeedback = (templateId, variables) => {
    window.emailjs.send('gmail', templateId, variables)
    .then(res => {
      console.log('Email successfully sent!')
      this.setState({
        name: '',
        email: '',
        message: '',
        sent: true
      })
      setTimeout(() => {
        this.setState({
          sent: false
        })
      }, 3000)
    })
    .catch(err => console.error('Oh try again rich:', err))
  }

  render() {
    return (
      <>
      {!this.state.sent ?
      <form className='contact-form'>
        <h3>Send a Message</h3>
        <div className='form-inputs'>
          <input
            type='text'
            name='name'
            placeholder='Name'
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='email'
            placeholder='Email'
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <textarea
          name='message'
          cols='30'
          rows='10'
          required
          placeholder='Message'
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <input className='submit-btn' type='button' value='Send' onClick={this.handleSubmit} /> {this.state.submittedEmpty ? <span className='error-message'>Please enter into all fields</span> : null }
      </form> : <h3>Thank you, Message Sent</h3> }
      </>
    );
  }
}

export default ContactForm;
