import React from 'react';
import ProjetCard from './ProjetCard';
import './ProjetList.css';
import dataProjet from './data';
// const dataProjet = require('./data.js');

function ProjetList () {
  console.log(dataProjet[0].title);
  return (
        <div id="projet-container">
          <h2 id="title-h2">Voici mes projets</h2>
         <ProjetCard
         titlle={dataProjet[0].title}
           />
        </div>
  );
}

export default ProjetList;
