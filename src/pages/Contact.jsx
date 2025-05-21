import React, { useState } from 'react';
import './contact.css';
import contactImg from '../assets/images/contactImage.png';
import logo from '../assets/images/logo.png';

const faqs = [
  'DO YOU SPEAK VIETNAMESE ?',
  'WHERE CAN I FIND YOUR BOOKS?',
  'DO YOU USE EXTRA LIGHTS?'
];

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="contact-container container">
      <div className="contact-header-row contact-header-custom">
        <img src={logo} alt="Logo" className="contact-logo" />
        <h1 className="contact-title contact-title-center">CONTACT THE ARTIST</h1>
        <div className="contact-phone"> <i className="fa fa-phone" style={{color: "var(--color-title)"}}></i> +84 94 982 06 98 </div>
      </div>
      <p className="contact-desc">
        Please check our list of Frequently Asked Questions below to see if your question has already been answered. If you have any other inquiries, please fill out the contact request form and our team will be happy to assist you.<br />
        Our email: <span className="contact-email">assistant@rehahnphotographer.com</span>
      </p>
      <div className="contact-main">
        <div className="contact-img-col">
          <img src={contactImg} alt="Contact portrait" className="contact-img" />
        </div>
        <form className="contact-form contact-form-white" onSubmit={handleSubmit}>
          <label>Reasons for contacting us?</label>
          <input type="text" placeholder="" />
          <label>Your Name*</label>
          <input type="text" placeholder="" required />
          <label>Your Email*</label>
          <input type="email" placeholder="" required />
          <label>Subject*</label>
          <input type="text" placeholder="" required />
          <label>Your Message*</label>
          <textarea rows={4} placeholder="" required />
          <button type="submit" className="contact-send-btn">SEND</button>
        </form>
        <div className="contact-faq-col">
          <div className="contact-faq-title">Frequently asked questions</div>
          <div className="contact-faq-list">
            {faqs.map((q, i) => (
              <div className="contact-faq-item" key={i}>
                <span className="contact-faq-plus">+</span>
                <button className="contact-faq-btn">{q}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contact-footer">
        <span>Copyright 2023 © Rehahn Photography</span>
        <div className="contact-socials">
          <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      {showToast && (
        <div className="toast-notification">
          <div className="toast-content">
            <i className="fas fa-check-circle"></i>
            <span>Your message has been sent successfully! We'll get back to you soon.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact; 