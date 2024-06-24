import React from "react";

const InvalidCredentialsPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h3>Invalid Credentials</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InvalidCredentialsPopup;