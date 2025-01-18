import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'boxicons/css/boxicons.min.css';

import React, { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
// import About from './pages/About';
// import Resume from './pages/Resume';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';

function App() {
  const [aboutActive, setAboutActive] = useState(false);
  const homeRef = useRef();
  // const aboutRef = useRef();
  // const resumeRef = useRef();
  // const portfolioRef = useRef();
  // const contactRef = useRef();

  const sections = [
    {
      name: 'header',
      ref: homeRef,
      active: true,
    },
    // {
    //   name: 'about',
    //   ref: aboutRef,
    //   active: false,
    // },
    // {
    //   name: 'resume',
    //   ref: resumeRef,
    //   active: false,
    // },
    // {
    //   name: 'portfolio',
    //   ref: portfolioRef,
    //   active: false,
    // },
    // {
    //   name: 'contact',
    //   ref: contactRef,
    //   active: false,
    // },
  ];

  const handleSectionActive = target => {
    sections.map(section => {
      section.ref.current.classList.remove('section-show');
      if (section.ref.current.id === target) {
        section.ref.current.classList.add('section-show');
      }
      return section;
    });
  };

  return (
    <>
      <Header
        sectionActive={handleSectionActive}
        reference={homeRef}
        aboutActive={setAboutActive}
      />
      {/* <About reference={aboutRef} aboutActive={aboutActive} />
      <Resume reference={resumeRef} />
      <Portfolio reference={portfolioRef} />
      <Contact reference={contactRef} /> */}
    </>
  );
}

export default App;
