import React, { useState, useEffect } from 'react';
import './Header.css';

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
      <nav>
        {(toggleMenu || largeur > 992) && (
          <ul className="nav-list">
            <li>À propos</li>
            <li>Compétences</li>
            <li>Mes projets</li>
            <li>Contact</li>
          </ul>
        )}
        <button className="btn" onClick={toggleNavSmallScreen}>
          |||
        </button>
      </nav>
  );
}

export default Header;
