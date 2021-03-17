import React from 'react';
import "./styles/styles.scss"
import "./styles/css.css"
import Curso from './Curso'

function App() {
  return (
    <>
      <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
          <div className="lg-cols-4 lg-x-2">
            <img alt="banner" className="" src="data:image/jpeg;base64,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" />
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Bienvenido a FIF TECH</p>
              <br/>
              <p> Comienza a trabajar con nosotros</p>
              <button className= "buttonss">HOlA Soy un boton</button>
            </div>
          </div>
        </div>
      </div>
      <div className="ed-grid m-grid-3"> 
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      </div>
   
     
    </>


  );
}

export default App;
