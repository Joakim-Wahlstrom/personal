import React from 'react';
import './ContactCards.css'

const ContactCards = () => {
  return (
  <div className='contact-cards flex mb-3'>
    <div className="card">
      <div className="fas-container">
        <i className="fas fa-mobile-alt text-primary"></i>
      </div>
      <h3 className="text-primary head">TELEFON</h3>
      <p className='text'>+46 701 469 796</p>
    </div>
    <div className="line"></div>
    <div className="card">
      <div className="fas-container">
        <i className="fas fa-home text-primary"></i>
      </div>
      <h3 className="text-primary head">ADRESS</h3>
      <div className='text'>
        <p>Fläckebogatan 12</p>
        <p>72343 Västerås</p>
      </div>
    </div>
    <div className="line"></div>
    <div className="card">
      <div className="fas-container">
        <i className="fas fa-envelope text-primary"></i>
      </div>
      <h3 className="text-primary head">EMAIL</h3>
      <p className='text'>wahlstrom.joakim@gmail.com</p>
    </div>
  </div>
  )
};

export default ContactCards;
