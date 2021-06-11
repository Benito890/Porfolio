import React from 'react';
import './Home.css';
import Typical from 'react-typical';

function Home () {
  return (
        <div className="background-image">
            <div className="container">
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
                <a className="button button-2">Découvrir les projets</a>
            </div>
        </div>
  );
}

export default Home;
