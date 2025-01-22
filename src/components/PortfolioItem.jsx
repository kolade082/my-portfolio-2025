import React, { useState } from "react";
import Modal from "./Modal";

function PortfolioItem({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
      <div className="portfolio-wrap">
        <img src={item.img} className="img-fluid" alt={item.title} />
        <div className="portfolio-info">
          <h4>{item.title}</h4>
          <p>{item.brief}</p>
          <div className="portfolio-links">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
              className="portfolio-button"
            >
              <i className="bx bx-plus"></i>
            </button>
            {/* <a href={item.link} target="_blank" rel="noopener noreferrer">
              <i className="bx bx-link"></i>
            </a> */}
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
