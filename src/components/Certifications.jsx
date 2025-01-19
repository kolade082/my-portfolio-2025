import React from "react";
import certificationsData from "../data/certificationsData";
import "./certifications.css";

function Certifications() {
  return (
    <div className="certifications container">
      <div className="section-title">
        <h2>Certifications</h2>
      </div>
      <div className="row">
        {certificationsData.map((cert) => (
          <div key={cert._id} className="col-lg-6">
            <div className="certification-item">
              {/* <h3>{cert.title}</h3> */}
              <div className="issuer-info">
              <h3>{cert.title}</h3>
                <p>
                  <strong>Issued by:</strong> {cert.issuedBy}
                </p>
                <p>
                  <strong>Issued on:</strong> {cert.date}
                </p>
                <p>
                  <strong>Credential ID:</strong> {cert.credentialId}
                </p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </div>
              <img
                src={cert.issuerImage}
                alt={cert.issuedBy}
                className="issuer-logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
