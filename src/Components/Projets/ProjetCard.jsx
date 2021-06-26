import React, { useState, useEffect } from 'react';
import './ProjetCard.css';
import 'antd/dist/antd.css';
import boutonBas from '../../assets/project/bouton-bas.png';

function ProjetCard (props) {
  const [image, setImage] = useState();
  const [openState, setOpenState] = useState(false);
  const [classDiv, setClassDiv] = useState('closed');
  const [rotateBouton, setRotateBouton] = useState('bouton-bas');

  const infoDiv = () => {
    if (openState) {
      setClassDiv('open');
      setRotateBouton('bouton-haut');
    } else {
      setClassDiv('closed');
      setRotateBouton('bouton-bas');
    }
  };

  const OpenClose = () => {
    setOpenState(!openState);
  };

  useEffect(() => {
    infoDiv();
  }, [openState]);

  return (
    <div id='grande-div'>
      <div id="card-container">
        <img id="lafleur" src={image} onMouseEnter={() => setImage(props.picture2)} onMouseLeave={() => setImage(props.picture1)}></img>
        <div id="moyenne-div">
          <div className='div-open-close'>
            <div id="entete">
              <h2 id="h2-card">{props.title}</h2>
              <p id="slogan">{props.slogan}</p>
            </div>
            <div id="title-logo">
              <a href={props.github} >
                <a className="github-button" data-icon="octicon-eye" data-size="large">Website</a>
              </a>
              <a href={props.website} >
              <a className="github-button" id="github" data-size="large" aria-label="Follow @ntkme on GitHub">Github</a>
              </a>
            </div>
          </div>
          <div id={classDiv}>
            <p><span>Description : </span>{props.description}</p>
            <p id="p-bas"><span>Technologies : </span> {props.technos}</p>
          </div>
          <div id="bouton-info">
            <a onClick={OpenClose}><img className="bouton-bas" id={rotateBouton} src={boutonBas}></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjetCard;
