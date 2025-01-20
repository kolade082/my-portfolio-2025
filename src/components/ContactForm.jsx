import React, { useState } from 'react';
import './contactForm.css';

function ContactForm() {
  const intialState = {
    fullname: '',
    email: '',
    subject: '',
    message: '',
    result: '',
  };

  const [text, setText] = useState(intialState);

  const changeText = e => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, result: '' });
  };

  const handleSubmitMessage = e => {
    e.preventDefault();
    if (text.fullname === '' || text.email === '' || text.message === '') {
      setText({ ...text, result: 'incomplete' });
      return;
    }
    console.log(text);
  };

  return (
    <form
      role="form"
      className="contact-form mt-4"
      onSubmit={handleSubmitMessage}
    >
      <div className="row">
        <div className="col-md-6 form-group">
          <input
            type="text"
            name="fullname"
            value={text.fullname}
            onChange={changeText}
            className="form-control"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            type="email"
            className="form-control"
            name="email"
            value={text.email}
            onChange={changeText}
            id="email"
            placeholder="Your Email"
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          name="subject"
          value={text.subject}
          onChange={changeText}
          id="subject"
          placeholder="Subject"
        />
      </div>
      <div className="form-group mt-3">
        <textarea
          className="form-control"
          name="message"
          value={text.message}
          onChange={changeText}
          rows="6"
          placeholder="Message"
        ></textarea>
      </div>
      {text.result === 'incomplete' && (
        <div className="error-message">Please fill in all above details</div>
      )}
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
}

export default ContactForm;
