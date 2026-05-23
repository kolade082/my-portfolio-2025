import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="app-layout">
      <Navigation />
      <main className="app-content">
        <Header />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
