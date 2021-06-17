import React from 'react';
import './Competence.css';
import bootstrap from '../../assets/logos-front/logo-bootstrap.png';
import css from '../../assets/logos-front/logo-css1.png';
import html from '../../assets/logos-front/logo-html.png';
import js from '../../assets/logos-front/logo-js.png';
import materialui from '../../assets/logos-front/logo-material-ui.png';
import react from '../../assets/logos-front/logo-react.png';
import node from '../../assets/logos-back/logo-node1.png';
import mysql from '../../assets/logos-back/logo-mysql.png';
import postman from '../../assets/logos-back/logo-postman.png';
import git from '../../assets/logos-autres/logo-git.png';
import jira from '../../assets/logos-autres/logo-jira.png';
import vscode from '../../assets/logos-autres/logo-vscode.png';

export default function Competence () {
  return (
        <div id="section-2" className="big-container">
            <div className="moyen-container">
                <div className="bloc" id="bloc-1">
                    <h2>Front-end</h2>
                    <div className="logo-container">
                        <div className="logo-align">
                            <img src={html} id="html"></img>
                        </div>
                        <span id="span-1">HTML 5</span>
                    </div>
                    <div className="logo-container">
                        <div className="logo-align">
                            <img src={react} id="react"></img></div>
                        <span id="span-2">React</span>
                    </div>
                    <div className="logo-container"><div className="logo-align">
                        <img src={css} id="css"></img></div>
                        <span id="span-3">CSS 3</span>
                    </div>
                    <div className="logo-container"><div className="logo-align">
                        <img src={materialui} id="materialui"></img></div>
                        <span id="span-4">Material UI</span>
                    </div>
                    <div className="logo-container"><div className="logo-align">
                        <img src={js} id="js"></img></div>
                        <span id="span-5">Javascript</span>
                    </div>
                    <div className="logo-container"><div className="logo-align">
                        <img src={bootstrap} id="bootstrap"></img></div>
                        <span id="span-6">Bootstrap</span>
                    </div>
                </div>
                <div className="bloc" id="bloc-2">
                    <h2>Back-end</h2>
                    <div className="logo-container2">
                        <div className="logo-align">
                            <img src={node} id="node"></img>
                        </div>
                        <span id="span-1">NodeJS</span>
                    </div>
                    <div className="logo-container2">
                        <div className="logo-align">
                            <img src={mysql} id="mysql"></img>
                        </div>
                        <span id="span-1">MySQL</span>
                    </div>
                    <div className="logo-container2">
                        <div className="logo-align">
                            <img src={postman} id="postman"></img>
                        </div>
                        <span id="span-1">Postman</span>
                    </div>
                </div>
                <div className="bloc" id="bloc-2">
                    <h2>Autres</h2>
                    <div className="logo-container2">
                        <div className="logo-align">
                            <img src={git} id="git"></img>
                        </div>
                        <span id="span-1">Git / GitHub</span>
                    </div>
                    <div className="logo-container2">
                        <div className="logo-align">
                            <img src={jira} id="jira"></img>
                        </div>
                        <span id="span-1">Jira</span>
                    </div>
                    <div className="logo-container2">
                        <div className="logo-align">
                            <img src={vscode} id="vscode"></img>
                        </div>
                        <span id="span-1">VSCode</span>
                    </div>
                </div>
            </div>
        </div>
  );
}
