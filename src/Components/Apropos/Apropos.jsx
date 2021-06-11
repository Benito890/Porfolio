import React from 'react';
import './Apropos.css';

function Apropos () {
  return (
        <div className="propos-container">
          <div className="text-container">
            <h1>À propos</h1>
            <p>Après 2 ans en tant que responsable commercial, j'ai décidé de prendre un virage à 360 et d'entreprendre enfin ma carrière de développeur web.<br></br><br></br>Ma rigueur, mon pragmatisme et mon extrême détermination seront de réels atout pour votre équipe.</p>
            <a href='../../assets/Ben.pdf' download='CV-Benoit-DACOSTA'><button className="button button-2">Télécharger mon CV</button></a>
         </div>
         <div className="photo-container">
            <img src='/assets/Benoit.jpg' alt="my-photo"/>
         </div>
        </div>
  );
}

export default Apropos;
