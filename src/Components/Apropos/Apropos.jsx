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
            <p id='description'>Passionné et polyvalent, j'évolue depuis plus de 2 ans sur les frameworks Javascript back-end et front-end en quête de nouveaux challenges.<br></br><br></br>
                Ma rigueur, mon pragmatisme et ma détermination seront de réels atout pour votre équipe.</p>
              <a href={CV} download='CV-Benoit-DACOSTA' className="button button-2">Télécharger mon CV</a>
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
