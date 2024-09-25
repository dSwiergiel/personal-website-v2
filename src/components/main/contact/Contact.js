import React, { useState } from 'react';
import axios from 'axios';
// import { useInput } from './hooks/input-hook';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [buttonText, setButtonText] = useState('Send');

  const formSubmit = (e) => {
    e.preventDefault();

    setButtonText('sending...');
    let data = { name, email, message };
    axios
      .post('https://personal-website-v2-api.vercel.app/sendmessage', data)
      .then((res) => {
        setButtonText('Message Sent!');
        resetForm();
        setTimeout(() => {
          setButtonText('Send');
        }, 2000);
      })
      .catch(() => {
        console.log('Message not sent');
        setButtonText('Opps... Something went wrong');
      });
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div>
      <h1 className='mb-4 text-center'>Contact</h1>
      <form className='contact-form' onSubmit={(e) => formSubmit(e)}>
        <div className='form-group row'>
          <div className='col-md-6'>
            <label className='col-form-label' htmlFor='formName'>
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              id='formName'
              name='name'
              className='form-control'
              type='text'
              placeholder='Smith Smithy'
              value={name}
              required
            />
          </div>
          <div className='col-md-6'>
            <label className='col-form-label' htmlFor='formEmail'>
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id='formEmail'
              name='email'
              className='form-control'
              type='email'
              placeholder='SmithSmithy@smithers.com'
              value={email}
              required
            />
          </div>
        </div>
        <label className='form-control-label' htmlFor='formMessage'>
          Message
        </label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          className='form-control'
          id='formMessage'
          name='message'
          type='text'
          rows='3'
          spellCheck='true'
          placeholder='A cool message about cool stuff'
          value={message}
          required
        />

        <div className=''>
          <button
            className='btn btn-primary slide-up-button mt-3 mr-3'
            type='submit'
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
