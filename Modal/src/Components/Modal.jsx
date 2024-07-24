import React from "react";
import "./Model.css";
const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="model" onClick={onClose}>
      <div className="model-content" onClick={(e) => e.stopPropagation()}>
        <div className="model-header">
          <h3>Model Header</h3>
        </div>

        <div className="model-body">
          <p>cotent of the model</p>
        </div>

        <div className="model-footer">
          <button onClick={onClose}>close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
