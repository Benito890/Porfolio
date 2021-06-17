import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Apropos from './Components/Apropos/Apropos';
import Competence from './Components/Competence/Competence';
import ProjetList from './Components/Projets/ProjetList';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App () {
  return (
    <div>
      <Header/>
      <Home/>
      <Apropos/>
      <Competence/>
      <ProjetList/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
