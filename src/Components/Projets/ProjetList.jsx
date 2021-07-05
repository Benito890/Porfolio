import React from 'react';
import ProjetCard from './ProjetCard';
import './ProjetList.css';
import dataProjet from './data';

function ProjetList () {
  return (
        <div id="projet-container">
          <h1 id="title-h2">Voici mes projets</h1>
         <ProjetCard
         title={dataProjet[0].title}
         picture1={dataProjet[0].picture1}
         picture2={dataProjet[0].picture2}
         website={dataProjet[0].websiteLink}
         github={dataProjet[0].githubLink}
         description={dataProjet[0].description}
         slogan={dataProjet[0].slogan}
         technos={dataProjet[0].technos}
           />
        </div>
  );
}

export default ProjetList;
