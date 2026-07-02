import React from 'react';
import Footer from "../footer/Footer.jsx";
import ContactForm from './ContactForm.jsx';

const ContactFormContainer = () => {

    

  return (
    <div className="w-full flex flex-col items-center h-dvh overflow-hidden pt-8 sm:pt-12 lg:pt-16">
        <h3 className="text-3xl sm:text-4xl lg:text-6xl font-nohemi">Get In Touch</h3>
        <ContactForm idPrefix="section"/>
        <Footer />
    </div>
  )
}

export default ContactFormContainer;