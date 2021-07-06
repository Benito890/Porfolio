import React from 'react';
import './Apropos.css';
import CV from '../../assets/Benoit.pdf';
import Photo from '../../assets/Benito.jpg';
import Croix from '../../assets/Croix.svg';
import Cube from '../../assets/Cube.svg';
import Circle from '../../assets/Circle.svg';
import Circle2 from '../../assets/Circle2.svg';

function Apropos () {
  return (
        <div className="propos-container" id="propos">
          <h1 id="section-1">À propos</h1>
          <div id="div-propos">
          <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1200" id="text-container">
            <p id='description'>Ancien responsable commercial pendant plus de 2 ans, j'ai décidé de prendre un virage à 360 et d'entreprendre enfin ma carrière de développeur web.<br></br><br></br>Après m'être formé à la Wild Code School pendant 5 mois sur divers projets.<br></br>Je recherche à partir de septembre un stage de 6 mois sur les technos React / NodeJS</p>
            <a href={CV} download='CV-Benoit-DACOSTA'><button className="button button-2">Télécharger mon CV</button></a>
         </div>
         <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1200" className="photo-container">
             <div id="pic-container">
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
        </div>
  );
}

export default Apropos;
