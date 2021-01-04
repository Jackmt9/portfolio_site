import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
    return (
      <div className="App">
        <NavBar />
        <Router>
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>

        </Router>

      </div>
    );
}

export default App;
