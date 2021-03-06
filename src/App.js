import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
// import Blog from './components/Blog/Blog'
import flatironCert from './components/Certificates'
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
            <Route path='/flatiron_certificate' component={flatironCert}/>
            {/* <Route path='/blog' component={Blog}/> */}
          </Switch>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
