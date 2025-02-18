import React from 'react';
import '../styles/yesno.css';

const YesNoDialog = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <p>{message}</p>
        <div className="button-group">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default YesNoDialog;
