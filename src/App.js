import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import {Switch, Route, withRouter} from 'react-router-dom'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <NavBar />
      </div>
    );
}
}

export default App;
