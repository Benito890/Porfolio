import React from 'react';
import './ProjetCard.css';
import 'antd/dist/antd.css';

// import getinspire1 from '../../assets/project/get1.png';

function ProjetCard (props) {
  return (
    <div id='grande-div'>
      <div id="card-container">
        <img id="lafleur" src={}></img>
        <div id="small-div">
          <h2 id="h2-card">Getinspire</h2>
          <div id="title-logo">
            <a className="github-button" href="https://github.com/ntkme/github-buttons/subscription" data-icon="octicon-eye" data-size="large" aria-label="Watch ntkme/github-buttons on GitHub">Website</a>
            <a className="github-button" id="github" href="https://github.com/ntkme" data-size="large" aria-label="Follow @ntkme on GitHub">Github</a>
          </div>
        </div>
        <div id='description'>
          <p>All your GitHub repositories must have a README file written in Markdown. This is the piece of information recruiters will look at first, maybe they will not even look at your code if your README is correctly written, that is why it is really important. You can check on the given resources a good example of a well-written README file.</p>
        </div>
      </div>
    </div>
  );
}

export default ProjetCard;
