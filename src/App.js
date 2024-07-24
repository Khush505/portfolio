import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
//import Certificates from './Certificates'; // eslint-disable-line no-unused-vars
import './App.css';
import TestLinks from "./components/Certification";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Khushboo Masih</h1>
        </header>
        <main>
          <About/>
          <Projects/>
          <Education/>
          <TestLinks />
          
        </main>
        <footer>
          <p>© 2024 Khushboo Masih. All rights reserved.</p>
        </footer>
      
    </div>
  );
}

export default App;
