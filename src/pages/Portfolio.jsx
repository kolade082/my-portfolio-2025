import React, { useState, useEffect } from "react";
import "./portfolio.css";
import SectionTitle from "../components/SectionTitle";
import PortfolioItem from "../components/PortfolioItem";

function Portfolio({ reference }) {
  const [portfolio, setPortfolio] = useState([]);
  const [data, setData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const fetchData = () => {
    fetch("/api/portfolioData.json")
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
    if (activeFilter === "all") {
      setData(portfolio);
    } else {
      const filteredData = portfolio.filter(
        (item) => item.type === activeFilter
      );
      setData(filteredData);
    }
  }, [portfolio, activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Split data for 'all' view
  const webProjects = data.filter(item => item.type !== "mobile");
  const mobileProjects = data.filter(item => item.type === "mobile");

  return (
    <section id="portfolio" className="portfolio" ref={reference}>
      <div className="container">
        <SectionTitle title="Portfolio" subtitle="Explore My Work" />

        <div className="portfolio-filters">
          <ul id="portfolio-filters">
            <li
              className={activeFilter === "all" ? "filter-active" : ""}
              onClick={() => handleFilterClick("all")}
            >
              All
            </li>
            <li
              className={activeFilter === "web" ? "filter-active" : ""}
              onClick={() => handleFilterClick("web")}
            >
              Web
            </li>
            <li
              className={activeFilter === "mobile" ? "filter-active" : ""}
              onClick={() => handleFilterClick("mobile")}
            >
              Mobile
            </li>
          </ul>
        </div>

        {activeFilter === "all" ? (
          <>
            <h3 className="portfolio-group-heading">Web Applications</h3>
            <div className="row portfolio-container" style={{ marginBottom: "2rem" }}>
              {webProjects.length > 0 ? (
                webProjects.map(item => (
                  <PortfolioItem key={item._id} item={item} />
                ))
              ) : (
                <p className="text-center">No web projects to display.</p>
              )}
            </div>
            <h3 className="portfolio-group-heading">Mobile Projects</h3>
            <div className="row portfolio-container">
              {mobileProjects.length > 0 ? (
                mobileProjects.map(item => (
                  <PortfolioItem key={item._id} item={item} />
                ))
              ) : (
                <p className="text-center">No mobile projects to display.</p>
              )}
            </div>
          </>
        ) : (
          <div className="row portfolio-container">
            {data && data.length > 0 ? (
              data.map((item) => <PortfolioItem key={item._id} item={item} />)
            ) : (
              <p className="text-center">No portfolio items to display.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
