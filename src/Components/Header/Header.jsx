import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/logoBenito.png';

function Header () {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      console.log(largeur);

      if (window.innerWidth > 1024) {
        setToggleMenu(false);
      }
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
      <nav id="navbar">
        <img id="logo" src={logo}></img>
        {(toggleMenu || largeur > 992) && (
          <ul className="nav-list">
            <li><a href='#section-1'>À propos</a></li>
            <li><a href='#section-2'>Compétences</a></li>
            <li><a href='#section-3'>Mes projets</a></li>
            <li><a href='#section-4'>Contact</a></li>
          </ul>
        )}
        <button className="btn" onClick={toggleNavSmallScreen}>
          |||
        </button>
      </nav>
  );
}

export default Header;
