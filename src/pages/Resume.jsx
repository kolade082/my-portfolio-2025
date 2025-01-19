import React from "react";
import "./resume.css";
import SectionTitle from "../components/SectionTitle";

function Resume({ reference }) {
  return (
    <section id="resume" className="resume" ref={reference}>
      <div className="container">
        <SectionTitle title="Resume" subtitle="Here's My Resume" />
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Alice Barkley</h4>
              <p>
                <em>
                  Innovative and deadline-driven Graphic Designer with 3+ years
                  of experience designing and developing user-centered
                  digital/print marketing material from initial concept to
                  final, polished deliverable.
                </em>
              </p>
              <ul>
                <li>Street Name, City Name, State, 0000</li>
                <li>(00) 1234 5678</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
