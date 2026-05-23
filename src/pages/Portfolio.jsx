import React, { useState, useEffect } from 'react';
import './portfolio.css';

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/api/portfolioData.json`)
      .then((res) => res.json())
      .then((data) => setPortfolio(data))
      .catch((e) => console.error('Error fetching portfolio data:', e.message));
  }, []);

  const filteredData = activeFilter === 'all' 
    ? portfolio 
    : portfolio.filter((item) => item.type === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Portfolio</h2>
          <p>Featured Work</p>
        </div>

        <div className="portfolio-filters">
          {['all', 'web', 'mobile'].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item._id} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={`${process.env.PUBLIC_URL}${item.img}`} alt={item.title} />
                  {item.link && (
                    <div className="portfolio-overlay">
                      <a href={item.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </div>
                  )}
                </div>
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="portfolio-tags">
                    {item.tools && item.tools.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-projects">No projects to display.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
