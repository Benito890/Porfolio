import React from 'react';
import './Header.css';

function Header () {
return (
    <nav className="header-container">
        <ul className="ul-container">
            <li>À propos</li>
            <li>Compétences</li>
            <li>Mes projets</li>
            <li>Contact</li>
        </ul>   
    </nav>
)
}

export default Header;