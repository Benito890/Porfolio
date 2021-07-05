import React from 'react';
import './Footer.css';
import linkedin from '../../assets/logos-footer/linkedin.svg';
import github from '../../assets/logos-footer/githubb.svg';

export default function Footer () {
  return (
        <div id="footer">
            <div id='container-footer'>
                <div id="container-logo">
                    <a href='https://www.linkedin.com/in/benoit-dacosta/'>
                        <img className='logo' src={linkedin}></img>
                    </a>
                    <a href='https://github.com/Benito890'>
                        <img className='logo' src={github}></img>
                    </a>
                </div>
                <p id='p-footer'>© 2021 developped with React by Benoit Da Costa</p>
            </div>
        </div>
  );
}
