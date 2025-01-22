import React from "react";
import "./modal.css";

function Modal({ isOpen, onClose, item }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h4>Tools Used:</h4>
        <ul>
          {item.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
        <h4>Screenshots:</h4>
        <div className="screenshots">
          {item.screenshots.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot}
              alt={`Screenshot ${index + 1}`}
              className="screenshot-img"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
