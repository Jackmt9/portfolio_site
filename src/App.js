import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
