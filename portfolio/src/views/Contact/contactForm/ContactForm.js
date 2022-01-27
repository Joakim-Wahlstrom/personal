import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'


const ContactForm = () => {

  const form = useRef()

  const handleSubmit = e => {
    e.preventDefault()

    emailjs.sendForm('service_oy1utkm', 'template_hlpg8d1', form.current, 'user_qsicyQ2POHwbSpZZc84wK')
    .then((result) => {
        form.current.reset();
    }, (error) => {
        console.log(error.text);
    });

  }

  return (
  <form className='contact-form text-center' ref={form} onSubmit={handleSubmit}>
    <div className="group">
      <input type="text" className="form-input" placeholder='Ditt Namn' name="name" required />
    </div>
    <div className="group">
      <input type="email" className="form-input" placeholder='Din Email' name="email" required />
    </div>
    <div className="group">
      <input type="text" className="form-input" placeholder='Ämne' name="subject" required />
    </div>
    <div className="group">
      <textarea cols="30" rows="10" className='form-input form-textarea' placeholder='Meddelande' name="message" required></textarea>
    </div>
    <button className="btn btn-primary btn-sm">Skicka meddelande</button>
  </form>
  )
};

export default ContactForm;
