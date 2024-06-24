import React from "react";

const LoginSuccessPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h3>Login Successful</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginSuccessPopup;