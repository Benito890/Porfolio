import React from 'react';
import './Home.css';
import Typical from 'react-typical';
import logobenito from '../../assets/logoBenito.png';

function Home () {
  return (
        <div id="home" className="background-image">
            <div className="container">
                <img id="logobenito" src={logobenito}></img>
                <h1 id="h1-home">BENOIT DA COSTA</h1>
                <h2 id="h2-home">Développeur
            <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                          ' front-end',
                          2500,
                          ' back-end',
                          2500,
                          ' full-stack',
                          2500
                        ]}
                    />
                </h2>
                <a className="button button-2" href="#title-h2">Découvrir les projets</a>
            </div>
        </div>
  );
}

export default Home;
