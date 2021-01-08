import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
    return (
      <div className="App">
        <div className="content">
          <NavBar />
          <Router>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/resume' component={Resume}/>
            </Switch>
          </Router>
        </div>

        <Footer />
      </div>
    );
}

export default App;
