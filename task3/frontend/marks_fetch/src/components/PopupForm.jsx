import React, { useState } from 'react';
import '../styles/popupform.css';

const PopupForm = ({ mark, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    Subject1: mark?.Subject1 || '',
    Subject2: mark?.Subject2 || '',
    Subject3: mark?.Subject3 || '',
    Subject4: mark?.Subject4 || '',
    Subject5: mark?.Subject5 || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...mark,
      ...formData
    });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Edit Marks</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Subject 1:
            <input
              type="number"
              name="Subject1"
              value={formData.Subject1}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Subject 2:
            <input
              type="number"
              name="Subject2"
              value={formData.Subject2}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Subject 3:
            <input
              type="number"
              name="Subject3"
              value={formData.Subject3}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Subject 4:
            <input
              type="number"
              name="Subject4"
              value={formData.Subject4}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Subject 5:
            <input
              type="number"
              name="Subject5"
              value={formData.Subject5}
              onChange={handleChange}
              required
            />
          </label>
          <div className="button-group">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;


