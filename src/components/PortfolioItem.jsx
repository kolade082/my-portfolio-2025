import React, { useState } from "react";
import Modal from "./Modal";

function PortfolioItem({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="col-lg-4 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
        <img src={item.img} className="img-fluid" alt={item.title} />
        <div className="portfolio-info">
          <div className="portfolio-content">
            <h4>{item.title}</h4>
            <p>{item.brief}</p>
            <div className="tech-stack">
              {item.technologies?.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          <div className="portfolio-links">
            <button
              onClick={() => setIsModalOpen(true)}
              className="portfolio-button details-btn"
              title="View Details"
            >
              <i className="bi bi-eye"></i>
              <span>View Details</span>
            </button>
            {item.demoUrl && (
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-button demo-btn"
                title="Live Demo"
              >
                <i className="bi bi-globe"></i>
                <span>Live Demo</span>
              </a>
            )}
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-button github-btn"
                title="View Code"
              >
                <i className="bi bi-github"></i>
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={item}
      />
    </div>
  );
}

export default PortfolioItem;
