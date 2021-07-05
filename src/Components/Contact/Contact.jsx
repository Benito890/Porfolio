import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import logo from '../../assets/logo-email.svg';
import { SnackbarProvider, useSnackbar } from 'notistack';

function Contacte () {
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => {
    enqueueSnackbar('Envoyer avec succes !', { variant });
  };
  function sendEmail (e) {
    e.preventDefault();
    emailjs.sendForm('service_6qycrkq', 'template_wus6w49', e.target, 'user_vLFCrJvO1aQCDVT8QVQ9Q')
      .then((result) => {
        handleClickVariant('success');
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div id="section-4" className="background">
      <h1>N'hésitez pas à me contacter</h1>
      <div className="container-contact">
        <img id="logo-email" src={logo} alt='logo-email'></img>
        <form className='container-form' onSubmit={sendEmail}>
          <label htmlFor="name">Prénom</label>
          <input name="firstname" required></input>
          <label htmlFor="name">Nom</label>
          <input name="name" required></input>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" required></input>
          <label htmlFor="message">Votre message</label>
          <textarea name="message" required></textarea>
          <div className="bouton">
            <button type='submit'>Envoyer</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default function Contact () {
  return (
    <SnackbarProvider>
      <Contacte />
    </SnackbarProvider>
  );
}
