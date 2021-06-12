import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Apropos from './Components/Apropos/Apropos';
import Competence from './Components/Competence/Competence';

function App () {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Apropos></Apropos>
      <Competence></Competence>
    </div>
  );
}

export default App;
