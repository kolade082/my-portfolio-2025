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
              <h4>Kolade Oluwadara</h4>
              <p>
                {/* <em>
                  Loading ...
                </em> */}
              </p>
              <ul>
                <li>London, United Kingdom</li>
                <li>(+44) 7572 887155</li>
                <li>koladedara@outlook.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
