import React from 'react';
import './Home.css';
import Typical from 'react-typical';

function Home () {
  return (
        <div className="background-image">
            <div className="container">
                <h1>BENOIT DA COSTA</h1>
                <h2>Développeur
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
                <button>Découvrir les projets</button>
            </div>
        </div>
  );
}

export default Home;
