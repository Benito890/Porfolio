import React from 'react';
import './Competence.css';
import typescript from '../../assets/logos-front/logo-typescript.svg';
import css from '../../assets/logos-front/logo-css1.png';
import html from '../../assets/logos-front/logo-html.png';
import angular from '../../assets/logos-front/logo-angular.svg';
import materialui from '../../assets/logos-front/logo-material-ui.png';
import react from '../../assets/logos-front/logo-react.png';
import node from '../../assets/logos-back/logo-node1.png';
import mysql from '../../assets/logos-autres/logo-mysql.png';
import nest from '../../assets/logos-back/logo-nest.png';
import prisma from '../../assets/logos-back/logo-prisma.png';
import jira from '../../assets/logos-autres/logo-jira.png';
import azure from '../../assets/logos-autres/logo-azure.png';
import AOS from 'aos';

export default function Competence () {
  AOS.init();
  return (
        <div id="section-2" className="big-container">
            <div id="container-section2">
                <h1 id="h1-section2">Compétences Techniques</h1>
            </div>
            <div className="moyen-container">
                <div data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1200" className="bloc" id="bloc-1">
                    <h2>Front-end</h2>
                    <div className="logo-container">
                        <div className="logo-align">
                            <img src={html} id="html"></img>
                        </div>
                        <span id="span-1">HTML</span>
                    </div>
                    <div className="logo-container">
                        <div className="logo-align">
                            <img src={react} id="react"></img></div>
                        <span id="span-2">React</span>
                    </div>
                    <div className="logo-container"><div className="logo-align">
                        <img src={css} id="css"></img></div>
                        <span id="span-3">CSS</span>
                    </div>
                    <div className="logo-container"><div className="logo-align">
                        <img src={angular} id="angular"></img></div>
                        <span id="span-5">Angular</span>
                    </div>
                    <div className="logo-container"><div className="logo-align">
                        <img src={typescript} id="typescript"></img></div>
                        <span id="span-6">TypeScript</span>
                    </div>
                    <div className="logo-container"><div className="logo-align">
                        <img src={materialui} id="materialui"></img></div>
                        <span id="span-4">Material UI</span>
                    </div>
                </div>
                <div id="two-bloc">
                    <div data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1200" className="bloc" id="bloc-2">
                        <h2>Back-end</h2>
                        <div className="logo-container2">
                            <div className="logo-align">
                                <img src={node} id="node"></img>
                            </div>
                            <span id="span-1">NodeJS</span>
                        </div>
                        <div className="logo-container2">
                            <div className="logo-align">
                                <img src={nest} id="nest"></img>
                            </div>
                            <span id="span-1">NestJS</span>
                        </div>
                        <div className="logo-container2">
                            <div className="logo-align">
                                <img src={prisma} id="prisma"></img>
                            </div>
                            <span id="span-1">Prisma</span>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1200" className="bloc" id="bloc-3">
                        <h2>Autres</h2>
                        <div className="logo-container2">
                            <div className="logo-align">
                                <img src={mysql} id="mysql"></img>
                            </div>
                            <span id="span-1">MySQL</span>
                        </div>
                        <div className="logo-container2">
                            <div className="logo-align">
                                <img src={azure} id="azure"></img>
                            </div>
                            <span id="span-1">Azure</span>
                        </div>
                        <div className="logo-container2">
                            <div className="logo-align">
                                <img src={jira} id="jira"></img>
                            </div>
                            <span id="span-1">Jira</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
