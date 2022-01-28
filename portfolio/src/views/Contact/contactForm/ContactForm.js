import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'
import validator from 'validator';

const ContactForm = () => {

  const form = useRef()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validate = () => {
    const errors = []
    if(name.trim() === '') {
      setNameError('Namnet kan inte vara tomt')
      errors.push(false)
    } else {
      setNameError('')
    }
    if(!validator.isEmail(email)) {
      setEmailError('Vänligen skriv in en giltig email adress')
      errors.push(false)
    } else {
      setEmailError('')
    }
    if(subject.trim() === '') {
      setSubjectError('Du måste ange ett ämne')
      errors.push(false)
    } else {
      setSubjectError('')
    }
    if(message.trim() === '') {
      setMessageError('Du måste skriva ett meddelande')
      errors.push(false)
    } else {
      setMessageError('')
    }

    if(errors.includes(false)) {
      return false
    }
    return true
  }

  const handleSubmit = e => {
    e.preventDefault()


    if(validate()) {
      emailjs.sendForm('service_oy1utkm', 'template_hlpg8d1', form.current, 'user_qsicyQ2POHwbSpZZc84wK')
      .then((result) => {
          setName('')
          setEmail('')
          setSubject('')
          setMessage('')
      }, (error) => {
          console.log(error.text);
      });
    }

  }

  return (
  <form className='contact-form text-center' ref={form} onSubmit={handleSubmit}>
    <div className="group">
      <input type="text" className="form-input" placeholder='Ditt Namn' name="name" value={name} onChange={e => setName(e.target.value)} />
      <p className="error">{nameError}</p>
    </div>
    <div className="group">
      <input type="email" className="form-input" placeholder='Din Email' name="email" value={email} onChange={e => setEmail(e.target.value)} />
      <p className="error">{emailError}</p>
    </div>
    <div className="group">
      <input type="text" className="form-input" placeholder='Ämne' name="subject" value={subject} onChange={e => setSubject(e.target.value)} />
      <p className="error">{subjectError}</p>
    </div>
    <div className="group">
      <textarea cols="30" rows="10" className='form-input form-textarea' placeholder='Meddelande' name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
      <p className="error">{messageError}</p>
    </div>
    <button className="btn btn-primary btn-sm">Skicka meddelande</button>
  </form>
  )
};

export default ContactForm;
