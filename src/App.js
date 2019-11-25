import React, { Component } from 'react';
import Main from "./sections/Main"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Navbar from "./components/Navbar"
import About from "./sections/About"

import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Navbar />
      <Main />
      {/* <About /> */}
      <Projects />
      <Contact />
    </div>
  );
}
}

export default App;
