import React from 'react';
import './portfolio.css';
import SectionTitle from '../components/SectionTitle';

function Portfolio({ reference }) {
  return (
    <section id="portfolio" className="portfolio" ref={reference}>
      <div className="container">
        <SectionTitle title="Portfolio" subtitle="Under Construction 🚧" />
        <div className="under-construction">
          <i className="bx bx-wrench"></i>
          <h2>Coming Soon!</h2>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
