import React, { useState, useEffect } from "react";
import "./portfolio.css";
import SectionTitle from "../components/SectionTitle";
import PortfolioItem from "../components/PortfolioItem";

function Portfolio({ reference }) {
  const [portfolio, setPortfolio] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/api/portfolioData.json")
      .then((res) => res.json())
      .then((data) => {
        setPortfolio(data);
      })
      .catch((e) => console.error("Error fetching portfolio data:", e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setData(portfolio);
  }, [portfolio]);

  return (
    <section id="portfolio" className="portfolio" ref={reference}>
      <div className="container">
        <SectionTitle title="Portfolio" subtitle="Explore My Work" />

        <div className="row portfolio-container">
          {data && data.length > 0 ? (
            data.map((item) => <PortfolioItem key={item._id} item={item} />)
          ) : (
            <p className="text-center">No portfolio items to display.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
