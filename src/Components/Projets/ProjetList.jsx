import React, { useState } from 'react';
import ProjetCard from './ProjetCard';
import './ProjetList.css';
import dataProjet from './data';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

function ProjetList ({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = dataProjet.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(dataProjet) || length <= 0) {
    return null;
  }

  return (
        <div id="projet-container">
          <h1 id="title-h2">Voici mes projets</h1>
          <section className="slider">
          <IoIosArrowDropleftCircle className='arrowSlide' id="left" onClick={prevSlide}/>
          <IoIosArrowDroprightCircle className='arrowSlide' id="right" value={{ color: 'pink' }} onClick={nextSlide}/>
          {dataProjet.map((info, index) => {
            return (
              <div id="mydiv" className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
              <ProjetCard
              key={index}
              title={info.title}
              picture1={info.picture1}
              picture2={info.picture2}
              website={info.websiteLink}
              github={info.githubLink}
              description={info.description}
              slogan={info.slogan}
              technos={info.technos}
                />
                )}
              </div>
            );
          })}
          </section>

        </div>
  );
}

export default ProjetList;
