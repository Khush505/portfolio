import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import './App.css';

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
          <Certificates/>
        
          
          
        </main>
        <footer>
          <p>© 2024 Khushboo Masih. All rights reserved.</p>
        </footer>
      
    </div>
  );
}

export default App;
