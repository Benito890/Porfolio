import React from 'react';
import './Apropos.css';
import CV from '../../assets/Ben.pdf';
import Photo from '../../assets/Benito.jpg';
import Croix from '../../assets/Croix.svg';
import Cube from '../../assets/Cube.svg';
import Circle from '../../assets/Circle.svg';
import Circle2 from '../../assets/Circle2.svg';

function Apropos () {
  return (
        <div className="propos-container">
          <div className="text-container">
            <h1 id="section-1">À propos</h1>
            <p>Après 2 ans en tant que responsable commercial, j'ai décidé de prendre un virage à 360 et d'entreprendre enfin ma carrière de développeur web.<br></br><br></br>Ma rigueur, mon pragmatisme et mon extrême détermination seront de réels atout pour votre équipe.</p>
            <a href={CV} download='CV-Benoit-DACOSTA'><button className="button button-2">Télécharger mon CV</button></a>
         </div>
         <div className="photo-container">
             <div className="picture-container">
            <img src={Photo} alt="my-photo" id="photo"/>
            <img src={Croix} alt='croix' className="croix" id='croix-1'/>
            <img src={Croix} alt='croix' className="croix" id='croix-2'/>
            <img src={Croix} alt='croix' className="croix" id='croix-3'/>
            <img src={Croix} alt='croix' id='croix-4'/>
            <img src={Cube} alt='cube' id="cube-1"/>
            <img src={Cube} alt='cube' id="cube-2"/>
            <img src={Circle} alt='circle' className="circle" id="double-circle-1"/>
            <img src={Circle} alt='circle' className="circle" id="double-circle-2"/>
            <img src={Circle2} alt='double-circle' className="circle" id='circle-1'/>
            <img src={Circle2} alt='double-circle' className="circle" id="circle-2"/>
            </div>
         </div>
        </div>
  );
}

export default Apropos;
