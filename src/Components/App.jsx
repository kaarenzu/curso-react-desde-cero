import React from 'react'
import "../styles/styles.scss"
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './Pages/Form'
import CourseGrid from './Organisms/CourseGrid'
import Course from './Pages/Course.jsx'
import History from './Pages/History'
import Header from './Organisms/Header'


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cursos/:id" component={Course} />
        <Route path="/cursos" component={CourseGrid} /> 
        <Route path="/history" component={History} />      

        <Route path="/formulario" component={() => <Form name="Ingresa tus datos" />} />
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
