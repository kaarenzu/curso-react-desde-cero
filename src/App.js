import React from 'react';
import "./styles/styles.scss"
import Banner from './Banner'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Formulario from './Formulario'
import CourseGrid from './CourseGrid';
import Course from './Course.jsx'
import MainMenu from './MainMenu';


function App() {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={Banner} />
        <Route path="/cursos/:id" component={Course} />
        <Route path="/cursos" component={CourseGrid} />      
        <Route path="/formulario" component={() => <Formulario name="Ingresa tus datos" />} />
        <Route component={() => (
          <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Página no encontrada</span>
          </div>
        )} />

      </Switch>
    </Router>
  );
}

export default App;
